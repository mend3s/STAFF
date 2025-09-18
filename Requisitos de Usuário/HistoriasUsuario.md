
# 1. História de Usuário

A Tabela 3 a seguir contém as Histórias de Usuárias elicitadas. 

<table>
  <thead>
    <tr style="background-color: purple; color: white">
      <th style="border-style:solid;border-width:1px;text-align:center">ID</th>
      <th style="border-style:solid;border-width:1px;text-align:center">História de Usuário</th>
      <th style="border-style:solid;border-width:1px;text-align:center">Critérios de aceitação</th>
      <th style="border-style:solid;border-width:1px;text-align:center">Prioridade</th>
      <th style="border-style:solid;border-width:1px;text-align:center">RF/RNF relacionado</th>
      <th style="border-style:solid;border-width:1px;text-align:center">Story Points</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">US01</td>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">
        Como <b>Administrador</b>, quero cadastrar um novo funcionário com Nome, E-mail, Cargo, Departamento, Data de Admissão, Foto, Salário (opcional) e Status, para registrar corretamente seus dados.
      </td>
      <td style="border-style:solid;border-width:1px;text-align:left;vertical-align:middle">
        <ol>
          <li>Validar campos obrigatórios.</li>
          <li>E-mail deve ter formato válido e não duplicar outro cadastro.</li>
          <li>Permitir upload e remoção de foto.</li>
          <li>Exibir mensagem de sucesso ou erro clara após salvar.</li>
        </ol>
      </td>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">Alta</td>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">RF01, RF16, RF17, RF18, RF21, RF22, RF24, RF25</td>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle"></td>
    </tr>
    <tr>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">US02</td>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">
        Como <b>Administrador</b>, quero editar todas as informações de um funcionário existente, para manter os dados atualizados.
      </td>
      <td style="border-style:solid;border-width:1px;text-align:left;vertical-align:middle">
        <ol>
          <li>Validar campos obrigatórios e restrições de e-mail.</li>
          <li>Exibir mensagem de sucesso ou erro.</li>
          <li>Permitir substituição ou remoção de foto.</li>
        </ol>
      </td>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">Alta</td>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">RF04, RF16, RF17, RF18, RF21, RF23, RF24, RF25</td>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle"></td>
    </tr>
    <tr>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">US03</td>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">
        Como <b>Administrador</b>, quero inativar ou reativar funcionários, para controlar acessos sem perder histórico.
      </td>
      <td style="border-style:solid;border-width:1px;text-align:left;vertical-align:middle">
        <ol>
          <li>Exibir modal de confirmação antes da ação.</li>
          <li>Inativar bloqueia acesso sem apagar dados.</li>
          <li>Reativar restaura o acesso.</li>
        </ol>
      </td>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">Alta</td>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">RF05, RF06, RF08</td>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle"></td>
    </tr>
    <tr>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">US04</td>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">
        Como <b>Administrador</b>, quero remover definitivamente um funcionário, para excluir registros irreversíveis.
      </td>
      <td style="border-style:solid;border-width:1px;text-align:left;vertical-align:middle">
        <ol>
          <li>Exibir modal de confirmação antes de remover.</li>
          <li>Após remover, o registro não pode ser recuperado.</li>
          <li>Exibir mensagem de sucesso ou erro clara.</li>
        </ol>
      </td>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">Alta</td>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">RF07, RF08, RF24, RF25</td>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle"></td>
    </tr>
    <tr>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">US05</td>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">
        Como <b>Usuário</b> (Administrador ou Padrão), quero visualizar uma listagem de funcionários, para ter visão geral da equipe.
      </td>
      <td style="border-style:solid;border-width:1px;text-align:left;vertical-align:middle">
        <ol>
          <li>Exibir colunas ID, Nome, E-mail, Cargo, Departamento, Data de Admissão e Status.</li>
          <li>Dados devem estar atualizados e consistentes.</li>
        </ol>
      </td>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">Alta</td>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">RF02, RF03</td>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle"></td>
    </tr>
     <tr>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">US06</td>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">Como <b>Usuário</b>, quero buscar funcionários por nome ou cargo, para localizar rapidamente alguém específico.</td>
      <td style="border-style:solid;border-width:1px;text-align:left;vertical-align:middle">
        <ol>
          <li>Campo de busca deve filtrar por nome ou cargo.</li>
          <li>Resultados atualizados sem recarregar a página inteira.</li>
        </ol>
      </td>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">Alta</td>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">RF09</td>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle"></td>
    </tr>
    <tr>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">US07</td>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">Como <b>Usuário</b>, quero filtrar a listagem por Status, Cargo e Data de Admissão, para refinar minha consulta.</td>
      <td style="border-style:solid;border-width:1px;text-align:left;vertical-align:middle">
        <ol>
          <li>Filtros disponíveis para Status, Cargo e Data de Admissão.</li>
          <li>Botão "Aplicar" aplica os filtros.</li>
          <li>Botão "Limpar" restaura a listagem original.</li>
        </ol>
      </td>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">Média</td>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">RF10, RF19, RF20</td>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle"></td>
    </tr>
    <tr>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">US08</td>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">Como <b>Usuário</b>, quero paginar a listagem de funcionários e definir quantos itens exibir, para navegar com eficiência.</td>
      <td style="border-style:solid;border-width:1px;text-align:left;vertical-align:middle">
        <ol>
          <li>Permitir escolha da quantidade de itens por página.</li>
          <li>Paginação deve funcionar corretamente.</li>
        </ol>
      </td>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">Média</td>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">RF11</td>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle"></td>
    </tr>
    <tr>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">US09</td>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">Como <b>Administrador</b>, quero usar dropdowns para Cargo e Departamento, um datepicker para Data de Admissão e um switch para Status, para facilitar preenchimento.</td>
      <td style="border-style:solid;border-width:1px;text-align:left;vertical-align:middle">
        <ol>
          <li>Dropdowns exibem opções corretas.</li>
          <li>Datepicker funcional e com formato válido.</li>
          <li>Switch altera Status corretamente.</li>
        </ol>
      </td>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">Alta</td>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">RF12, RF13, RF14, RF15</td>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle"></td>
    </tr>
    <tr>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">US10</td>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">Como <b>Administrador</b>, quero garantir que apenas perfis de Administrador possam cadastrar, editar, inativar ou remover funcionários, para manter a segurança.</td>
      <td style="border-style:solid;border-width:1px;text-align:left;vertical-align:middle">
        <ol>
          <li>Usuários padrão não acessam o módulo de cadastro.</li>
          <li>Ações restritas exibem aviso de permissão insuficiente.</li>
        </ol>
      </td>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">Alta</td>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">RF26, RF27</td>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle"></td>
    </tr>
    <tr>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">US11</td>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">Como <b>Administrador</b>, quero cadastrar diferentes tipos de ausência (ex.: Férias, Atestado Médico), para padronizar solicitações.</td>
      <td style="border-style:solid;border-width:1px;text-align:left;vertical-align:middle">
        <ol>
          <li>Permitir criar, editar e listar tipos de ausência.</li>
          <li>Tipos disponíveis no formulário de solicitação.</li>
        </ol>
      </td>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">Alta</td>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">RF28</td>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle"></td>
    </tr>
    <tr>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">US12</td>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">Como <b>Funcionário</b>, quero solicitar uma ausência escolhendo tipo, datas e descrição, e anexar arquivos quando necessário, para formalizar minha ausência.</td>
      <td style="border-style:solid;border-width:1px;text-align:left;vertical-align:middle">
        <ol>
          <li>Campos obrigatórios devem ser preenchidos.</li>
          <li>Upload obrigatório para tipos como Atestado Médico.</li>
          <li>Solicitação registrada com status inicial "Pendente".</li>
        </ol>
      </td>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">Alta</td>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">RF29, RF30</td>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle"></td>
    </tr>
    <tr>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">US13</td>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">Como <b>Administrador</b>, quero aprovar ou reprovar solicitações de ausência, para manter controle das ausências.</td>
      <td style="border-style:solid;border-width:1px;text-align:left;vertical-align:middle">
        <ol>
          <li>Listar solicitações pendentes com detalhes.</li>
          <li>Botões para Aprovar ou Reprovar cada solicitação.</li>
          <li>Status atualizado e registrado no histórico.</li>
        </ol>
      </td>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">Alta</td>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">RF31</td>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle"></td>
    </tr>
    <tr>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">US14</td>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">Como <b>Funcionário</b>, quero consultar o histórico das minhas ausências, para acompanhar o status e decisões.</td>
      <td style="border-style:solid;border-width:1px;text-align:left;vertical-align:middle">
        <ol>
          <li>Listar todas as solicitações realizadas pelo funcionário.</li>
          <li>Exibir status atual (Pendente, Aprovada, Reprovada).</li>
        </ol>
      </td>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">Média</td>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">RF32</td>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle"></td>
    </tr>
    <tr>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">US15</td>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">Como <b>Administrador</b>, quero configurar cargos e departamentos no sistema, para manter a estrutura organizacional atualizada.</td>
      <td style="border-style:solid;border-width:1px;text-align:left;vertical-align:middle">
        <ol>
          <li>Permitir cadastrar, editar e remover cargos e departamentos.</li>
          <li>Validação para evitar duplicidade de nomes.</li>
        </ol>
      </td>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">Média</td>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">RF33</td>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle"></td>
    </tr>
    <tr>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">US16</td>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">Como <b>Administrador</b>, quero gerar relatórios de ausências por período, tipo e departamento, para análise gerencial.</td>
      <td style="border-style:solid;border-width:1px;text-align:left;vertical-align:middle">
        <ol>
          <li>Filtros por período, tipo de ausência e departamento.</li>
          <li>Botão para exportar relatório em formato PDF.</li>
        </ol>
      </td>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">Alta</td>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">RF34</td>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle"></td>
    </tr>
    <tr>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">US17</td>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">Como <b>Usuário</b>, quero receber feedback visual e mensagens de sucesso ou erro ao realizar ações, para entender o resultado das minhas operações.</td>
      <td style="border-style:solid;border-width:1px;text-align:left;vertical-align:middle">
        <ol>
          <li>Exibir mensagens claras de sucesso ou erro após cada ação.</li>
          <li>Mensagens devem desaparecer automaticamente após alguns segundos.</li>
        </ol>
      </td>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">Média</td>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">RNF02</td>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle"></td>
    </tr>
    <tr>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">US18</td>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">Como <b>Usuário</b>, quero que o sistema seja responsivo para diferentes tamanhos de tela, para utilizá-lo em qualquer dispositivo.</td>
      <td style="border-style:solid;border-width:1px;text-align:left;vertical-align:middle">
        <ol>
          <li>A interface deve se adaptar adequadamente a celulares, tablets e desktops.</li>
          <li>Todos os elementos permanecem funcionais em qualquer resolução.</li>
        </ol>
      </td>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">Alta</td>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">RNF03</td>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle"></td>
    </tr>
    <tr>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">US19</td>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">Como <b>Administrador</b>, quero visualizar um dashboard com métricas de ausências e funcionários, para ter uma visão geral rápida do sistema.</td>
      <td style="border-style:solid;border-width:1px;text-align:left;vertical-align:middle">
        <ol>
          <li>Exibir gráficos e indicadores principais (ex.: ausências por mês, total de funcionários).</li>
          <li>Dados atualizados em tempo real ao acessar o dashboard.</li>
        </ol>
      </td>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">Média</td>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle">RF35</td>
      <td style="border-style:solid;border-width:1px;text-align:center;vertical-align:middle"></td>
    </tr>
  </tbody>
</table>

<div style="text-align: center">
<p>Tabela 3: História de Usuário</p>
</div>

## 5. Referências bibliográficas