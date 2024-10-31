document.getElementById("sim").addEventListener("click", () => {
  const container = document.querySelector(".container");
  container.innerHTML = "<h1>Você clicou em sim</h1>";
  mostrarBotaoVoltar(); // Mostra o botão Voltar
});

document.getElementById("nao").addEventListener("click", () => {
  const container = document.querySelector(".container");
  container.innerHTML = `
    <h1>Você clicou em não</h1>
    <button id="novo-sim" class="btn">Sim</button>
  `;

  // Aumenta o tamanho do botão "Sim" a cada segundo
  aumentarTamanhoBotao();

  document.getElementById("novo-sim").addEventListener("click", () => {
    container.innerHTML = "<h1>Você clicou em sim</h1>";
    mostrarBotaoVoltar(); // Mostra o botão Voltar
  });
});

// Função para mostrar o botão "Voltar"
function mostrarBotaoVoltar() {
  document.getElementById("voltar").style.display = "block"; // Mostra o botão Voltar
}

// Função para o botão "Voltar"
function voltarPagina() {
  const container = document.querySelector(".container");
  container.innerHTML = `
    <h1>teste</h1>
    <div class="buttons">
      <button id="sim" class="btn">Sim</button>
      <button id="nao" class="btn">Não</button>
    </div>
  `;
  document.getElementById("voltar").style.display = "none"; // Esconde o botão Voltar
  adicionarEventos(); // Reaplica os eventos
}

// Função para adicionar eventos aos botões
function adicionarEventos() {
  document.getElementById("sim").addEventListener("click", () => {
    const container = document.querySelector(".container");
    container.innerHTML = "<h1>Você clicou em sim</h1>";
    mostrarBotaoVoltar(); // Mostra o botão Voltar
  });

  document.getElementById("nao").addEventListener("click", () => {
    const container = document.querySelector(".container");
    container.innerHTML = `
      <h1>Você clicou em não</h1>
      <button id="novo-sim" class="btn">Sim</button>
    `;

    // Aumenta o tamanho do botão "Sim"
    aumentarTamanhoBotao();

    document.getElementById("novo-sim").addEventListener("click", () => {
      container.innerHTML = "<h1>Você clicou em sim</h1>";
      mostrarBotaoVoltar(); // Mostra o botão Voltar
    });
  });
}

// Função para aumentar o tamanho do botão
function aumentarTamanhoBotao() {
  const botaoSim = document.getElementById("novo-sim");
  let tamanho = 20; // Tamanho inicial do botão em pixels
  const tamanhoMaximo = 300; // Tamanho máximo do botão em pixels

  const intervalo = setInterval(() => {
    if (tamanho < tamanhoMaximo) {
      tamanho += 5; // Aumenta o tamanho em 5 pixels
      botaoSim.style.fontSize = tamanho + "px"; // Atualiza o tamanho do botão
    } else {
      clearInterval(intervalo); // Para o intervalo quando o tamanho máximo for atingido
    }
  }, 1000); // Aumenta a cada 1000 milissegundos (1 segundo)
}

// Adiciona os eventos aos botões iniciais
adicionarEventos();
