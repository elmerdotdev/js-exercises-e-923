/**
 * We have an object called 'adventurer' with the properties and values already provided.
 * Jack was attacked by a creature. Subtract his health by 20 by updating the health property value.
 */

let adventurer = {
  firstName: "Jack",
  occupation: "Adventurer",
  health: 100,
  age: 18,
  greeting: function() {
    return `My name is ${this.firstName} the ${this.occupation}!`
  },
  inventory: ["apple", "sword", "potion", "gold"]
}

adventurer.health = ???  // Formula: Get the current health value and subtract by 20. Do not manually type 80!

console.log(adventurer.health) // This is for testing. Should show 80