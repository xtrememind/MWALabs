const os = require('os');
const Rx = require('@reactivex/rxjs');

const sysCheck = function () {
    console.log("Checking your system...");
    if (os.freemem() < 2147483648) {
        console.log("This app needs at least 2 GB of RAM.");

    } else if (os.cpus().length < 2) {
        console.log("Processor is not supported.");

    } else {
        console.log("System is checked successfully.");

    }

}();

// Observables
Rx.Observable.create(observer => {
    observer.next("Checking your system...");
    if (os.freemem() < 2147483648) {
        observer.next("This app needs at least 2 GB of RAM.");

    } else if (os.cpus().length < 2) {
        observer.next("Processor is not supported.");
    } else {
        observer.next("System is checked successfully.");
    }
}).subscribe(message => console.log(message));