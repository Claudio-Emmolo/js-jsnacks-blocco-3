//Crea una funzione che dato un array, calcoli la somma dei suoi elementi.

const numberList = [10, 2, 2, 2, "80",  "ciao"];

function sum(array){
    let calc = 0;

    for (let i = 0 ; i < array.length ; i++){
        const castedElement = parseInt(array[i], 10);

        if ( !Number.isNaN(castedElement)){
            calc += castedElement;
        }
    }
    return calc;
}

console.log(sum(numberList));