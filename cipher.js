const cipher = {
  encode: function (movimiento, texto) {
    if (!texto.length || !movimiento) {
      throw new TypeError();
    }

    let resultado = "";
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    movimiento = ((movimiento % 26) + 26) % 26;

    if (texto) {
      for (let i = 0; i < texto.length; i++) {
        if (letras.indexOf(texto[i]) !== -1) {
          const posicion = (letras.indexOf(texto[i]) + movimiento) % 26;
          resultado += letras[posicion];
        } else resultado += texto[i];
      }
    }

    return resultado;
  },

  decode: function (movimiento,texto) {
    if (!texto.length || !movimiento) {
      throw new TypeError();
    }
    let resultado = "";
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    movimiento = ((movimiento % 26) - 26) % 26;

    if (texto) {
      for (let i = 0; i < texto.length; i++) {
        if (letras.indexOf(texto[i]) !== -1) {
          const posicion = (letras.indexOf(texto[i]) - movimiento) % 26;
          resultado += letras[posicion];
        } else resultado += texto[i];
      }
    }

    return resultado;
  },
};
export default cipher;
