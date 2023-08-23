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
//chiedi l'età del passeggero
const userAge = Number(prompt("Scrivi la tua età"));
console.log(userAge);
//calcola il prezo del viaggio in base ai chilometri
// in base all'età si aplicheranno 2 scontistiche
const ticketPrice = kilometers * 0.21;

console.log(ticketPrice);
let total;

if (userAge > 65) {
  total = ticketPrice * (40 / 100);
} else if (userAge < 18) {
  total = ticketPrice * (20 / 100);
} else {
  total = ticketPrice;
}
let finalPrice = total.toFixed(2);
console.log(total);
console.log(finalPrice);
//stampare in console
