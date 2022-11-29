/**
 * Crea una funzione che accetti due argomenti, e che restituisca un valore numerico randomico tra i due argomenti inclusi.
 */

function getRandomNumber(firstNumber, secondNumber){
    const numberRandom = Math.floor(Math.random() * (secondNumber - firstNumber + 1) + firstNumber);
    return numberRandom;
}

console.log(getRandomNumber(1, 80));
