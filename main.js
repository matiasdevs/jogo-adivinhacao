let numeroComputador = Math.round(Math.random() * 10);
let numero;
let tentativas = 1;

let telaPrincipal = document.querySelector('.tela-principal');
let telaSecundaria = document.querySelector('.tela-secundaria');

let mensagem = document.querySelector('#mensagem-tentativas');

let buttonTentar = document.querySelector('#tentar-button');
let buttonReset = document.querySelector('#novamente-button');

//FUNÇÃO CALLBACK (PASSADA COMO ARGUMENTO DE OUTRA FUNÇÃO)
function tentar(event) {
  event.preventDefault();
  let numero = Number(document.querySelector('#numero').value);
  
  if(numero == numeroComputador) {
    telaPrincipal.classList.add('hide');
    telaSecundaria.classList.remove('hide');
    mensagem.innerHTML = `Parabéns! Voce acertou em ${tentativas} tentativas!`
  }
  tentativas++;
}

//FUNÇÃO HANDLE QUE CHAMA A FUNÇÃO CALLBACK
buttonTentar.addEventListener('click', tentar)

function tentarNovamente() {
    telaPrincipal.classList.remove('hide');
    telaSecundaria.classList.add('hide');
    tentativas = 1;
    numeroComputador = Math.round(Math.random() * 10);
    document.querySelector('#numero').value = '';
}

buttonReset.addEventListener('click', tentarNovamente)