/*
    Criar uma classe pessoa

    nome, peso, altura

    as pessoas podem falar seu IMC
    Crie o josé que tem 70kg e 1.75 de altura e peça pra ele falar seu IMC
*/

class Pessoa{

    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    dizerIMC(){
        return this.peso / (Math.pow(this.altura,2));
    }
    
    classificarIMC(){

        const imc = this.dizerIMC();

        if (imc<18.5){
            return 'Abaixo do peso';
        }
        else if (imc>=18.5 && imc<25){
            return 'com o Peso normal';
        }
        else if (imc>=25 && imc<30){
            return 'acima do peso';
        }
        else if (imc>=30 && imc<=40){
            return 'Obesa';
        }
        else {
            return 'com Obesidade grave';
        }
    }
}

(function (){

    const pessoa1 = new Pessoa('José', 70, 1.75);

    console.log('Meu nome é '+pessoa1.nome+' e meu IMC é '+pessoa1.dizerIMC());
    console.log('Eu sou uma pessoa '+pessoa1.classificarIMC());

    return 0;
})();