const olio1 = { nimi: "jaakko", ika: 30}
const olio2 = { tehtava: "pomo" }
const olio3 = {...olio1, ...olio2}
console.log(olio3);