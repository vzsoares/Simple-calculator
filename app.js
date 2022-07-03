const button = document.getElementById("submit");

button.addEventListener("click", () => {
  const operation = document.getElementById("operation").value;
  const number = document.getElementById("number").value;
  const number2 = document.getElementById("number2").value;
  const resultadoDiv = document.getElementById("result");

  resultadoDiv.innerHTML = `<h2>Result: ${eval(
    number + operation + number2
  )}</h2>`;
});
