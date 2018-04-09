Array.prototype.bubbleSort = function (){
    for (let i = 0; i < this.length - 1; i++) {
        let isSwapped = false;
        for (let j = i; j < this.length; j++) {
            if (this[i] > this[j]) {
                [this[i], this[j]] = [this[j], this[i]];
                isSwapped = true;
            }
        }
        if (!isSwapped) break;
    }
    return this;
}

console.log([6,4,0,3,-2,1].bubbleSort());