function* myGenerator() {
    yield* insideGenerator1();
    yield* insideGenerator2();
    yield* insideGenerator3();
}

function* insideGenerator1() {
    var x;
    for (let i = 1; i < 6; i++) {
        yield (x = i);
    }
}

function* insideGenerator2() {
    var x;
    for (let i = 10; i < 16; i++) {
        yield (x = i);
    }
}

function* insideGenerator3() {
    var x;
    for (let i = 6; i < 10; i++) {
        yield (x = i);
    }
}

var iterator = myGenerator();

var fifteenArray = [];

function stringReturn(arr) {
    for (i = 1; i < 17; i++) {
        var val = ` ${arr.next().value}#`;
        if (val === " 1#") val = "1#";
        if (val === " undefined#") {
            val = " undefined!";
        }
        fifteenArray.push(val);
        var string = fifteenArray.toString();
    }
    return string;
}

stringReturn(iterator);
module.exports = { fifteenArray, myGenerator };
