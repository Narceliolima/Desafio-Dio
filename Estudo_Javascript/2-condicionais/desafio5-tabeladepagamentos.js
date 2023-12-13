/*
    Elabore o código para calcular uma porcentagem em cima da escolha do tipo de pagamento

    Condição de pagamento
    Á vista debito, 10% de desconto
    Á vista dinheiro ou pix, 15% de desconto
    Em duas vezes, o preço normal.
    Acima de duas vezes, preço normal mais 10% de juros
*/

const tabelaCondicao = ["Duas vezes", "Debito", "Pix/Dinheiro", "Varias Parcelas"];

const preco = 9.99;
const condicaoDePagamento = 0;
let valorTotal = 0;

if (condicaoDePagamento===0){
    valorTotal = preco;
}
else if (condicaoDePagamento===1){
    valorTotal = preco*0.9;
}
else if(condicaoDePagamento===2){
    valorTotal = preco*0.85;
}
else {
    valorTotal = preco*1.1;
    condicaoDePagamento = 3;
}

console.log('Metodo de pagamento: '+tabelaCondicao[condicaoDePagamento]);
console.log('Valor: '+valorTotal);