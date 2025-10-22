# conect_data.py - Versão Final e Robusta
from flask import Flask, jsonify, request
from flask_cors import CORS
from database import DatabaseManager

app = Flask(__name__)
# Configuração de CORS mais simples e universalmente compatível
CORS(app)

# --- ROTAS DA API ---
# (As rotas não precisam de alteração, elas já estão corretas)

@app.route('/api/funcionarios', methods=['GET', 'POST'])
def handle_funcionarios():
    with DatabaseManager() as db:
        if request.method == 'GET':
            funcionarios = db.read_all_funcionarios()
            return jsonify(data=funcionarios)
        elif request.method == 'POST':
            dados = request.json
            if not dados: return jsonify(error="Dados não fornecidos."), 400
            novo_id = db.create_funcionario(dados)
            return jsonify(message="Funcionário criado com sucesso!", id=novo_id), 201

@app.route('/api/funcionarios/<int:id>', methods=['GET', 'PUT', 'DELETE'])
def handle_funcionario_by_id(id):
    with DatabaseManager() as db:
        if request.method == 'GET':
            funcionario = db.read_funcionario_by_id(id)
            if funcionario: return jsonify(data=funcionario)
            return jsonify(error=f"Funcionário com ID {id} não encontrado."), 404
        elif request.method == 'PUT':
            dados = request.json
            if not dados: return jsonify(error="Dados não fornecidos."), 400
            sucesso = db.update_funcionario(id, dados)
            if sucesso: return jsonify(message=f"Funcionário com ID {id} atualizado.")
            return jsonify(error=f"Funcionário com ID {id} não encontrado."), 404
        elif request.method == 'DELETE':
            sucesso = db.delete_funcionario(id)
            if sucesso: return jsonify(message=f"Funcionário com ID {id} inativado.")
            return jsonify(error=f"Funcionário com ID {id} não encontrado."), 404

# --- Rotas para os Selects ---
@app.route('/api/departamentos', methods=['GET'])
def get_all_departamentos():
    with DatabaseManager() as db:
        return jsonify(data=db.read_all_departamentos())

@app.route('/api/cargos', methods=['GET'])
def get_all_cargos():
    with DatabaseManager() as db:
        return jsonify(data=db.read_all_cargos())

@app.route('/api/bancos', methods=['GET'])
def get_all_bancos():
    with DatabaseManager() as db:
        return jsonify(data=db.read_all_bancos())

@app.route('/api/senioridades', methods=['GET'])
def get_all_senioridades():
    with DatabaseManager() as db:
        return jsonify(data=db.read_all_senioridades())

@app.route('/api/beneficios', methods=['GET'])
def get_all_beneficios():
    with DatabaseManager() as db:
        return jsonify(data=db.read_all_beneficios())


if __name__ == '__main__':
    app.run(port=5000, debug=True)