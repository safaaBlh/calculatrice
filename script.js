function append(value) {
  const display = document.getElementById("display");
  display.value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function deleteLast() {
  const display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

function calculate() {
  const display = document.getElementById("display");
  try {
    // Remplacer % par division par 100
    display.value = eval(display.value.replace('%', '/100'));
  } catch (error) {
    alert("Expression invalide !");
    display.value = "";
  }
}