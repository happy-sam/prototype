Number.prototype.plus = function (e) {
    var num = this.valueOf() + e;
    return Number(num);
}

Number.prototype.minus = function (e) {
    var num = this.valueOf() - e;
    return Number(num);
}

var result = (5).plus(3).minus(6);
console.log(result);