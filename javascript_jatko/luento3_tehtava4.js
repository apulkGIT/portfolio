//tehtävä 4:

const prompt = require("prompt-sync")();

function tulostus(luku) {
  if (luku>=0) {
    for (let i=0;i<luku;i++) {
      console.log("I will not do anything bad again.")
    }
    console.log("Bart Simpson");
  } else {
    console.log("You did not give a number >=0")
  }
}

tulostus(prompt("Anna luku: "));