# 1. Requisitos Funcionais

<p align="justify">A <i>Tabela 1</i> a seguir contém os Requisitos Funcionais (RF) elicitados utizando a técnica de Brainstorm.</p>

|  ID  |                                                                                              Requisito                                                                                              | Prioridade | Requisitos Relacionados |
| :--: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------: | :---------------------: |
| RF01 | O sistema deve permitir o cadastro de um novo funcionário com os seguintes campos: Nome Completo, E-mail, Cargo, Departamento, Data de Admissão, Salário (opcional), Foto e Status (Ativo/Inativo). |    Alta    |            -            |
| RF02 |                                                       O sistema deve apresentar uma tela com a listagem de todos os funcionários cadastrados.                                                       |    Alta    |            -            |
| RF03 |                                    A listagem de funcionários deve exibir as seguintes colunas: ID, Nome, E-mail, Cargo, Departamento, Data de Admissão e Status.                                   |    Alta    |           RF02          |
| RF04 |                                                        O sistema deve permitir a edição de todas as informações de um funcionário existente.                                                        |    Alta    |     RF16, RF17, RF23    |
| RF05 |                     O sistema deve permitir a inativação de um funcionário. Ao inativar, o acesso do usuário ao sistema será bloqueado, mas seus dados permanecerão armazenados.                    |    Alta    |            -            |
| RF06 |                                                O sistema deve permitir a reativação de um funcionário previamente inativado, restaurando seu acesso.                                                |    Média   |           RF05          |
| RF07 |                                 O sistema deve permitir a remoção (exclusão) de um registro de funcionário. Uma vez removido, o cadastro não poderá ser recuperado.                                 |    Alta    |            -            |
| RF08 |                                              O sistema deve exibir modais de confirmação para as ações de inativar, reativar e remover um funcionário.                                              |    Alta    |     RF05, RF06, RF07    |
| RF09 |                                                   A tela de listagem deve possuir um campo de busca para pesquisar funcionários por nome ou cargo.                                                  |    Alta    |           RF02          |
| RF10 |                                                            A tela de listagem deve incluir filtros por Status, Cargo e Data de Admissão.                                                            |    Média   |           RF02          |
| RF11 |                                         A listagem de funcionários deve ser paginada, permitindo ao usuário definir quantos itens serão exibidos por página.                                        |    Média   |           RF02          |
| RF12 |                                                                O campo "Cargo" no formulário deve ser uma lista suspensa (dropdown).                                                                |    Alta    |           RF01          |
| RF13 |                                                             O campo "Departamento" no formulário deve ser uma lista suspensa (dropdown).                                                            |    Alta    |           RF01          |
| RF14 |                                                       O campo "Data de Admissão" no formulário deve utilizar um seletor de data (datepicker).                                                       |    Alta    |           RF01          |
| RF15 |                                                                 O campo "Status" no formulário deve ser um controle do tipo switch.                                                                 |    Alta    |           RF01          |
| RF16 |                            O sistema deve validar que os campos "Nome Completo", "E-mail", "Cargo", "Departamento" e "Data de Admissão" são de preenchimento obrigatório.                           |    Alta    |           RF01          |
| RF17 |                                                                   O sistema deve validar se o formato do campo "E-mail" é válido.                                                                   |    Alta    |           RF01          |
| RF18 |                                                              O sistema deve permitir o upload de uma foto para o perfil do funcionário.                                                             |    Média   |           RF01          |
| RF19 |                                                  O sistema deve possuir um botão para aplicar os filtros selecionados na listagem de funcionários.                                                  |    Alta    |           RF10          |
| RF20 |                                        O sistema deve possuir um botão para limpar todos os filtros aplicados, retornando a listagem ao seu estado original.                                        |    Alta    |           RF10          |
| RF21 |                                                O sistema deve permitir ao usuário remover a foto de um funcionário no formulário de cadastro/edição.                                                |    Média   |           RF18          |
| RF22 |                                             O sistema não deve permitir o cadastro de um novo funcionário com um e-mail que já exista na base de dados.                                             |    Alta    |           RF01          |
| RF23 |                                       Ao editar um funcionário, o sistema não deve permitir a alteração do e-mail para um que já pertença a outro funcionário.                                      |    Alta    |           RF04          |
| RF24 |                                  O sistema deve exibir uma mensagem de sucesso visível para o usuário após cadastrar, editar ou remover um funcionário com sucesso.                                 |    Alta    |     RF01, RF04, RF07    |
| RF25 |                             O sistema deve exibir uma mensagem de erro clara caso ocorra uma falha durante uma operação (ex: erro de validação, e-mail duplicado, etc.).                            |    Alta    |  RF01, RF04, RF22, RF23 |
| RF26 |                                                        O sistema deve possuir ao menos dois níveis de acesso: Administrador e Usuário Padrão.                                                       |    Alta    |            -            |
| RF27 |            Apenas usuários com o perfil de Administrador devem ter permissão para acessar o módulo de cadastro e realizar as operações de criar, editar, inativar e remover funcionários.           |    Alta    |           RF26          |
| RF28 |                         O sistema deve permitir a configuração de diferentes tipos de ausência (ex: Férias, Atestado Médico, Licença Maternidade, Ausência não Justificada).                        |    Alta    |            -            |
| RF29 |               O funcionário deve poder submeter uma solicitação através de um formulário de ausência, onde seleciona o tipo, data de início, data de término e adiciona uma descrição.              |    Alta    |           RF28          |
| RF30 |                                       O formulário de ausência deve permitir anexar um arquivo, funcionalidade obrigatória para tipos como "Atestado Médico".                                       |    Alta    |           RF29          |
| RF31 |                              O sistema deve possuir um fluxo de aprovação, onde gestores (ou Administradores) são notificados para aprovar ou recusar as solicitações.                              |    Alta    |           RF29          |
| RF32 |                                                       O gestor deve poder adicionar uma justificativa ao recusar uma solicitação de ausência.                                                       |    Média   |           RF31          |
| RF33 |                                             O funcionário deve ser notificado sobre toda mudança de status de sua solicitação (ex: Aprovada, Recusada).                                             |    Alta    |        RF29, RF31       |
| RF34 |                   O sistema deve calcular e exibir o saldo de dias de férias disponível para cada funcionário. Este saldo só deve ser considerado para ausências do tipo "Férias".                  |    Alta    |           RF28          |
| RF35 |                                  Ao solicitar uma ausência do tipo "Férias", o sistema deve validar se o período solicitado não excede o saldo de dias disponível.                                  |    Alta    |           RF34          |
| RF36 |                          O sistema deve permitir o cadastro rápido de ausências em massa por parte de um Administrador, através da importação de uma planilha (Excel/CSV).                          |    Média   |           RF28          |
| RF37 |                                       O sistema deve apresentar um calendário de equipe para que gestores visualizem as ausências aprovadas de seus liderados.                                      |    Média   |           RF31          |
| RF38 |                                            O funcionário deve poder visualizar um histórico de suas solicitações de ausência com seus respectivos status.                                           |    Alta    |        RF29, RF31       |
| RF39 |                                               O funcionário deve poder cancelar uma solicitação de ausência que ainda esteja com o status "Pendente".                                               |    Média   |           RF29          |


<div style="text-align: center">
<p>Tabela 1: Requisitos Funcionais</p>
</div>

# 2. Referências


<a href="../README.md">VOLTAR INÍCIO</a>
