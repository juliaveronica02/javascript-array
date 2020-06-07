var characterList = ["A", "B", "C", "D", "E", "F"];
console.log(characterList);
console.log(characterList[3]);
// (comment) array always count from 0. so the result is "D".
var characterPrompt = prompt("what is your favorite character?");
characterList.includes(characterPrompt);
// (comment) the result is true.

// (comment) using condition
if (characterList.includes(characterPrompt)) {
  alert("Welcome");
} else {
  alert("Sorry :).");
}

// (comment) output.push to add new item into array.
// (comment) example 1.
var output = [];
output.push(1);
console.log(output);
// result will be array.

// (comment) example 2.
var output = [];
output.push(1);
output.push(2);
console.log(output);
// result ((2) [1, 2]).
