/**
 * We have an object called 'adventurer' with the properties and values already provided.
 * Using .length, count and print the total number of items in the inventory.
 * Use template literal (`) on your console.log.
 * 
 * Expected output:
 * Jack has 4 items in his inventory.
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
