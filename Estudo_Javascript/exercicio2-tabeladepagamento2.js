const tabelaCondicao = ["Duas vezes", "Debito", "Pix/Dinheiro", "Varias Parcelas"];

function calculaTotalValor(preco, jurosOuDesconto){
    return preco * (1 - (jurosOuDesconto/100));
}

function calculaPagamento(condicaoDePagamento, preco){
    if (condicaoDePagamento===0){
        return preco;
    }
    else if (condicaoDePagamento===1){
        return calculaTotalValor(preco, 10);
    }
    else if(condicaoDePagamento===2){
        return calculaTotalValor(preco, 15);
    }
    else {
        return calculaTotalValor(preco, -10);
    }
}


(function (){

    const preco = 9.99;
    const condicaoDePagamento = 2;
    const valorTotal = calculaPagamento(condicaoDePagamento, preco);

    console.log('Metodo de pagamento: '+tabelaCondicao[condicaoDePagamento]);
    console.log('Valor: '+valorTotal);

    return 0;
})();