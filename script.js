document.getElementById("sim").addEventListener("click", () => {
  const container = document.querySelector(".container");
  container.innerHTML = "<h1>Você clicou em sim</h1>";
});

document.getElementById("nao").addEventListener("click", () => {
  const container = document.querySelector(".container");
  container.innerHTML = `
    <h1>Você clicou em não</h1>
    <button id="novo-sim">Sim</button>
  `;

  // Adiciona um evento de clique para o novo botão "Sim"
  document.getElementById("novo-sim").addEventListener("click", () => {
    container.innerHTML = "<h1>Você clicou em sim</h1>";
  });
});
