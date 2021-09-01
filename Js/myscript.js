
// creo un numero randomico intero da min a max 
function getRandomInt(min, max) {
    min = Math.ceil(min);       // prende il massimo del numero minimo dato (arrotondamento per eccesso)
    max = Math.floor(max);      // prende il minimo del numero massimo dato (arrotondamento per difetto)
    return Math.floor(Math.random() * (max - min + 1)) + min; // calcola un numero randomico nel suo intervallo
}

// creo gli array per inserire i numeri
let arrayNumeri = [];

// i numeri del pc
let pcNumber = [];

// creo 16 numeri casuali diversi da inserire nell'array del pc
let i = 0;
while(pcNumber.length < 16){
    arrayNumeri.push(getRandomInt(1 , 100));
    if(pcNumber.indexOf(arrayNumeri[i]) === -1){
        pcNumber.push(arrayNumeri[i]);
    }
    
    i++;
}

console.log(arrayNumeri);
console.log("Numeri del pc: "+pcNumber);
