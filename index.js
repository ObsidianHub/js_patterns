// Observer pattern
class EventObserver {
    constructor() {
        this.observers = [];
    }

    subscribe(fn) {
        this.observers.push(fn);
    }

    unsubsribe(fn) {
        this.observers = this.observers.filter((item) => {
            if (item !== fn) {
                return item;
            }
        });
    }

    fire(args) {
        this.observers.forEach((fn) => {
            fn.call(null, args);
        });
    }
}

const addNewTask = new EventObserver();

function alertMessage(msg) {
    alert(msg);
}

function consoleMessage(msg) {
    console.log(msg);
}

addNewTask.subscribe(alertMessage);
addNewTask.subscribe(consoleMessage);