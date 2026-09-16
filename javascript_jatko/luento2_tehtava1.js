const ps = require("prompt-sync");
const prompt = ps();

function kerro(a,b) {
  return a*b;
}

function tulostakerro(a,b) {
  console.log("Tulos on yhteensä "+kerro(a,b))
}

for (let i=0;i<5;i++) {
  let a = prompt("anna luku yksi: ");
  let b = prompt("anna luku kaksi: ");
  tulostakerro(a,b);
}

let s = "   |";
for (let b=1;b<=10;b++) {
  s += `${String(b).padStart(3,' ')} |`;  
}
console.log(s);

for (let a=1;a<=10;a++) {
  s = `${String(a).padStart(2,' ')} |`;
  for (let b=1;b<=10;b++) {
      s += `${String(kerro(a,b)).padStart(3,' ')} |`;  
  }
  console.log(s);
}
