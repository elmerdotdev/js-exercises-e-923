/**
 * You have an array of three adventurers with different classes. Create a function that accepts two parameters: the adventurers array and the class that you want to filter.
 * 
 * Expected output:
 * Warriors: Jack, John
 * Mages: Jane
 * Archer: Joe
 * Priest: Jane, Julie
 */

let adventurers = [
  { firstName: "Jack", class: 'Warrior'},
  { firstName: "John", class: 'Warrior'},
  { firstName: "Jane", class: 'Mage'},
  { firstName: "Joe", class: 'Archer'},
  { firstName: "Jane", class: 'Priest'},
  { firstName: "Julie", class: 'Priest'},
]

function filterClass(adventurersList, targetClass) {
// YOUR CODE
}

let warriors = filterClass(adventurers, 'Warrior')
console.log('Warriors:', warriors)

let mages = filterClass(adventurers, 'Mage')
console.log('Mages:', mages)

let priests = filterClass(adventurers, 'Priest')
console.log('Priests:', priests)