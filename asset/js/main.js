/* strumenti:
-prompt
-number
-if/else
-consol.log

 */

//chiedi il numero di chilometri
const kilometers = Number(
  prompt("Scrivi il numero di chilometri che devi percorrere")
);
console.log(kilometers);

//stampare in pagina

const distance = document.getElementById("kilometer");
distance.innerHTML = kilometers;
if (isNaN(kilometers)) {
  alert("devi scrivere una cifra numerica");
  distance.innerHTML = "manca la cifra";
}
//chiedi l'età del passeggero

const userAge = Number(prompt("Scrivi la tua età"));
console.log(userAge);

//stampare in pagina

const age = document.getElementById("age");
age.innerHTML = userAge;
if (isNaN(userAge)) {
  alert("devi scrivere una cifra numerica");
  age.innerHTML = "manca la cifra";
}
//alert se non scrivi una cifra

//calcola il prezo del viaggio in base ai chilometri

const ticketPrice = kilometers * 0.21;
console.log(ticketPrice);

// in base all'età si aplicheranno 2 scontistiche

let total;

if (userAge > 65) {
  let discount = ticketPrice * (40 / 100);
  total = ticketPrice - discount;
} else if (userAge < 18) {
  let discount = ticketPrice * (20 / 100);
  total = ticketPrice - discount;
} else {
  total = ticketPrice;
}
//totale con massimo 2 decimali
let finalPrice = total.toFixed(2);

//stampare in console
console.log(total);
console.log(finalPrice);

//stampare in pagina
const cost = document.getElementById("cost");
cost.innerHTML = finalPrice;

if (isNaN(kilometers) || isNaN(userAge)) {
  cost.innerHTML = "non puo essere calocolato";
}
