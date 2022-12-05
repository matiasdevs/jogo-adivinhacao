let numeroComputador = Math.round(Math.random() * 5);
let numero;
let tentativas = 1;

let telaPrincipal = document.querySelector('.tela-principal');
let telaSecundaria = document.querySelector('.tela-secundaria');

let mensagem = document.querySelector('#mensagem-tentativas');

let buttonTentar = document.querySelector('#tentar-button');
let buttonReset = document.querySelector('#novamente-button');

let mensagemErro = document.querySelector('.mensagem-erro');

//FUNÇÃO CALLBACK (PASSADA COMO ARGUMENTO DE OUTRA FUNÇÃO)
function tentar(event) {
  event.preventDefault();
  numero = document.querySelector('#numero');
  
  if(Number(numero.value) == numeroComputador) {
    telaPrincipal.classList.add('hide');
    telaSecundaria.classList.remove('hide');
    mensagem.innerHTML = `Parabéns! Voce acertou em ${tentativas} tentativas!`
    
  } else {
    mensagemErro.classList.remove('hide');
  }
  tentativas++;
  numero.value = '';
}

//FUNÇÃO HANDLE QUE CHAMA A FUNÇÃO CALLBACK
buttonTentar.addEventListener('click', tentar)

function tentarNovamente() {
    telaPrincipal.classList.remove('hide');
    telaSecundaria.classList.add('hide');
    tentativas = 1;
    numeroComputador = Math.round(Math.random() * 5);
    document.querySelector('#numero').value = '';
    mensagemErro.classList.add('hide');
}

buttonReset.addEventListener('click', tentarNovamente)