"Use strict";
const n=20;
function addEvens(n){
    let sum=0;
    for (let i=0;i<n;i++){
        if (i%2==0){
            sum+=i;
        };
    };
    return sum;
};
console.log("Suma: " + addEvens(n));