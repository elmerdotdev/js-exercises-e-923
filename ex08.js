/**
 * We have an object called 'adventurer' with the properties and values already provided.
 * Jack picks up a new item on the ground. Using the built-in .splice() array function, insert 'shield' between 'gold' and 'potion'
 */

let adventurer = {
  firstName: "Jack",
  occupation: "Adventurer",
  health: 100,
  age: 18,
  greeting: function() {
    return `My name is ${this.firstName} the ${this.occupation}!`
  },
  inventory: ["apple", "gold", "potion", "sword"]
}

/*------------------

YOUR CODE HERE

------------------*/

console.log(adventurer.inventory) // Should show ['apple', 'gold', 'shield', 'potion', 'sword']