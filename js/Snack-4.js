// Prendere due array della stessa lunghezza e generarne un terzo, prendendo alternativamente gli elementi da uno e dall'altro es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

const lettersList = ['a','b','c'];

const numerbList = [1,2,3];

const numberLettersList = [];

let concatenation;

for (let i = 0 ; i < lettersList.length ; i++){
    numberLettersList.push(lettersList[i]);
    numberLettersList.push(numerbList[i]);
} 

console.log (numberLettersList);