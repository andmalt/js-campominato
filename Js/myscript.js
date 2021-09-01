
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
console.log("Numeri del pc: "+pcNumber);
// creo array utente
let numeriUtente = [];

// vita del giocatore
let status = 1;

// chiedo all'utente dei numeri da inserire controllando che non si ripetano e non siano uguali a quelli del pc
while((numeriUtente.length < 6) && (status > 0)){
    let numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 100"));
    if(numeroUtente>0 && numeroUtente<101){
        if(pcNumber.includes(numeroUtente) === true){
            alert("KABOOOOOOOOOMMM");
            status = status - 1;
        }else if(numeriUtente.indexOf(numeroUtente) === -1){
            numeriUtente.push(numeroUtente);
        }else{
            alert("Inserisci un numero diverso");
        }
    }else{
        alert("Inserisci un numero corretto!! da 1 a 100.");
    }
    i++;
}

if(status === 0){
    alert("Hai perso!!! ritenta");
}else if(numeriUtente.length == 6){
    alert("Complimenti hai vinto!!");
}

console.log("Punteggio: "+numeriUtente.length);

console.log("Numeri utente: "+numeriUtente);

