/*
    Faça um programa para calcular o valor de uma viagem.

    5 variáveis.
    Preço do etanol
    Preço da gasolina
    O tipo do combustível que tá no carro
    Gasto médio de combustível por KM
    Distancia da viagem em KM

    Imprimir o valor para realizar a viagem.
*/

const combustivel = ["Gasolina", "Etanol"];

const precoCombustivelGasolina = 5.79;
const precoCombustivelEtanol = 8.29;
const tipoCombustivel = 1; //0 = Gasolina, 1 = Etanol
const gastoMedioCarro = 12;
const distanciaKM = 88;
let totalGasto = 0;

if (tipoCombustivel === 0) {
    totalGasto = (precoCombustivelGasolina / gastoMedioCarro) * distanciaKM;
}
else if (tipoCombustivel === 1) {
    totalGasto = (precoCombustivelEtanol / gastoMedioCarro) * distanciaKM;
}

console.log("O carro a " + combustivel[tipoCombustivel] + " irá gastar um total de " + totalGasto.toFixed(2) + "R$ em combustível");