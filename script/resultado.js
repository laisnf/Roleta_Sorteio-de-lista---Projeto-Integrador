document.addEventListener('DOMContentLoaded', function () {
  const posicaoSorteada = document.getElementById('posicao-sorteada');
  const btnSalvar = document.getElementById('btn-salvar');
  const btnSair = document.getElementById('btn-sair');

  const API_URL = 'https://127.0.0.1:3000/realizar-sorteio/:id_sorteio';
  const nomeUsuario = obterNomeUsuario(); // você precisa definir de onde vem o nome

  async function carregarPosicaoDoBackend(nome) {
      try {
          const response = await fetch(`${API_URL}?nome=${encodeURIComponent(nome)}`);
          if (!response.ok) throw new Error('Erro ao obter posição sorteada');
          const data = await response.json();
          posicaoSorteada.textContent = data.posicao;
      } catch (error) {
          console.error('Erro ao buscar posição:', error);
          posicaoSorteada.textContent = 'Erro';
      }
  }

  carregarPosicaoDoBackend(nomeUsuario); // chama assim que a página carrega

  criarConfettis();

  btnSalvar.addEventListener('click', salvarLista);
  btnSair.addEventListener('click', () => {
      window.location.href = 'agradecimento.html';
  });

  async function gerarPDF() {
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF();
      doc.text("Lista de Sorteio", 10, 10);
      doc.save("lista-sorteio.pdf");
  }

  document.getElementById("btn-salvar").addEventListener("click", async () => {
      try {
          await gerarPDF();
          setTimeout(() => {
              window.location.href = "agradecimento.html";
          }, 2000);
      } catch (error) {
          console.error("Erro ao salvar o PDF:", error);
      }
  });

  document.getElementById("btn-sair").addEventListener("click", () => {
      window.location.href = "agradecimento.html";
  });

  // Exemplo de como você pode obter o nome (ajuste conforme sua lógica)
  function obterNomeUsuario() {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get('nome') || 'Desconhecido';
  }
});
