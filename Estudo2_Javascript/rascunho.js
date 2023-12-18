/**
 * Case sensitive: testeAlgo
 * Fracamente Tipada: var let e const
 * Casting automático dependendo do comando. (Conversão Forçada)
 * 
 * boolean: false/true
 * null~undefined
 * number: +-infinity e NaN
 * string: " ",'',´´
 * Symbol: Symbol('simbolo') (unico)
 */

//Objeto Literal
const Pessoa = {
    nome: 'default',
    idade: 18
}

const junior = {
    apelido: 'georges',
    __proto__: Pessoa //Herdando pessoa (extends?)
}

const vinicius = Object.create(Pessoa); //Herdando pessoa (deve ser extends)
/**
 * Para acessar o prototipo do literal é __proto__
 * do normal é prototype
 */

//---------------------------------------Antigo, mas é bom saber----------------------------------//
//Construtor de um objeto (Sim atravez de uma função)
function Carro(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
}

const carro = new Carro('Mazda', 'Miata');//Instanciando um objeto
Carro.prototype.acelerar = function () {
    console.log(`${this.modelo} está acelerando...`);
}

const gallardo = { rodas: 4 }

console.log(carro);
carro.acelerar();
Carro.call(gallardo, 'lamborgini', 'gallardo');
console.log(gallardo);
//---------------------------------------Antigo, mas é bom saber----------------------------------//

//---------------------------------------Funções----------------------------------//

//Declaração de uma função (Function Declaration)
function funcao1() {
    console.log(`Executando função...`);
}

//Atribuindo a função a outra variável função.
const funcaoAux = funcao1; // function () {} Atravéz de variável.

funcaoAux();

//Passando a função1 por parametro na função2, executando e retornando-a por parametro.
function funcao2(funcao1) {
    funcao1();
    console.log(`Executando outra função...`);
    return funcao1;
}

funcao2(funcao1)();

//Arrow Function (Declaração em seta se resumir.) Tem desvantagem de não pegar seu contexto (this)
const funcao3 = () => {
    console.log(`Ultima função...`);
}

funcao3();

function soma(x) {
    return function (y) {
        return x + y;
    }
}

//Closures (fechamento), basicamente ela é tu atribuir uma função que tem uma função dentro dela com um valor
const valorBase = soma(5);

console.log(valorBase(20));
console.log(valorBase(50));

//3 Formas de executar função
funcao1(); //Direta
funcao1.apply(gallardo, ['Um array']); //Apply, 1 objeto e 1 array
funcao1.call(Carro, 'Varios arrays'); //Call, 1 objeto e n arrays
new funcao1(); //Também invoca função.
//---------------------------------------Funções----------------------------------//

//---------------------------------------Lista----------------------------------//

const lista = [5, 8, 9, 7, 2, 5, 6, 6, 0, 4, 5, 4, 10, 9];

//forEach executa uma função pra cada posição e returna nada.
lista.forEach((valor, index) => {
    console.log(`Index: ${index} => Valor ${valor}`);
})

//filter executa uma função pra cada posição e retorna o valor definido pela condicional da função.
const listaNumerosImpares = lista.filter(function (numero) {
    return numero % 2 === 1;
})

//map executa pra cada valor, e retorna o valor que foi definido na função.
const listaNova = lista.map((valor) => valor.toString());//Função em arrow não precisa de corpo.

//reduce tende a concatenar os valores contidos dentro da lista a fim de transformar em 1 só.
const somaDosValores = lista.reduce(function (anterior, atual){
    return anterior + atual;
}, 0);//Inicializa com um valor.

//join, insere o valor entre os valores da lista
const listaJoin = lista.join('--');

console.log(listaNumerosImpares);
console.log(listaNova);
console.log(somaDosValores);
console.log(listaJoin);

//Teste FINAL

class Player {
    constructor (nickName){
        this.nickName = nickName;
    }
}

const listaPlayers = [new Player('Hollow'), new Player('Keishou'), new Player('Pisao'), 
new Player('WolfGuy'), new Player('DestructionGod'), new Player('Invkill')];

const playersComI = listaPlayers.filter((player) => player.nickName.includes('i')).map((player) => `<li>${player.nickName}</li>`).join('\n');

console.log(playersComI);

const certamenteNaoEThread = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Finalmente');
            resolve(0);
        }, 5000);
    }
);

console.log('Promessa feita');

certamenteNaoEThread
    .then((valor) => console.log(`Sucesso - Retorno ${valor}`))
    .catch((erro) => console.log(`Error - ${erro}`))
    .finally(() => console.log('Finalizado'));


const fileSystem = require('fs');
const path = require('path');

const localArquivo = path.resolve(__dirname, 'teste.txt');

//const promessaArquivo = fileSystem.promises.readFile(localArquivo);

/*promessaArquivo
    .then((arquivo) => arquivo.toString('utf-8'))
    .then((texto) => texto.replaceAll(' ','\n'))
    .then((textoSeparado) => console.log(textoSeparado.split('\n')))
    .catch((erro) => console.log('Deu ruim '+erro));
*/

async function buscarArquivo() { //Passa o nome do arquivo por parametro

    let arquivo;

    try {
        arquivo = await fileSystem.promises.readFile(localArquivo);
    } catch (error) {
        console.log(error);
    }

    const listaString = arquivo.toString('utf-8').split(' ');
    console.log(listaString); //Return arquivo
}

buscarArquivo();

console.log(Math.floor(Math.random() * 10));