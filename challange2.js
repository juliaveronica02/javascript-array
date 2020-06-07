var output = [];
var count = 1;

function arrayChallange() {
  // write code here.
  if (count % 3 === 0 && count % 5 === 0) {
    output.push("ArrayChallange");
  } else if (count % 3 === 0) {
    output.push("Arrray");
  } else if (count % 5 === 0) {
    output.push("Challange");
  } else {
    output.push(count);
  }
  count++;
  console.log(output);
}
// result:
// (15) [1, 2, "Arrray", 4, "Challange", "Arrray", 7, 8, "Arrray", "Challange", 11, "Arrray", 13, 14, "ArrayChallange"].
