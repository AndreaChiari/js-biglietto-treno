console.log('JS OK');

/*
1) chiedo all'utente il numero di chilometri che vuole percorrere
2) chiedo all'utente l'eta'
3) definisco la variabile del costo di 0.21 euro al KM 
4) calcolo il costo totale del biglietto con il costo al KM
5) applico la variabile del 20% di sconto al prezzo se l'individuo e' minorenne
6) applico la variabile del 40% di sconto al prezzo se l'individuo e' maggiore di 65 anni
7) controllo in console il prezzo finale espresso in due decimali.
*/



//applico i prompt che definiscono le due variabili principali

const distance = prompt('quanti kilometri vuoi percorrere?');
const age = prompt('quanti anni hai?');
console.log(distance,age);


//applico una variabile che andra' a definire il costo totale del kilometraggio

const distanceCost = (0.21 * distance);
console.log(distanceCost);


//applico una condizionale che definira' il costo del biglietto se l'individuo e' minorenne

if (age < 18) {
    const minorAge= (distanceCost * 0.2).toFixed(2);
    console.log(minorAge);
 }
 
 //applico una condizionale che definira' il costo del biglietto se l'individuo e' over 65 anni
 
 if (age > 65) {
     const overAge= (distanceCost * 0.4 ).toFixed(2);
     console.log(overAge);
 }

