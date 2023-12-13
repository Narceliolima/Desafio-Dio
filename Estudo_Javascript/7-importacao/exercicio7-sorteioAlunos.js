const {gets, print} = require('../rascunhoAux');

/**
 * A sala contem 5 alunos e cada um tem um numero sorteado.
 * 
 * Faça um codigo que receba os 5 numeros e selecione o maior entre eles.
 * entrada: 5, 50, 10, 98, 23
 * 
 * saída: 98
 */

(function (){

    let maiorNum = 0;
    let valorGets = 0;

    while(valorGets!=null){

        valorGets = gets();

        if(valorGets>maiorNum){
            maiorNum = valorGets;
        }
    }

    print(maiorNum);
    print(valorGets);
})();