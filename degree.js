function degree(x, y){
    if (y === 0){
        return 1
    }
    var result = 1;
    for (var i =1; i <=y; i++ ) {
        result *=x;
    }
    return result;
    }
var result = degree(3,0)
console.log(result);