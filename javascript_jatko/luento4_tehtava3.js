function hedelma(hinta,nimi,kpl) {
    this.hinta = hinta;
    this.nimi = nimi;
    this.kpl = kpl;
}

let hedelmakori = [new hedelma(1,"omena",2),new hedelma(2,"kiivi",4),new hedelma(3,"appelsiini",10),new hedelma(3.3,"mango",8),new hedelma(2,"banaani",5)]

let hinta = 0;
for (let i=0;i<hedelmakori.length;i++) {
    hinta += hedelmakori[i].hinta;
}
console.log("Hedelmäkori maksaa: "+hinta);

// sama reducella:
hedelmakori[0].hinta += 2;
let hinta2 = hedelmakori.reduce((h,curr) => h+curr.hinta,0);
console.log("Hedelmäkori maksaa: "+hinta2);