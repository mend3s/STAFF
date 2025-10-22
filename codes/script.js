document.addEventListener('DOMContentLoaded', function() {
    // --- ELEMENTOS DO DOM ---
    const sidebar = document.querySelector('.sidebar');
    const toggleBtn = document.querySelector('#toggle-btn');
    const menuLinks = document.querySelectorAll('.menu-links a');
    const pages = document.querySelectorAll('.page-content');
    const tableBody = document.getElementById('funcionarios-table-body');
    const modal = document.getElementById('funcionario-modal');
    const btnNovoFuncionario = document.getElementById('btn-novo-funcionario');
    const btnCancelarModal = document.getElementById('btn-cancelar-modal');
    const funcionarioForm = document.getElementById('funcionario-form');
    const modalTitle = document.getElementById('modal-title');
    const confirmModal = document.getElementById('confirm-delete-modal');
    const btnCancelDelete = document.getElementById('btn-cancel-delete');
    const btnConfirmDelete = document.getElementById('btn-confirm-delete');
    const paginationInfo = document.getElementById('pagination-info');
    const paginationControls = document.getElementById('pagination-controls');
    let employeeIdToDelete = null;

    // --- Seletores e instâncias do Choices.js ---
    const deptoSelect = document.getElementById('departamento_id');
    const cargoSelect = document.getElementById('cargo_id');
    const bancoSelect = document.getElementById('banco_id');
    const senioridadeSelect = document.getElementById('senioridade_id');
    const beneficiosSelect = document.getElementById('beneficios');
    let deptoChoices, cargoChoices, bancoChoices, senioridadeChoices, beneficiosChoices;

    // --- ESTADO DA APLICAÇÃO ---
    const API_BASE_URL = 'http://localhost:5000/api';
    let currentPage = 1;
    let itemsPerPage = 10;
    let funcionariosDataLoaded = false; // Flag para carregar dados apenas uma vez

    // =================================================================
    // --- LÓGICA DE NAVEGAÇÃO SPA ---
    // =================================================================
    const pageMap = {
        'Home': 'page-home',
        'Funcionarios': 'page-funcionarios',
        'Ausencias': 'page-ausencias'
    };
    
    async function showPage(pageId) {
        pages.forEach(page => { page.style.display = 'none'; });
        const activePage = document.getElementById(pageId);
        if (activePage) {
            activePage.style.display = 'block';

            if (pageId === 'page-funcionarios' && !funcionariosDataLoaded) {
                await refreshFuncionariosList();
                await populateSelectBoxes();
                funcionariosDataLoaded = true;
            }
        }
    }

    // =================================================================
    // --- FUNÇÕES DA API (CRUD COMPLETO) ---
    // =================================================================
    async function apiFetch(endpoint) {
        try {
            const response = await fetch(`${API_BASE_URL}/${endpoint}`);
            if (!response.ok) throw new Error(`Erro HTTP: ${response.status}`);
            return await response.json();
        } catch (error) { console.error(`Falha em apiFetch para ${endpoint}:`, error); return null; }
    }
    async function apiPost(endpoint, bodyData) {
        try {
            const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(bodyData),
            });
            if (!response.ok) throw new Error(`Erro HTTP: ${response.status}`);
            return await response.json();
        } catch (error) { console.error(`Falha em apiPost para ${endpoint}:`, error); }
    }
    async function apiUpdate(endpoint, id, bodyData) {
        try {
            const response = await fetch(`${API_BASE_URL}/${endpoint}/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(bodyData),
            });
            if (!response.ok) throw new Error(`Erro HTTP: ${response.status}`);
            return await response.json();
        } catch (error) { console.error(`Falha em apiUpdate para ${endpoint}/${id}:`, error); }
    }
    async function apiDelete(endpoint, id) {
        try {
            const response = await fetch(`${API_BASE_URL}/${endpoint}/${id}`, { method: 'DELETE' });
            if (!response.ok) throw new Error(`Erro HTTP: ${response.status}`);
            return await response.json();
        } catch (error) { console.error(`Falha em apiDelete para ${endpoint}/${id}:`, error); }
    }
    
    // =================================================================
    // --- FUNÇÕES DE RENDERIZAÇÃO E DADOS ---
    // =================================================================
    function renderFuncionarios(funcionarios) {
        if (!tableBody) return;
        tableBody.innerHTML = '';
        if (!funcionarios || funcionarios.length === 0) {
            tableBody.innerHTML = '<tr><td colspan="8" style="text-align:center;">Nenhum funcionário encontrado.</td></tr>';
            return;
        }
        funcionarios.forEach(func => {
            const tr = document.createElement('tr');
            const statusClass = func.status === 'Ativo' ? 'status-ativo' : 'status-inativo';
            const dataAdmissao = func.data_admissao ? new Date(func.data_admissao).toLocaleDateString('pt-BR', { timeZone: 'UTC' }) : 'N/A';
            
            tr.innerHTML = `
                <td>${String(func.id).padStart(3, '0')}</td>
                <td>${func.nome}</td>
                <td>${func.email || 'N/A'}</td>
                <td>${func.cargo_nome || 'N/A'}</td>
                <td>${func.departamento_nome || 'N/A'}</td>
                <td>${dataAdmissao}</td>
                <td><span class="status ${statusClass}">${func.status}</span></td>
                <td class="table-actions">
                    <a href="#" class="edit-btn" data-id="${func.id}" title="Editar"><span class="material-symbols-outlined">edit</span></a>
                    <a href="#" class="delete-btn" data-id="${func.id}" title="Deletar"><span class="material-symbols-outlined">delete</span></a>
                </td>
            `;
            tableBody.appendChild(tr);
        });
    }

    async function refreshFuncionariosList() {
        const url = `funcionarios?page=${currentPage}&limit=${itemsPerPage}`;
        const response = await apiFetch(url);
        if (response && response.data) {
            renderFuncionarios(response.data);
            renderPagination(response.pagination);
        } else {
            renderFuncionarios([]);
            renderPagination({ currentPage: 1, totalPages: 1, totalItems: 0 });
        }
    }
    
    function renderPagination(pagination) {
        if (!paginationControls || !paginationInfo) return;
        paginationControls.innerHTML = '';
        if (!pagination) return;
        const { currentPage, totalPages, totalItems } = pagination;
        const startItem = totalItems === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1;
        const endItem = Math.min(startItem + itemsPerPage - 1, totalItems);
        paginationInfo.textContent = `Mostrando ${startItem}-${endItem} de ${totalItems}`;
        for (let i = 1; i <= totalPages; i++) {
            const pageButton = document.createElement('button');
            pageButton.textContent = i;
            pageButton.dataset.page = i;
            if (i === currentPage) { pageButton.classList.add('active'); }
            paginationControls.appendChild(pageButton);
        }
    }
    
    async function populateSelectBoxes() {
        const endpoints = ['departamentos', 'cargos', 'bancos', 'senioridades', 'beneficios'];
        const results = await Promise.all(endpoints.map(ep => apiFetch(ep)));
        const [departamentos, cargos, bancos, senioridades, beneficios] = results.map(r => r ? r.data : []);

        const createOptions = (items) => {
            if (!items || !Array.isArray(items)) return [];
            return items.map(item => ({ value: item.id, label: `${item.id} - ${item.nome}` }));
        };
        const choicesConfig = { searchEnabled: true, removeItemButton: true, itemSelectText: 'Pressione para selecionar', noResultsText: 'Nenhum resultado', noChoicesText: 'Sem opções' };
        
        deptoChoices = new Choices(deptoSelect, { ...choicesConfig, choices: [{ value: '', label: 'Selecione...' }, ...createOptions(departamentos)] });
        cargoChoices = new Choices(cargoSelect, { ...choicesConfig, choices: [{ value: '', label: 'Selecione...' }, ...createOptions(cargos)] });
        bancoChoices = new Choices(bancoSelect, { ...choicesConfig, choices: [{ value: '', label: 'Selecione...' }, ...createOptions(bancos)] });
        senioridadeChoices = new Choices(senioridadeSelect, { ...choicesConfig, choices: [{ value: '', label: 'Selecione...' }, ...createOptions(senioridades)] });
        
        const gruposDeBeneficios = (beneficios || []).reduce((acc, beneficio) => {
            const tipo = beneficio.tipo_beneficio;
            if (!acc[tipo]) acc[tipo] = [];
            acc[tipo].push({ value: beneficio.id, label: beneficio.nome });
            return acc;
        }, {});
        const benefitOptionsGrouped = Object.keys(gruposDeBeneficios).map(grupo => ({ label: grupo, choices: gruposDeBeneficios[grupo] }));
        beneficiosChoices = new Choices(beneficiosSelect, { ...choicesConfig, removeItemButton: true, placeholder: true, placeholderValue: 'Selecione os benefícios...', choices: benefitOptionsGrouped });
    }

    // =================================================================
    // --- LÓGICA DO MODAL (UNIFICADA E CORRIGIDA) ---
    // =================================================================
    function showModal(funcionario = null) {
        funcionarioForm.reset();
        document.getElementById('funcionarioId').value = '';

        if (deptoChoices) deptoChoices.setChoiceByValue('');
        if (cargoChoices) cargoChoices.setChoiceByValue('');
        if (bancoChoices) bancoChoices.setChoiceByValue('');
        if (senioridadeChoices) senioridadeChoices.setChoiceByValue('');
        if (beneficiosChoices) beneficiosChoices.removeActiveItems();

        if (funcionario) {
            modalTitle.textContent = "Editar Funcionário";
            Object.keys(funcionario).forEach(key => {
                const field = funcionarioForm.querySelector(`[name="${key}"]`);
                if (field && key !== 'beneficios') {
                    field.value = funcionario[key];
                }
            });
            if (deptoChoices) deptoChoices.setChoiceByValue(String(funcionario.departamento_id || ''));
            if (cargoChoices) cargoChoices.setChoiceByValue(String(funcionario.cargo_id || ''));
            if (bancoChoices) bancoChoices.setChoiceByValue(String(funcionario.banco_id || ''));
            if (senioridadeChoices) senioridadeChoices.setChoiceByValue(String(funcionario.senioridade_id || ''));
            if (beneficiosChoices && funcionario.beneficios && Array.isArray(funcionario.beneficios)) {
                const benefitIdsAsStrings = funcionario.beneficios.map(id => String(id));
                beneficiosChoices.setChoiceByValue(benefitIdsAsStrings);
            }
        } else {
            modalTitle.textContent = "Adicionar Novo Funcionário";
        }
        
        modal.style.display = 'flex';
    }
    function hideModal() { modal.style.display = 'none'; }
    function showConfirmModal(id) {
        employeeIdToDelete = id;
        confirmModal.style.display = 'flex';
    }
    function hideConfirmModal() {
        employeeIdToDelete = null;
        confirmModal.style.display = 'none';
    }
    btnNovoFuncionario.addEventListener('click', () => showModal());
    btnCancelarModal.addEventListener('click', hideModal);
    modal.addEventListener('click', (event) => { if (event.target === modal) hideModal(); });
    btnConfirmDelete.addEventListener('click', async () => {
        if (employeeIdToDelete) {
            await apiDelete('funcionarios', employeeIdToDelete);
            hideConfirmModal();
            await refreshFuncionariosList();
        }
    });
    btnCancelDelete.addEventListener('click', hideConfirmModal);
    
    // =================================================================
    // --- LÓGICA DE EVENTOS (SUBMIT E CLIQUES NA TABELA) ---
    // =================================================================
    funcionarioForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const formData = new FormData(funcionarioForm);
        const funcionarioData = Object.fromEntries(formData.entries());
        const id = funcionarioData.id;
        funcionarioData.beneficios = formData.getAll('beneficios');
        for (const key in funcionarioData) { if (funcionarioData[key] === '') delete funcionarioData[key]; }
        const camposNumericos = ['departamento_id', 'cargo_id', 'banco_id', 'senioridade_id'];
        camposNumericos.forEach(campo => { if (funcionarioData[campo]) funcionarioData[campo] = parseInt(funcionarioData[campo]); });
        if (funcionarioData.beneficios) funcionarioData.beneficios = funcionarioData.beneficios.map(id => parseInt(id));
        if (funcionarioData.salario) funcionarioData.salario = parseFloat(funcionarioData.salario);
        let result;
        if (id) {
            delete funcionarioData.id;
            result = await apiUpdate('funcionarios', id, funcionarioData);
        } else {
            result = await apiPost('funcionarios', funcionarioData);
        }
        if (result) {
            hideModal();
            await refreshFuncionariosList();
        }
    });
    tableBody.addEventListener('click', async (event) => {
        const editButton = event.target.closest('.edit-btn');
        const deleteButton = event.target.closest('.delete-btn');
        if (editButton) {
            event.preventDefault();
            const id = editButton.dataset.id;
            const response = await apiFetch(`funcionarios/${id}`);
            if(response) showModal(response.data);
        }
        if (deleteButton) {
            event.preventDefault();
            const id = deleteButton.dataset.id;
            showConfirmModal(id);
        }
    });
    
    paginationControls.addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON') {
            const page = parseInt(event.target.dataset.page, 10);
            if (page !== currentPage) {
                currentPage = page;
                refreshFuncionariosList();
            }
        }
    });

    // =================================================================
    // --- INICIALIZAÇÃO E SIDEBAR ---
    // =================================================================
    if (toggleBtn) toggleBtn.addEventListener('click', () => sidebar.classList.toggle('collapsed'));
    
    menuLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            document.querySelector('.menu-links li.active')?.classList.remove('active');
            const parentLi = link.closest('li');
            parentLi.classList.add('active');
            const pageKey = link.dataset.page;
            const pageIdToShow = pageMap[pageKey];
            if (pageIdToShow) {
                showPage(pageIdToShow);
            }
        });
    });
    
    function initializeApp() {
        const activeLink = document.querySelector('.menu-links li.active a');
        const initialPageKey = activeLink ? activeLink.dataset.page : 'home';
        showPage(pageMap[initialPageKey]);
    }

    initializeApp();
});