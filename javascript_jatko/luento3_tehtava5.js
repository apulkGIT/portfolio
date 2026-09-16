//tehtävä 5:
const prompt = require("prompt-sync")();

function sekalasku(a,b) {
  if (a>0 && b>0) {
    return a-b;
  } else if (a<0 && b<0) {
    return a*b;
  }
  if (b==0) {
    console.log("En voi tehdä jakolaskua (toinen muuttuja 0)");
    return 0;
  }
  return a/b;
}

let a = prompt("Anna luku 1: ");
let b = prompt("Anna luku 2: ");
let tulos = sekalasku(a,b);
console.log("Tulos on "+tulos);