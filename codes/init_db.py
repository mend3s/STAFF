# init_db.py
from database import DatabaseManager

if __name__ == "__main__":
    print("Inicializando o banco de dados e criando as tabelas...")
    db_manager = DatabaseManager()
    
    # Usamos o 'with' para garantir que a conexão seja fechada
    with db_manager:
        db_manager.create_tables()
        # Não há mais inserção de dados aqui!
        
    print("Processo de inicialização concluído.")