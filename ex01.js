/**
 * We have an object called 'adventurer' with the properties and values already provided.
 * Print the firstName using dot notation.
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

console.log() // Print the firstName