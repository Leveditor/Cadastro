

let botao          = document.querySelector('#botao'); // ID DO BOTÃO DE CADASTRAR

// INPUTS DA TABELA
let nomeUsuario    = document.querySelector('#nome');
let emailUsuario   = document.querySelector('#email');
let digitoUsuario  = document.querySelector('#digito');
let numeroUsuario  = document.querySelector('#numero');
let senhaUsuario   = document.querySelector('#senha');

// verifação de nome, email, digito, numero e senha
let nome = /[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/;
let email = /\w@\w+\.\w+/;
let digito = /[0-9]/;
let numero = /[0-9]{9}/;
let senha = /^(?=.*\d)(?=.*[a-z])(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;

// botao para cadastar
botao.addEventListener('click', e => {

    verifica(e); //FUNÇÃO PARA VERIFICAR TODOS OS INPUTS
});

// FUNÇÃO PARA ADICIONAR E REMOVER ANIMAÇÃO DO BOTÃO CADASTRAR
function animation() {
    
        // quando os inputs não forem preechindos corretamente adicionar as seguintes classes
        botao.classList.add('animate__shakeX');
        botao.classList.add('btn-danger');
    
        // quando a animação acabar remover e adicionar a seguintes classes
        botao.addEventListener('animationend', () => {
            botao.classList.remove('animate__shakeX');
            botao.classList.remove('btn-danger');
            botao.classList.add('btn-success');
        });
}

function verifica(e) {

    // verifica nome 
    if (nome.test(nomeUsuario.value) == false) {

        e.preventDefault();
        nomeUsuario.classList.add('is-invalid'); //adicionar a classe 

        animation();
        
    } else if(nome.test(nomeUsuario.value) == true){

        e.preventDefault();
        nomeUsuario.classList.remove('is-invalid');
        nomeUsuario.classList.add('is-valid');

    }
 
    // verifica email
    if (email.test(emailUsuario.value) == false) {

        e.preventDefault();
        emailUsuario.classList.add('is-invalid');
        animation();

    } else if(email.test(emailUsuario.value) == true){

        e.preventDefault();
        emailUsuario.classList.remove('is-invalid');
        emailUsuario.classList.add('is-valid');

    }

    // verifica digito do numero
    if (digito.test(digitoUsuario.value) == false) {

        e.preventDefault();
        digitoUsuario.classList.add('is-invalid');
        animation();
        
    } else if(digito.test(digitoUsuario.value) == true){
        e.preventDefault();
        digitoUsuario.classList.remove('is-invalid');
        digitoUsuario.classList.add('is-valid');

    }

    // verifica o numero de celular ou telefone
    if (numero.test(numeroUsuario.value) == false) {

        e.preventDefault();
        numeroUsuario.classList.add('is-invalid');
        animation();
        
    } else if(numero.test(numeroUsuario.value) == true){

        e.preventDefault();
        numeroUsuario.classList.remove('is-invalid');
        numeroUsuario.classList.add('is-valid');
    }

    // verifica senha
    if (senha.test(senhaUsuario.value) == false) {

        e.preventDefault();
        senhaUsuario.classList.add('is-invalid');
        animation();

    } else if(senha.test(senhaUsuario.value) == true){

        e.preventDefault();
        senhaUsuario.classList.remove('is-invalid');
        senhaUsuario.classList.add('is-valid');
    }
}