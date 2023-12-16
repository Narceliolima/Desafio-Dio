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
function Carro(marca, modelo){
    this.marca = marca;
    this.modelo = modelo;
}

const carro = new Carro('Mazda','Miata');//Instanciando um objeto
Carro.prototype.acelerar = function (){
    console.log(`${this.modelo} está acelerando...`);
}

const gallardo = { rodas: 4 }

console.log(carro);
carro.acelerar();
Carro.call(gallardo, 'lamborgini', 'gallardo');
console.log(gallardo);
//---------------------------------------Antigo, mas é bom saber----------------------------------//