import cipher from './cipher.js';
console.log(cipher);{
};

window.addEventListener("load", inicio, true);
//Mayusculas
function inicio() {
    document.getElementById("textoparacifrar").addEventListener("keyup",function(){
        this.value = this.value.toUpperCase();    
    }, true);
    //Funcion para cifrar
    document.getElementById("cifrar").addEventListener("click", function(){
        let texto = document.getElementById("textoparacifrar").value;
        let movimiento = document.getElementById("cantidad").value;
        document.getElementById("textocifrado").value = cifrar (texto, movimiento);
    }, true);

    //Funcion para descifrar
    document.getElementById("descifrar").addEventListener("click",function(){
        let texto = document.getElementById("textoparacifrar").value;
        let movimiento = document.getElementById("cantidad").value;
        document.getElementById("textocifrado").value = descifrar (texto, movimiento);
    }, true);
}

function cifrar(texto, movimiento){
    let resultado ="";
    let letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    movimiento = (movimiento %26 + 26) %26;

    if (texto){
        for (let i = 0; i<texto.length; i++){
            if(letras.indexOf(texto[i])!=-1) {
                let posicion = ((letras.indexOf(texto[i])+movimiento)%26);
                resultado += letras [posicion];
            }
            else
            resultado += texto[i];
        }

    }
    return resultado;

}

