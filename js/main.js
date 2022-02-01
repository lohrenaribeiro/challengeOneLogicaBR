const btnCripto = document.querySelector('#btn-cripto');
const btnDescripto = document.querySelector('#btn-descripto');
const btnCopy = document.querySelector('#btn-copy');


btnCripto.addEventListener("click", criptografar);
btnDescripto.addEventListener("click", descriptografar);
btnCopy.addEventListener("click", copiarTexto);


function criptografar(event) {
  event.preventDefault();
  const entradaTexto = document.querySelector('#input-texto');
  const texto = entradaTexto.value;
  const novoTexto = verificaCaracteres(texto.replace(/e/g, "enter").replace(/i/g, "imes").
  replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat"));
  const saidaTexto = document.querySelector('#msg').value = novoTexto;
  notFound();
  btn();
  return saidaTexto;
}

function descriptografar(event) {
  event.preventDefault();
  const entradaTexto = document.querySelector('#input-texto');
  const texto = entradaTexto.value;
  const novoTexto = verificaCaracteres(texto.replace(/enter/g, "e").replace(/imes/g, "i").
  replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u"));
  const saidaTexto = document.querySelector('#msg').value = novoTexto;
  copiarTexto();
  return saidaTexto;
}

function copiarTexto(event) {
  event.preventDefault();
  const saidaTexto = document.querySelector('#msg').value;
  const copiar = saidaTexto;
  const entradaTexto = document.querySelector('#input-texto').value = copiar;
  return entradaTexto;
}


function notFound() {
  const imgText = document.querySelector('.not-found');
  imgText.classList.add('active');
  return imgText;
}

function verificaCaracteres(verificaCaractere) {
  const regex = new RegExp('^[a-z 0-9\b]')
  if (!regex.test(verificaCaractere)) {
    return 'Somente letras minúsculas e sem acento.'
  } else {
    return verificaCaractere;
  }
}

function btn() {
  const btn = document.querySelector('#btn-copy');
  btn.classList.remove('btn-copy');
  return btn;
}