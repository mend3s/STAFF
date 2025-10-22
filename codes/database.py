# database.py - Versão FINAL, COMPLETA e CORRIGIDA
import sqlite3

class DatabaseManager:
    def __init__(self, db_name='staff.db'):
        self.db_name = db_name
        self.conn = None

    def __enter__(self):
        self.connect()
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        self.close()

    def connect(self):
        try:
            self.conn = sqlite3.connect(self.db_name)
            self.conn.row_factory = sqlite3.Row
            # Habilita o suporte a chaves estrangeiras, essencial para a integridade dos dados
            self.conn.execute("PRAGMA foreign_keys = ON;")
        except sqlite3.Error as e:
            print(f"Erro ao conectar ao banco de dados: {e}")
            raise

    def close(self):
        if self.conn:
            self.conn.close()

    def execute_query(self, query, params=()):
        try:
            cursor = self.conn.cursor()
            cursor.execute(query, params)
            self.conn.commit()
            return cursor
        except sqlite3.Error as e:
            print(f"Erro ao executar a query: {e}")
            self.conn.rollback()
            raise

    def fetch_query(self, query, params=()):
        try:
            cursor = self.conn.cursor()
            cursor.execute(query, params)
            return cursor.fetchall()
        except sqlite3.Error as e:
            print(f"Erro ao buscar dados: {e}")
            raise
    
    def execute_many(self, query, data):
        try:
            cursor = self.conn.cursor()
            cursor.executemany(query, data)
            self.conn.commit()
            return cursor
        except sqlite3.Error as e:
            print(f"Erro ao executar a query em massa: {e}")
            self.conn.rollback()
            raise

    def create_tables(self):
        """Cria todas as tabelas do zero com a estrutura correta e completa, baseada no seu diagrama."""
        
        # Apaga as tabelas na ordem inversa de dependência para evitar erros de chave estrangeira
        self.execute_query("DROP TABLE IF EXISTS funcionario_beneficios;")
        self.execute_query("DROP TABLE IF EXISTS funcionarios;")
        self.execute_query("DROP TABLE IF EXISTS cargos;")
        self.execute_query("DROP TABLE IF EXISTS departamentos;")
        self.execute_query("DROP TABLE IF EXISTS bancos;")
        self.execute_query("DROP TABLE IF EXISTS senioridades;")
        self.execute_query("DROP TABLE IF EXISTS beneficios;")

        # --- Criação das Tabelas de Apoio (Lookup Tables) ---
        self.execute_query("CREATE TABLE departamentos (id INTEGER PRIMARY KEY, nome TEXT NOT NULL UNIQUE);")
        self.execute_query("CREATE TABLE cargos (id INTEGER PRIMARY KEY, nome TEXT NOT NULL UNIQUE);")
        self.execute_query("CREATE TABLE bancos (id INTEGER PRIMARY KEY, nome TEXT NOT NULL UNIQUE);")
        self.execute_query("CREATE TABLE senioridades (id INTEGER PRIMARY KEY, nome TEXT NOT NULL UNIQUE);")
        self.execute_query("CREATE TABLE beneficios (id INTEGER PRIMARY KEY, nome TEXT NOT NULL UNIQUE, tipo_beneficio TEXT NOT NULL);")
        
        # --- Criação da Tabela Principal de Funcionários ---
        query_funcionarios = """
        CREATE TABLE funcionarios (
            id INTEGER PRIMARY KEY,
            nome TEXT NOT NULL,
            status TEXT DEFAULT 'Ativo',
            data_admissao DATE,
            departamento_id INTEGER,
            cargo_id INTEGER,
            senioridade_id INTEGER,
            salario REAL,
            email TEXT UNIQUE,
            telefone TEXT,
            endereco TEXT,
            cidade TEXT,
            estado TEXT,
            cep TEXT,
            pais TEXT,
            data_nascimento DATE,
            genero TEXT,
            nacionalidade TEXT,
            numero_identificacao TEXT UNIQUE,
            banco_id INTEGER,
            agencia TEXT,
            conta TEXT,
            tipo_contrato TEXT,
            jornada_trabalho TEXT,
            observacoes TEXT,
            FOREIGN KEY (departamento_id) REFERENCES departamentos (id),
            FOREIGN KEY (cargo_id) REFERENCES cargos (id),
            FOREIGN KEY (banco_id) REFERENCES bancos (id),
            FOREIGN KEY (senioridade_id) REFERENCES senioridades (id)
        );
        """
        self.execute_query(query_funcionarios)
        
        # --- Criação da Tabela de Junção para a relação Muitos-para-Muitos ---
        query_funcionario_beneficios = """
        CREATE TABLE funcionario_beneficios (
            funcionario_id INTEGER,
            beneficio_id INTEGER,
            PRIMARY KEY (funcionario_id, beneficio_id),
            FOREIGN KEY (funcionario_id) REFERENCES funcionarios (id) ON DELETE CASCADE,
            FOREIGN KEY (beneficio_id) REFERENCES beneficios (id) ON DELETE CASCADE
        );
        """
        self.execute_query(query_funcionario_beneficios)
        
        print("Tabelas recriadas com a estrutura completa e correta!")

    # =================================================================
    # --- CRUD COMPLETO PARA FUNCIONÁRIOS ---
    # =================================================================

    def create_funcionario(self, funcionario_data):
        beneficios_ids = funcionario_data.pop('beneficios', [])
        columns = ', '.join(funcionario_data.keys())
        placeholders = ', '.join(['?'] * len(funcionario_data))
        query = f"INSERT INTO funcionarios ({columns}) VALUES ({placeholders});"
        cursor = self.execute_query(query, tuple(funcionario_data.values()))
        novo_id = cursor.lastrowid
        if novo_id and beneficios_ids:
            for beneficio_id in beneficios_ids:
                self.execute_query("INSERT INTO funcionario_beneficios (funcionario_id, beneficio_id) VALUES (?, ?);", (novo_id, beneficio_id))
        return novo_id

    def read_all_funcionarios(self):
        """Lê todos os funcionários, juntando nomes e a lista de benefícios."""
        query = """
        SELECT f.*, 
               d.nome AS departamento_nome, 
               c.nome AS cargo_nome,
               (SELECT GROUP_CONCAT(b.nome, ', ') 
                FROM beneficios b
                JOIN funcionario_beneficios fb ON b.id = fb.beneficio_id
                WHERE fb.funcionario_id = f.id) AS beneficios_lista
        FROM funcionarios f
        LEFT JOIN departamentos d ON f.departamento_id = d.id
        LEFT JOIN cargos c ON f.cargo_id = c.id;
        """
        rows = self.fetch_query(query)
        return [dict(row) for row in rows]

    def read_funcionario_by_id(self, funcionario_id):
        """Lê um único funcionário pelo seu ID e busca os IDs dos seus benefícios."""
        query = """
        SELECT f.*, 
               (SELECT GROUP_CONCAT(fb.beneficio_id) 
                FROM funcionario_beneficios fb 
                WHERE fb.funcionario_id = f.id) AS beneficios
        FROM funcionarios f 
        WHERE f.id = ?;
        """
        rows = self.fetch_query(query, (funcionario_id,))
        if not rows:
            return None
        
        funcionario = dict(rows[0])
        if funcionario.get('beneficios'):
            funcionario['beneficios'] = [int(id_str) for id_str in funcionario['beneficios'].split(',')]
        else:
            funcionario['beneficios'] = []
            
        return funcionario

    def update_funcionario(self, funcionario_id, funcionario_data):
        """Atualiza um funcionário e seus benefícios de forma eficiente."""
        beneficios_ids = funcionario_data.pop('beneficios', None)
        
        if funcionario_data:
            set_clause = ', '.join([f'{key} = ?' for key in funcionario_data.keys()])
            query = f"UPDATE funcionarios SET {set_clause} WHERE id = ?;"
            params = tuple(funcionario_data.values()) + (funcionario_id,)
            self.execute_query(query, params)

        if beneficios_ids is not None:
            self.execute_query("DELETE FROM funcionario_beneficios WHERE funcionario_id = ?;", (funcionario_id,))
            
            if beneficios_ids:
                beneficios_tuplas = [(funcionario_id, b_id) for b_id in beneficios_ids]
                self.execute_many("INSERT INTO funcionario_beneficios (funcionario_id, beneficio_id) VALUES (?, ?);", beneficios_tuplas)
        
        return True

    def delete_funcionario(self, funcionario_id):
        """Realiza um 'soft delete', atualizando o status do funcionário para 'Inativo'."""
        query = "UPDATE funcionarios SET status = 'Inativo' WHERE id = ?;"
        cursor = self.execute_query(query, (funcionario_id,))
        return cursor.rowcount > 0

    # --- Métodos de Leitura Padronizados ---
    def read_all_departamentos(self):
        return [dict(row) for row in self.fetch_query("SELECT id, nome FROM departamentos;")]
    def read_all_cargos(self):
        return [dict(row) for row in self.fetch_query("SELECT id, nome FROM cargos;")]
    def read_all_bancos(self):
        return [dict(row) for row in self.fetch_query("SELECT id, nome FROM bancos;")]
    def read_all_senioridades(self):
        return [dict(row) for row in self.fetch_query("SELECT id, nome FROM senioridades;")]
    def read_all_beneficios(self):
        return [dict(row) for row in self.fetch_query("SELECT id, nome, tipo_beneficio FROM beneficios;")]