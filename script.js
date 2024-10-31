document.getElementById("sim").addEventListener("click", () => {
  const container = document.querySelector(".container");
  container.innerHTML = "<h1>Você clicou em sim</h1>";
});

document.getElementById("nao").addEventListener("click", () => {
  const container = document.querySelector(".container");
  container.innerHTML = "<h1>Você clicou em não</h1>";
});
