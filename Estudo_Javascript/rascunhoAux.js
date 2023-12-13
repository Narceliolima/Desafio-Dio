const listaNum = [5, 50, 10, 98, 23];
let indice = 0;

function gets(){
    if(indice<listaNum.length){
        indice++;
        return listaNum[indice-1];
    }
    else{
        return null;
    }
}

function print(texto){
    console.log(texto);
}

module.exports = {gets, print};