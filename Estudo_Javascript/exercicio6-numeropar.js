/**
 * Faça um programa que verifica uma lista de numero e imprima os numeros pares.
 */

(function (){

    const listaNumeros = [];

    for(let i=0; i<=50; i++){
        listaNumeros.push(i);
    }

    for(let i=0; i<listaNumeros.length; i++){
        if(listaNumeros[i]%2===0){
            console.log(listaNumeros[i]+" é um numero par!");
        }
    }
})();