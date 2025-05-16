
document.addEventListener('DOMContentLoaded', function() {
    // Configurações
    const USE_API = true; 
    const API_URL = 'https://127.0.0.1:3000/empresa/:id'; // Endpoint para dados do cabeçalho
    const FORM_SUBMIT_URL = 'https://127.0.0.1:3000/cadastrar/participante_mobile'; // Endpoint para enviar formulário
    const form = document.getElementById('cadastroForm');
    const successModal = new bootstrap.Modal(document.getElementById('successModal'));

    // Função para carregar dados do cabeçalho
    async function carregarCabecalho() {
        try {
            const dados = await obterDadosCabecalho();
            renderizarCabecalho(dados);
        } catch (error) {
            console.error("Falha ao carregar cabeçalho:", error);
            mostrarErroCabecalho();
        }
    }

    async function obterDadosCabecalho() {
        if (!USE_API) {
            // Dados simulados para desenvolvimento
            return {
                empresa: "Empresa Exemplo",
                empreendimento: "Loja Centro",
                data: new Date().toISOString().split('T')[0],
                periodo: "Manhã"
            };
        }

        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('Erro ao carregar dados da empresa');
        return await response.json();
    }

    function renderizarCabecalho(dados) {
        const dataFormatada = new Date(dados.data).toLocaleDateString('pt-BR');
        document.getElementById('cabecalho-dados').innerHTML = `
            <h2>${dados.empresa}</h2>
            <p><strong>Empreendimento:</strong> ${dados.empreendimento}</p>
            <p><strong>Data:</strong> ${dataFormatada}</p>
            <p><strong>Período:</strong> ${dados.periodo}</p>
        `;
    }

    function mostrarErroCabecalho() {
        document.getElementById('cabecalho-dados').innerHTML = `
            <div class="alert alert-warning">
                Não foi possível carregar os dados da empresa.
            </div>
        `;
    }

    // Manipulação do formulário
    form.addEventListener('submit', async function(e) {
        e.preventDefault();

        try {
            const formData = obterDadosFormulario();

            if (!validarFormulario(formData)) {
                mostrarErroValidacao();
                return;
            }

            await enviarDadosParaBackend(formData);
            redirecionarAposSucesso();

        } catch (error) {
            handleError(error.message);
        }
    });

    function obterDadosFormulario() {
        return {
            nome: document.getElementById('nome').value.trim(),
            equipe: document.getElementById('equipe').value.trim(),
            supervisao: document.getElementById('supervisao').value.trim(),
            dataCadastro: new Date().toISOString()
        };
    }

    function validarFormulario(data) {
        return data.nome !== '' &&
               data.equipe !== '' &&
               data.supervisao !== '';
    }

    function mostrarErroValidacao() {
        const modalBody = document.querySelector('#successModal .modal-body');
        modalBody.innerHTML = 'Por favor, preencha todos os campos obrigatórios!';
        modalBody.classList.add('text-danger');
        successModal.show();
    }

    async function enviarDadosParaBackend(formData) {
        if (!USE_API) {
            // Modo de desenvolvimento - apenas simula o envio
            console.log('Dados do formulário (simulação):', formData);
            successModal.show();
            form.reset();
            return;
        }

        try {
            const response = await fetch(FORM_SUBMIT_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer seu-token-de-autenticacao' // Se necessário
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (!response.ok) {
                if (response.status === 409) {
                    throw new Error('NOME_DUPLICADO');
                }
                throw new Error(result.message || 'Erro ao enviar formulário');
            }

            const modalBody = document.querySelector('#successModal .modal-body');
            modalBody.textContent = result.message || 'Cadastro realizado com sucesso!';
            modalBody.classList.remove('text-danger');

            successModal.show();
            form.reset();

        } catch (error) {
            if (error.message === 'NOME_DUPLICADO') {
                window.location.href = `error.html?msg=${encodeURIComponent('Este nome já está cadastrado na lista!')}&tipo=NOME_DUPLICADO`;
            } else {
                handleError(error.message);
            }
        }
    }

    function redirecionarAposSucesso() {
        setTimeout(() => {
            window.location.href = 'espera.html';
        }, 3000);
    }

    // Alternador de tema
    document.querySelector('#themeToggle')?.addEventListener('click', alternarTema);

    function alternarTema() {
        const html = document.documentElement;
        const newTheme = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', newTheme);
    }

    // Manipulação de erros
    function handleError(errorMessage) {
        const encodedMsg = encodeURIComponent(errorMessage);
        window.location.href = `error.html?msg=${encodedMsg}`;
    }

    // Inicialização
    carregarCabecalho();
});

