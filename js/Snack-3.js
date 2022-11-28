// Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all'array che ha meno elementi fino a quando ne avrà tanti quanti l'altro.

const fistArrey = [1,2,3,4,5,6,7,8,9,07,56,556,67,4];

const secondArrey = [1,2,3,45,6,7,8,454,9,6,5,4,6,7,4,5,7,8,6,4,354,8,6,45,3,3,4,56,76,5];

console.log(`First Before After = ${fistArrey.length}`);
console.log(`First Before After = ${secondArrey.length}`);

while ( (fistArrey.length < secondArrey.length) || (fistArrey > secondArrey.length) ){
    if (fistArrey.length < secondArrey.length){
        fistArrey.push(0);
    } else if (fistArrey > secondArrey.length){
        secondArrey.push(0);
    }
}

console.log(`First Arrey After = ${fistArrey.length}`);
console.log(`First Arrey After = ${secondArrey.length}`);