// Implementar solución aquí
// Crearemos el número hexadecimal

const miBoton = document.querySelector(".btn");

miBoton.addEventListener("click", (event) => {
  const colorHex = [];
  let numero = 0;
  for (let x = 0; x < 6; x++) {
    numero = Math.floor(Math.random() * 16);
    switch (numero) {
      case 9:
        colorHex.push("A");
        break;
      case 10:
        colorHex.push("B");
        break;
      case 11:
        colorHex.push("C");
        break;
      case 12:
        colorHex.push("D");
        break;
      case 13:
        colorHex.push("E");
        break;
      case 14:
        colorHex.push("F");
        break;
      default:
        colorHex.push(numero);
    }
  }
  document.querySelector("#hex-value").textContent = "#" + colorHex.join("");
  document.querySelector("body").style.backgroundColor = "#" + colorHex.join("");
});
