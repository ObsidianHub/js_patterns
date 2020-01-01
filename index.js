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

// Mediator pattern
class User {
    constructor(name) {
        this.name = name;
        this.chatroom = null;
    }

    send(message, to) {
        this.chatroom.send(message, this, to);
    }

    receive(message, from) {
        console.log(`From ${from.name} to ${this.name}: ${message}`);
    }
}

class ChatRoom {
    constructor() {
        this.users = {};
    }

    register(user) {
        user.chatroom = this;
        this.users[user.name] = user;
    }

    send(message, from, to) {
        if (to) {
            to.receive(message, from);
        } else {
            for (let user in this.users) {
                if (this.users[user] !== from) {
                    this.users[user].receive(message, from);
                }
            }
        }
    }
}

const den = new User('Denis');
const kate = new User('Katya');
const nazar = new User('Nazar');

const chatRoom = new ChatRoom();

chatroom.register(den);
chatRoom.register(kate);
chatRoom.register(nazar);