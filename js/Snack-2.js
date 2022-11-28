// Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.

const userNumberList = [];

let userNumber;

let calc = 0;

do{
    userNumber = parseInt(prompt("Inserisci un numero"));
    calc += userNumber;
    userNumberList.push(calc)
} while (calc < 50);

console.log(userNumberList);