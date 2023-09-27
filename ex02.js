/**
 * We have an object called 'adventurer' with the properties and values already provided.
 * Run the method greeting and print the return to the console
 * 
 * Expected output on console:
 * My name is Jack the Adventurer!
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

// Print the return of the method greeting