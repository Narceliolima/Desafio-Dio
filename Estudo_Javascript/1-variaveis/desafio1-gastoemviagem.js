/*
    Comentário rápido: Antigamente usavar o var
    var = declarado a qualquer hora, pode ser reusado e redeclarado dentro de condicionais e funções
    let = declarado a qualquer hora, porém se redeclarado retorna erro, pode ser reutilizado dentro de 
    condicionais e funções, é mais seguro utiliza-la.
*/

const precoCombustivel = 5.79;
const gastoMedioCarro = 12;
const distanciaKM = 1580;


let totalGasto = (precoCombustivel/gastoMedioCarro)*distanciaKM;

console.log("O carro irá gastar um total de "+totalGasto+"R$ em combustível");
console.log(totalGasto.toFixed(2));
