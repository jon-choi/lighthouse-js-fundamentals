function isThisWorking(input) {
  console.log("Printing: isThisWorking was called and " + input + " was passed in as an argument.");
  return "Returning: I am returning this string!.";
}

isThisWorking(3);

function addTen(x) {
  return x + 10;
}
function divideByThree(y) {
  return y / 3;
}
var result = addTen(2);
console.log(divideByThree(result));

function makeLine(length) {
  var line = "";
  for (var i = 1; i <= length; i++) {
    line += "* ";
  }
  return line + "\n";
}

function buildTriangle(length) {
  var triangle = "";
  var lineNumber = 1;

  for (lineNumber = 1; lineNumber <= length; lineNumber++) {
    triangle = triangle + makeLine(lineNumber);
  }
  return triangle;
}
console.log(buildTriangle(10));