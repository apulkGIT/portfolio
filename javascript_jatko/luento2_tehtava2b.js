const ps = require("prompt-sync");
const prompt = ps();
let s = prompt("Anna merkkijono: ");
let sum = 0;
for (let i=0;i<s.length;i++) {
  if (s[i]=='a') {
    sum++;
  }
}
console.log("a kirjainten määrä "+sum);