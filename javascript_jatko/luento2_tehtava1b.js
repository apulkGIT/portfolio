let kuukausi = prompt("Anna kuukausi").toLowerCase();

function tulostaVuodenaika(kuukausi) {
  if ((kuukausi=="tammikuu") || (kuukausi=="january") || (kuukausi=="helmikuu") || (kuukausi=="february") || (kuukausi=="joulukuu") ||  (kuukausi=="december")) {
    console.log("Talvi (winter)");
  } else if ((kuukausi=="maaliskuu") || (kuukausi=="march") || (kuukausi=="huhtikuu") || (kuukausi=="april") || (kuukausi=="toukokuu") || (kuukausi=="may")) {
    console.log("Kevät (spring)");
  } else if ((kuukausi=="kesäkuu") || (kuukausi=="june") || (kuukausi=="heinäkuu") || (kuukausi=="july") || (kuukausi=="elokuu") || (kuukausi=="august")) {
    console.log("Kesä (summer)");
  } else if ((kuukausi=="syyskuu") || (kuukausi=="september") || (kuukausi=="lokakuu") || (kuukausi=="october") || (kuukausi=="marraskuu") || (kuukausi=="november")) {
      console.log("Syksy (fall)");
  } else {
      console.log("Ei oikea kuukausi (not real month)");
  }
}

tulostaVuodenaika(kuukausi);

let kuukaudet = ["tammikuu","january","helmikuu","february","joulukuu","december","maaliskuu","march","huhtikuu","april","toukokuu","may","kesäkuu","june","heinäkuu","july","elokuu","august","syyskuu","september", "lokakuu", "october", "marraskuu", "november"];
 
for (let i=0;i<kuukaudet.length;i++) {
  console.log("Kuukausi "+kuukaudet[i]+" on")
  tulostaVuodenaika(kuukaudet[i]);
}