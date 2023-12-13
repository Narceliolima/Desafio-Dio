/*
    Algoritmo que dada 3 notas calcule a media e imprima se ele foi aprovado ou não

    Media = (nota1 + nota2 + nota3)/3;

    Se <5 reprova
    Se entre 5 e 7 recuperação
    Se >7 aproved
*/

const nota1 = 4;
const nota2 = 3;
const nota3 = 7;
let notaMedia = (nota1 + nota2 + nota3) / 3;

console.log("Sua média é: "+notaMedia);

if (notaMedia<5){
    console.log('Reproved');
} else if(notaMedia>=5 && notaMedia<=7){
    console.log('Recuperação');
} else{
    console.log('Aproved');
}