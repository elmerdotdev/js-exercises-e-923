/**
 * We have an object called 'adventurer' with the properties and values already provided.
 * Jack decides to use his potion to heal himself. Use .pop() to remove the last item from the inventory.
 * Then similar to your solution on ex05.js, add 20 to Jack's current health. Do not manually type in 100!
 */

let adventurer = {
  firstName: "Jack",
  occupation: "Adventurer",
  health: 80,
  age: 18,
  greeting: function() {
    return `My name is ${this.firstName} the ${this.occupation}!`
  },
  inventory: ["apple", "sword", "gold", "potion"]
}

/*------------------

YOUR CODE HERE

------------------*/

console.log(adventurer.health) // Should show 100
console.log(adventurer.inventory) // Should no longer show potion