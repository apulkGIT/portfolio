function lemmikki(laji,ika,paino) {
    this.laji = laji;
    this.ika = ika;
    this.paino = paino;
    this.syo = function (maara) { this.paino += maara/2; };
    this.info = function () { console.log("Laji: "+this.laji+" ika "+this.ika+ " paino "+this.paino); }
}

let lem1 = new lemmikki("Kissa", 5, 10);
let lem2 = new lemmikki("Hamsteri", 2, 4);
let lem3 = new lemmikki("Kultakala", 1, 0.5);
lem1.info();
lem2.info();
lem3.info();