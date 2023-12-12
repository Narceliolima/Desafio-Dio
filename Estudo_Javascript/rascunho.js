
/*Objeto Carro*/
class carro {

    modelo = "";
    qntRodas = 0;
    qntPortas = 0;

    constructor (modelo, qntRodas, qntPortas){
        this.modelo = modelo;
        this.qntRodas = qntRodas;
        this.qntPortas = qntPortas;
    }

    darPartida (){
        console.log(this.modelo+" Está dando partida.");
    }

    acelerar (){
        console.log(this.modelo+" Está acelerando...");
    }
};

//main
(function (){

    const miata = new carro('Miata', 4, 2);
    const tt = new carro('TT', 4, 4);
    const f1 = new carro('F1', 4, 2);


    miata.qntPassageiros = 5; //Atribui um novo atributo do carro.
    
    
    delete miata.qntPortas; //Deleta um atributo do carro.
    

    console.log(tt['qntPassageiros']); //acesso dinâmico.
    console.log(miata['qntPassageiros']+" "+miata['qntPortas']);
    console.log(tt);
    console.log(miata);

    return 0;
})();