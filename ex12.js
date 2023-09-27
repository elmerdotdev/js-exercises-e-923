/**
 * We have an object called 'adventurer' with the properties and values already provided.
 * Create a function that adds all the different stats to get totalPower.
 * Inside the function, create the following conditions:
 * 
 * If total power is greater than or equal to 200, return and print the message `Overpowered!`
 * If total power is less than 200, return and print the message `Too weak!`
 */

let adventurer = {
  firstName: "Jack",
  stats: {attack: 80, defense: 47, magic: 62}
}

function getTotalPower(stats) {

}

console.log(getTotalPower(adventurer.stats)) // Expected output: 'Overpowered!' or 'Too weak!'