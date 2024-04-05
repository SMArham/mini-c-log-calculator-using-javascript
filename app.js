var val1 = prompt("enter your no");
var val2 = prompt("enter your second no");

var sign = prompt("enter your sign");

console.log(val1 + sign + val2);
if (sign === "+") {
  alert(+val1 + +val2);
} else if (sign === "-") {
  alert(val1 - val2);
} else if (sign === "*") {
  alert(val1 * val2);
} else if (sign === "/") {
  alert(val1 / val2);
}
