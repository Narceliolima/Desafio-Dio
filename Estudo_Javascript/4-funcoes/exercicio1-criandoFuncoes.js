
function escreveNome (nome) {

    console.log('Olá: '+nome);
}

function verificaMaioridade (idade){

    if (idade<18){
        return false;
    }
    else{
        return true;
    }
}

(function (){

    escreveNome('Pisao');

    const idade = 18;
    console.log('Sou maior de idade? '+verificaMaioridade(idade));

    return 0;
})();