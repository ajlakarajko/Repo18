let rockStar = new Map([
    ["artist", "The Rolling Stones"],
    ["song", "Angie"],
    ["album", "Goats Head Soup"],
    ["singer", "Mick Jagger"],
]);

var newRock = new Map();

for (let col of rockStar.entries()) {
    if (col[0].charCodeAt(0) > 97) {
        newRock.set(col[0], col[1]);
    }
}

console.log(newRock);
module.exports = { rockStar, newRock };
