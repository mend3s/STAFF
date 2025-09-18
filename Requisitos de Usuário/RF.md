# 1. Requisitos Funcionais

<p align="justify">A <i>Tabela 1</i> a seguir contém os Requisitos Funcionais (RF) elicitados utizando a técnica de Brainstorm.</p>

|  ID  |                                                                                              Requisito                                                                                              | Prioridade | Requisitos Relacionados |
| :--: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------: | :---------------------: |
| RF01 | O sistema deve permitir o cadastro de um novo funcionário com os seguintes campos: Nome Completo, E-mail, Cargo, Departamento, Data de Admissão, Salário (opcional), Foto e Status (Ativo/Inativo). |    Alta    |            -            |
| RF02 |                                                       O sistema deve apresentar uma tela com a listagem de todos os funcionários cadastrados.                                                       |    Alta    |            -            |
| RF03 |                                    A listagem de funcionários deve exibir as seguintes colunas: ID, Nome, E-mail, Cargo, Departamento, Data de Admissão e Status.                                   |    Alta    |            -            |
| RF04 |                                                        O sistema deve permitir a edição de todas as informações de um funcionário existente.                                                        |    Alta    |            -            |
| RF05 |                     O sistema deve permitir a inativação de um funcionário. Ao inativar, o acesso do usuário ao sistema será bloqueado, mas seus dados permanecerão armazenados.                    |    Alta    |            -            |
| RF06 |                                                O sistema deve permitir a reativação de um funcionário previamente inativado, restaurando seu acesso.                                                |    Média   |            -            |
| RF07 |                                 O sistema deve permitir a remoção (exclusão) de um registro de funcionário. Uma vez removido, o cadastro não poderá ser recuperado.                                 |    Alta    |            -            |
| RF08 |                                              O sistema deve exibir modais de confirmação para as ações de inativar, reativar e remover um funcionário.                                              |    Alta    |            -            |
| RF09 |                                                   A tela de listagem deve possuir um campo de busca para pesquisar funcionários por nome ou cargo.                                                  |    Alta    |            -            |
| RF10 |                                                            A tela de listagem deve incluir filtros por Status, Cargo e Data de Admissão.                                                            |    Média   |            -            |
| RF11 |                                         A listagem de funcionários deve ser paginada, permitindo ao usuário definir quantos itens serão exibidos por página.                                        |    Média   |            -            |
| RF12 |                                                                O campo "Cargo" no formulário deve ser uma lista suspensa (dropdown).                                                                |    Alta    |            -            |
| RF13 |                                                             O campo "Departamento" no formulário deve ser uma lista suspensa (dropdown).                                                            |    Alta    |            -            |
| RF14 |                                                       O campo "Data de Admissão" no formulário deve utilizar um seletor de data (datepicker).                                                       |    Alta    |            -            |
| RF15 |                                                                 O campo "Status" no formulário deve ser um controle do tipo switch.                                                                 |    Alta    |            -            |
| RF16 |                            O sistema deve validar que os campos "Nome Completo", "E-mail", "Cargo", "Departamento" e "Data de Admissão" são de preenchimento obrigatório.                           |    Alta    |            -            |
| RF17 |                                                                   O sistema deve validar se o formato do campo "E-mail" é válido.                                                                   |    Alta    |            -            |
| RF18 |                                                              O sistema deve permitir o upload de uma foto para o perfil do funcionário.                                                             |    Média   |            -            |
| RF19 |                                                  O sistema deve possuir um botão para aplicar os filtros selecionados na listagem de funcionários.                                                  |    Alta    |            -            |
| RF20 |                                        O sistema deve possuir um botão para limpar todos os filtros aplicados, retornando a listagem ao seu estado original.                                        |    Alta    |            -            |
| RF21 |                                                O sistema deve permitir ao usuário remover a foto de um funcionário no formulário de cadastro/edição.                                                |    Média   |            -            |
| RF22 |                                             O sistema não deve permitir o cadastro de um novo funcionário com um e-mail que já exista na base de dados.                                             |    Alta    |            -            |
| RF23 |                                       Ao editar um funcionário, o sistema não deve permitir a alteração do e-mail para um que já pertença a outro funcionário.                                      |    Alta    |            -            |
| RF24 |                                  O sistema deve exibir uma mensagem de sucesso visível para o usuário após cadastrar, editar ou remover um funcionário com sucesso.                                 |    Alta    |            -            |
| RF25 |                             O sistema deve exibir uma mensagem de erro clara caso ocorra uma falha durante uma operação (ex: erro de validação, e-mail duplicado, etc.).                            |    Alta    |            -            |
| RF26 |                                                        O sistema deve possuir ao menos dois níveis de acesso: Administrador e Usuário Padrão.                                                       |    Alta    |            -            |
| RF27 |            Apenas usuários com o perfil de Administrador devem ter permissão para acessar o módulo de cadastro e realizar as operações de criar, editar, inativar e remover funcionários.           |    Alta    |            -            |





<div style="text-align: center">
<p>Tabela 1: Requisitos Funcionais</p>
</div>

# 2. Referências


<a href="../README.md">VOLTAR INÍCIO</a>
