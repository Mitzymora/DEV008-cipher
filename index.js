import cipher from "./cipher.js";

window.addEventListener("load", inicio, true);
//Mayusculas
function inicio() {
  document.getElementById("textoparacifrar").addEventListener(
    "keyup",
    function () {
      this.value = this.value.toUpperCase();
    },
    true
  );

  document.getElementById("botoncifrar").addEventListener(
    "click",
    function () {
      const texto = document.getElementById("textoparacifrar").value;
      const movimiento = document.getElementById("cantidad").value;
      document.getElementById("textocifrado").value = cipher.encode(
        movimiento,
        texto
      );
    },
    true
  );

  document.getElementById("botondescifrar").addEventListener(
    "click",
    function () {
      const texto = document.getElementById("textoparacifrar").value;
      const movimiento = document.getElementById("cantidad").value;
      document.getElementById("textocifrado").value = cipher.decode(
        movimiento,
        texto
      );
    },
    true
  );
}
