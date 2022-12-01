/**
 *
 * Data una lista di 20 numeri diversi.
 * generiamo una lista secondaria di
 * 10 numeri presi randomicamente dalla lista, diversi tra loro.
 *
 */
 const startingList = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

 const tenRandomNumbers = [];

 for (let i = 0; i < 10 ; i++){
    const randomNumberGenerator = Math.floor(Math.random() * startingList.length);
    tenRandomNumbers.push(randomNumberGenerator);


 }

 console.log(tenRandomNumbers);