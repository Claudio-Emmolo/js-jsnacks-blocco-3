//Crea una funzione che dato un array, calcoli la somma dei suoi elementi.

const numberList = [10, 2, 2, 2, "cioao"];

function sum(array){
    let calc = 0;

    for (let i = 0 ; i < array.length ; i++){
            calc += array[i];
    }
    return calc;
}

console.log(sum(numberList));