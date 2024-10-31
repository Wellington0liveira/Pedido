document.getElementById("sim").addEventListener("click", () => {
  const container = document.querySelector(".container");
  container.innerHTML = "<h1>A cada dia mais próxima do plano</h1>";
  mostrarBotaoVoltar(); // Mostra o botão Voltar
});

document.getElementById("nao").addEventListener("click", () => {
  const container = document.querySelector(".container");
  container.innerHTML = `
    <h1>VAI ACEITAR SIMM 😡😡</h1>
    <button id="novo-sim" class="btn">Sim</button>
  `;

  // Aumenta o tamanho do botão
  aumentarTamanhoBotao();

  document.getElementById("novo-sim").addEventListener("click", () => {
    container.innerHTML = "<h1>A cada dia mais próxima do plano</h1>";
    mostrarBotaoVoltar(); // Mostra o botão Voltar
  });
});

// Função para mostrar o botão "Voltar"
function mostrarBotaoVoltar() {
  document.getElementById("voltar").style.display = "block"; 
}

// Função para o botão "Voltar"
function voltarPagina() {
  const container = document.querySelector(".container");
  container.innerHTML = `
    <h1>O contrato vc ja fez, minha parte agora é fazer o pedido. Aceitaria casar comigo dia 10/10/2030? 💍</h1>
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
    container.innerHTML = "<h1>A cada dia mais próxima do plano</h1>";
    mostrarBotaoVoltar(); // Mostra o botão Voltar
  });

  document.getElementById("nao").addEventListener("click", () => {
    const container = document.querySelector(".container");
    container.innerHTML = `
      <h1>VAI ACEITAR SIMM 😡😡</h1>
      <button id="novo-sim" class="btn">Sim</button>
    `;

    // Aumenta o tamanho do botão "Sim"
    aumentarTamanhoBotao();

    document.getElementById("novo-sim").addEventListener("click", () => {
      container.innerHTML = "<h1>A cada dia mais próxima do plano</h1>";
      mostrarBotaoVoltar(); 
    });
  });
}

// Função p aumentar o botão
function aumentarTamanhoBotao() {
  const botaoSim = document.getElementById("novo-sim");
  let tamanho = 20; 
  const tamanhoMaximo = 300; 

  const intervalo = setInterval(() => {
    if (tamanho < tamanhoMaximo) {
      tamanho += 5; // Aumenta o tamanho em 5 pixels
      botaoSim.style.fontSize = tamanho + "px"; //Atualiza
    } else {
      clearInterval(intervalo); // Para qnd chegar no tamanho max
    }
  }, 500); // 500ms
}

adicionarEventos();
