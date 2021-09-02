
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

// variabile numero bombe
let numberBomb;

// vita del giocatore
let life;

// numeri dell'utente da raggiungere per vittoria
let numberWin;

// chiedo il livello di difficoltà
let arrayLevel = ["facile","medio","difficile"];

let difficultyLevel = prompt("Inserisci livello di difficoltà");
while ((difficultyLevel.length === 0) || ( !arrayLevel.includes(difficultyLevel.trim().toLowerCase()))){
    difficultyLevel = prompt("Reinserisci livello di difficoltà");
}

let variabileProvvisoria = getGameLevel(difficultyLevel);

life = variabileProvvisoria[0];
numberBomb = variabileProvvisoria[1];
numberWin = variabileProvvisoria[2];

document.getElementById("player-difficulty").innerHTML = difficultyLevel;

// creo 16 numeri casuali diversi da inserire nell'array del pc
let i = 0;
while(pcNumber.length < numberBomb){
    arrayNumeri.push(getRandomInt(1 , 100));
    if(pcNumber.indexOf(arrayNumeri[i]) === -1){
        pcNumber.push(arrayNumeri[i]);
    }
    
    i++;
}
console.log("Numeri del pc: "+pcNumber);
// creo array utente
let numeriUtente = [];

document.getElementById("player-life").innerHTML = life;
// chiedo all'utente dei numeri da inserire controllando che non si ripetano e non siano uguali a quelli del pc
while((numeriUtente.length < numberWin) && (life > 0)){
    let numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 100"));
    if((numeroUtente>0) && (numeroUtente<101)){
        if(pcNumber.includes(numeroUtente) === true){
            alert("KABOOOOOOOOOMMM");
            life = life - 1;
            document.getElementById("player-life").innerHTML = life;
        }else if(numeriUtente.indexOf(numeroUtente) === -1){
            numeriUtente.push(numeroUtente);
            document.getElementById("player-number").innerHTML = numeriUtente;
        }else{
            alert("Inserisci un numero diverso");
        }
    }else{
        alert("Inserisci un numero corretto!! da 1 a 100.");
    }
    i++;
}

if(life === 0){
    alert("Hai perso!!! ritenta");
}else if(numeriUtente.length == numberWin){
    alert("Complimenti hai vinto!!");
}

document.getElementById("player-score").innerHTML = numeriUtente.length;
document.getElementById("pc-number").innerHTML = pcNumber;


// funzione per il livello
function getGameLevel(gameLevel){

    let vita;
    let numeroBombe;
    let numeroPunti;

    switch (gameLevel){
        
        case "facile":
            vita = 3;
            numeroBombe = 16;
            numeroPunti = 6;
            break;

            case "medio":
                vita = 2;
                numeroBombe = 16;
                numeroPunti = 12;
                break;

                case "difficile":
                    vita = 1;
                    numeroBombe = 25;
                    numeroPunti = 25;
                    break;

                    default:
                        vita = 3;
                        numeroBombe = 16;
                        numeroPunti = 6;
    }

    return[vita , numeroBombe , numeroPunti];
}


console.log("Punteggio: "+numeriUtente.length);

console.log("Numeri utente: "+numeriUtente);

