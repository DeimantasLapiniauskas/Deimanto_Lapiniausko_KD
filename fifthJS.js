"Use strict";

document.getElementById("clickme").onclick = function () {
    let P = document.getElementById("P").value;
    let R = document.getElementById("R").value;
    let T = document.getElementById("T").value;
    let SI = (P * R * T) / 100;
    console.log(`If you deposit ${P}., \nat an interest rate of ${R}%.\nYou will receive an amount of ${SI}, \nin the year ${new Date().getFullYear() + +T}`);
}