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
    <h1>Teste</h1>
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

    document.getElementById("novo-sim").addEventListener("click", () => {
      container.innerHTML = "<h1>Você clicou em sim</h1>";
      mostrarBotaoVoltar(); // Mostra o botão Voltar
    });
  });
}

// Adiciona os eventos aos botões iniciais
adicionarEventos();
