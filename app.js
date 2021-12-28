// calculadora

const button = document.getElementById("submit");

button.addEventListener("click", () => {
  const operation = document.getElementById("operation").value;
  const number = document.getElementById("numero").value;
  const number2 = document.getElementById("numero2").value;
  const resultadoDiv = document.getElementById("resultados");

  resultadoDiv.innerHTML = `<h2>Resultado: ${eval(
    number + operation + number2
  )}</h2>`;
});
