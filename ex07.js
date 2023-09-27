/**
 * We have an object called 'adventurer' with the properties and values already provided.
 * Jack decides to organize his inventory. Using the built-in .sort() function of JavaScript, sort the items in the array so that they are alphabetical.
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

/*------------------

YOUR CODE HERE

------------------*/

console.log(adventurer.inventory) // Should show ['apple', 'gold', 'potion', 'sword']