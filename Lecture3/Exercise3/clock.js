let EventEmitter = require('events');

class Clock extends EventEmitter {
    constructor() {
        super();
        let me = this;
        setInterval(function () {
            me.emit('tick');
        }, 1000);
    }
}

module.exports = Clock;