# 🚀 Projeto STAFF - Sistema de Gestão de RH

![Status do Projeto](https://img.shields.io/badge/status-em%20desenvolvimento-yellowgreen)
![Python Version](https://img.shields.io/badge/python-3.11%2B-blue)
![Licença](https://img.shields.io/badge/licen%C3%A7a-MIT-blue)

Uma plataforma moderna e intuitiva de gestão de Recursos Humanos, projetada para centralizar e automatizar processos essenciais. O STAFF visa fornecer uma ferramenta robusta para o gerenciamento de colaboradores e suas jornadas de trabalho.

---

## 📋 Tabela de Conteúdos

1.  [Visão Geral](#-visão-geral)
2.  [✨ Funcionalidades](#-funcionalidades)
3.  [🛠️ Tecnologias Utilizadas](#️-tecnologias-utilizadas)
4.  [📄 Documentação](#-documentação)
5.  [🤝 Contribuidores](#-contribuidores)
6.  [📜 Licença](#-licença)

---

## 📖 Visão Geral

O sistema STAFF é uma plataforma de RH que, em sua versão inicial, contempla dois módulos principais: **Cadastro de Funcionários** e **Gestão de Ausências**. Ele serve como um ponto central para administradores e o setor de RH gerenciarem informações vitais dos colaboradores, desde seus dados cadastrais até o controle de férias e licenças.

---

## ✨ Funcionalidades

O sistema está organizado nos seguintes módulos e funcionalidades:

### Módulo 1: Cadastro de Funcionários
* **CRUD completo de Funcionários:** Crie, visualize, atualize e remova registros de colaboradores.
* **Listagem e Paginação:** Navegue facilmente por uma lista de todos os funcionários.
* **Busca e Filtros:** Encontre funcionários rapidamente por nome, cargo, status, etc.
* **Importação em Massa:** Cadastre múltiplos funcionários de uma vez através de uma planilha (Excel/CSV).
* **Gestão de Perfis:** Diferenciação de níveis de acesso (Administrador vs. Usuário Padrão).

### Módulo 2: Gestão de Ausências
* **Formulário de Solicitação:** Submeta pedidos de ausência (férias, atestados, etc.) de forma simples.
* **Tipos de Ausência Configuráveis:** O sistema suporta diferentes tipos de afastamento.
* **Anexo de Documentos:** Possibilidade de anexar arquivos, como atestados médicos.
* **Fluxo de Aprovação:** Gestores podem aprovar ou recusar solicitações com justificativas.
* **Notificações Automáticas:** Usuários são notificados sobre o status de suas solicitações.
* **Cálculo de Saldo de Férias:** Controle automático do saldo de férias disponível.
* **Calendário de Equipe:** Visualize as ausências aprovadas da equipe em um calendário.

---

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído utilizando um stack moderno com foco em Python:

* **Frontend:** Streamlit
* **Backend:** Python com FastAPI
* **Banco de Dados:** MySQL (SQLite3)
* **Containerização:** Docker
* **Documentação:** Mermaid.js (para diagramas)

---

## 📄 Documentação

Toda a documentação do projeto, incluindo o **Levantamento de Requisitos** e os **Diagramas** (Casos de Uso, ERD, Sequência e Classes), está disponível no diretório `/docs` do repositório.

---

## 🤝 Contribuidores

Este projeto é um desenvolvimento da materia de Desenvolvimento Agil na Universidade Federal do Paraná, está sendo desenvolvido pela **Equipe X-Men**,.

* Davi Leme de Castro Nascimento Batista - 2102323
* Eduardo Mendes - 2432994
* João Bosco Salviano de Carvalho - 1915452
* Taynara Luísa Pecorario - 1914154

---

## 📜 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
