"Use strict";
const n = 0;
let i = 0;
function askForMore(n) {
    while (i < 1) {
        let a = +prompt("Įveskite skaičių!");
        if (a >= 0) {
            n += a;
            i = 0;
        }
        else return n;
    };
};
console.log(askForMore(n));
