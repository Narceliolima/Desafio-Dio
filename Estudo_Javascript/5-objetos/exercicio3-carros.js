/* 
    Crie uma classe carro

    Carros possuem
    marca
    cor
    gasto médio de combustível por km

    crie um método para calcular o valor gasto em um percurso, entradas: distancia, precoCombustivel
*/

class Carro {

    marca;
    cor; 
    kmPorLitro;

    constructor (marca, cor, kmPorLitro){
        this.marca = marca;
        this.cor = cor;
        this.kmPorLitro = kmPorLitro;
    }

    valorPercurso(distancia, precoCombustivel){
        console.log(precoCombustivel/this.kmPorLitro*distancia);
    }
}


(function (){

    const miata = new Carro('mazda', 'vermelho', 15);
    const tt = new Carro('audi', 'vermelho', 25);
    const distancia = 30;
    const precoCombustivel = 5.20;

    miata.valorPercurso(distancia, precoCombustivel);
    tt.valorPercurso(distancia, precoCombustivel);

    return 0;
})();