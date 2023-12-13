/*
    Fazer o código que calcule o IMC.

    Fórmula do IMC
    IMC = peso / (altura * altura)

    Abaixo de 18.5 Abaixo do peso
    Entre 18.5 e 25 Peso Normal
    Entre 25 e 30 Acima do Peso
    Entre 30 e 40 Obeso
    Acima de 40 Obesidade Grave
*/

const altura = 1.55;
const peso = 80;

const imc = peso / (Math.pow(altura,2));

console.log('Resultado: '+ imc);

if (imc<18.5){
    console.log('Você está Abaixo do peso');
}
else if (imc>=18.5 && imc<25){
    console.log('Você está com o Peso normal');
}
else if (imc>=25 && imc<30){
    console.log('Você está acima do peso');
}
else if (imc>=30 && imc<=40){
    console.log('Você está Obeso');
}
else {
    console.log('Você está com Obesidade grave');
}