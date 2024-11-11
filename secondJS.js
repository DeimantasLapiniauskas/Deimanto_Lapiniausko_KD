"Use strict";
let positives = [1,2,3,-1,-2,-3];
if (Array.isArray(positives)) {
    positives = positives.filter(x => {
        return x > 0
    });
    console.log(positives);
}
else console.log("Not an array!");