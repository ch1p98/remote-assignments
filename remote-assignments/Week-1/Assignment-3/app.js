function countAandB(input) {
  return (
    input.filter((x) => x == "a").length + input.filter((x) => x == "b").length
  );
}

function toNumber(input) {
  return input.map(function (i) {
    return i.charCodeAt(0) - 96;
  });
}

let input1 = ["a", "b", "c", "a", "c", "a", "c"];
let input2 = ["e", "d", "c", "d", "e"];
console.log(countAandB(input1));
console.log(toNumber(input1));

console.log(countAandB(input2));
console.log(toNumber(input2));
