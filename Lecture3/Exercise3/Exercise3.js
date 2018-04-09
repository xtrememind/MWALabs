let Clock = require('./clock');

let object = new Clock();
object.on('tick', function () {
    console.log("woohoo");
});