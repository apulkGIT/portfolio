let lause = "Tämä on varsin pitkä merkkij0n0n, ja siinä on eri asioita.";

if (/^[A-ZÄÖa-zäö]+$/.test(lause)) {
    console.log("Vain kirjaimia.");
} else {
    console.log("Muita merkkejä.");
}
console.log(lause.replace(/[0-9]/g,"o"));

