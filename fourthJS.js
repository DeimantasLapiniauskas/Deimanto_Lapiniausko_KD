"Use strict";
const friends = ["Rika", "Jacob", "Alex", "Oliver", "Marika"];
function filterItems(mainArr, search) {
    let newArr = [];
    for (let i = 0; i < mainArr.length; i++) {
        if (mainArr[i].includes(search)) {
            newArr = newArr + "*" + mainArr[i] + ", "
        };
    };
    return newArr.slice(0, -2);
};
console.log(filterItems(friends, 'e'));