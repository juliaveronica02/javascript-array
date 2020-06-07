// challange who buying lunch?

function whosPaying(names) {
  // Don't change the code above.
  // write your code here.
  // (comment) how many names on list.
  var numberOfPeople = names.length;
  var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
  var randomPerson = names[randomPersonPosition];
  return randomPerson + " is going to buy lunch today.";
  // Don't change the code above.
}
// run: whosPaying("A", "B", "C", "D", "E", "F") when enter: "A is going to buy lunch today."
// example input: ["A", "B", "C", "D", "E", "F"].
// example output: "A is going to buy lunch today."
