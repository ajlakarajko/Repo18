let shoppingList = new Map([
    ["Banana", 3],
    ["Pineapple", 5],
    ["Pear", 2],
    ["Carrot", 10],
    ["Apple", 1.5],
]);

let arrKey = [];

for (let key of shoppingList.entries()) {
    arrKey.push(`groceries: ${key[0]}`);
}

arrKey.forEach(function (item) {
    console.log(item);
});

let arrValue = [];

for (let value of shoppingList.entries()) {
    arrValue.push(`amount: ${value[1]}`);
}

arrValue.forEach(function (item) {
    console.log(item);
});

for (col of shoppingList.entries()) {
    console.log(`'${col[0]}', ${col[1]}`);
}

module.exports = { shoppingList, arrKey, arrValue };
