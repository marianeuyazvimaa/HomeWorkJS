// Рішення 1 (найпростіше, без функції)

/*for (var i = 0; i < 5; i++) {
    console.log('*'.repeat(i));
}
console.log();*/


// Рішення 1 з використанням функції
/*function Param (height, width) {
    for (var i = 1; i <= height; i++) {
        var row = '';
        for (var j = 1; j <= i; j++) {
            row += width;
        }
        console.log(row);
    }
}

Param (6, '*'); */

// Рішення 2 з використанням функції
/*function Param(height, width) {
    var i = 1;

    while (i <= height) {
        var j = 1;
        var row = '';

        while (j <= i) {
            row += width;
            j++;
        }

        console.log(row);
        i++;
    }
}

Param(7, '*'); */