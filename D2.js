/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

{
  let num1 = 23;
  let num2 = 43;

  let maggiore = num1 > num2 ? num1 : num2;

  console.log("il numero maggiore tra num1(23) e num2(43) è: " + maggiore);
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

{
  let num1 = 13;
  let diverso = num1 === 5 ? "equal" : "not equal";
  console.log("il numero è uguale a 5? " + diverso);
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

{
  let num1 = 25;
  let num2 = 36;

  if (num2 % 5 === 0) {
    console.log("num2 è divisibile per 5");
  } else if (num1 % 5 === 0) {
    console.log("num1(" + num1 + ") è divisibile per 5");
  }
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

{
  let num1 = 8;
  let num2 = 16;

  let numVal8 = num1 === 8 || num2 === 8 || num2 - num1 === 8 || num2 + num1 === 8 ? true : false;
  console.log("num1(8) o num2(16) oppure la loro addizione/sottrazione sono uguale a 8? " + numVal8);
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

{
  let totalShoppingCart = 49;
  let shippingCost = 10;
  if (totalShoppingCart > 50) {
    alert("Hai diritto alla spedizione gratuita!");
  } else {
    let total = totalShoppingCart + shippingCost;
    console.log("Non hai raggiunto il totale per ottenere la spedizione gratuita, quindi devi pagare: " + total);
  }
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

{
  let price = 54;
  let shippingCost = 10;
  let discount = 0.8;
  let totalShoppingCart = price * discount;
  if (totalShoppingCart > 50) {
    alert("Hai diritto alla spedizione gratuita!");
  } else {
    let total = totalShoppingCart + shippingCost;
    console.log("Non hai raggiunto il totale per ottenere la spedizione gratuita, quindi devi pagare: " + total);
  }
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

{
  let num1 = 23;
  let num2 = 45;
  let num3 = 17;

  if (num1 > num2 && num2 > num3) {
    console.log("num1 > num2 > num3 " + num1 + "-" + num2 + "-" + num3);
  } else if (num1 > num2 && num3 > num2 && num1 > num3) {
    console.log("num1 > num3 > num2 " + num1 + "-" + num3 + "-" + num2);
  } else if (num1 > num3 && num2 > num3 && num2 > num1) {
    console.log("num2 > num1 > num3 " + num2 + "-" + num1 + "-" + num3);
  }
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

{
  let a = 28;
  let isANumber = typeof a === "number";
  console.log("la variabile 'a' è un numero? " + isANumber);
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

{
  let a = 12;
  if (a % 2 === 0) {
    console.log("la variabile 'a' è un numero pari");
  } else {
    console.log("la variabile 'a' è un numero dispari");
  }
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let val = 7;
if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"]
};

/* SCRIVI QUI LA TUA RISPOSTA */

me.city = "toronto";
console.log(me);

/* ESERCIZIO 12
Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

me.skills.pop();
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const numbers = [];
numbers.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(numbers);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

numbers.splice(-1, 1, 100);
console.log(numbers);
