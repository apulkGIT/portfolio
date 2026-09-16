const ps = require("prompt-sync");
const prompt = ps();
let nimi = prompt("Anna nimi: ");
let salasana = prompt("Anna salasana: ")
let nimiTK = "Jorma";
let salasanaTK = "Nainen";

if (nimi==nimiTK && salasana==salasanaTK) {
  console.log("Olet käyttäjä "+nimi+" tervetuloa!");
} else if (nimi!=nimiTK) {
  console.log("tunnus väärin");
} else {
  console.log("salasana väärin");
}