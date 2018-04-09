String.prototype.filter = function (arr){
    str = this;
    arr.forEach(wrd => str = str.replace(wrd, "***"));
    return str;
}
console.log("This house is nice!".filter(['house','nice']));

