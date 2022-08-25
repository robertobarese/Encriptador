const entradaTexto = document.querySelector("#txt-input");
const saidaTexto = document.querySelector("#txt-output");

const botaoCriptografar = document.querySelector(".encriptografar");
const botaoDescriptografar = document.querySelector("descriptografar");




function criptografa() {
  let textoCriptografado = entradaTexto.value;

  let resultado = textoCriptografado
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");

    saidaTexto.value = resultado;
}


function descriptografar() {
  let textoDescriptografado = entradaTexto.value;

  let resultado = textoDescriptografado
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");

    saidaTexto.value = resultado;

  }

function copiarTexto() {
  const mensagemCriptografada = document.querySelector("#txt-output");
  mensagemCriptografada.select();
  navigator.clipboard.writeText(mensagemCriptografada.value);
  mensagemCriptografada.value = "";
}






