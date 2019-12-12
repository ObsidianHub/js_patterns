// Singleton pattern
const counterModule = (function() {
    let instance,
        counter = 0;

    const getCounter = function() {
        return counter;
    }

    const increaseCounter = function() {
        counter++;
    }

    const createInstance = function() {
        return {
            getCounter,
            increaseCounter
        }
    }

    return {
        getInstance: function() {
            return instance || (instance = createInstance());
        }
    }
}());

const counter1 = counterModule.getInstance();

// Factory pattern
class SimpleMemberShip {
    constructor(name) {
        this.name = name;
        this.cost = '$5';
    }
}

class StandartMemberShip {
    constructor(name) {
        this.name = name;
        this.cost = '$15';
    }
}

class PremiumMemberShip {
    constructor(name) {
        this.name = name;
        this.cost = '$25';
    }
}

function MemberFactory() {
    this.createMember = function(name, type) {
        let member;

        if (type === 'simple') {
            member = new SimpleMemberShip(name);
        } else if (type === 'standart') {
            member = new StandartMemberShip(name);
        } else if (type === 'premium') {
            member = new PremiumMemberShip(name);
        }

        member.type = type;
        member.define = function() {
            return `${this.name} (${this.type}): ${this.cost}`;
        }

        return member;
    }
}

const members = [];
const factory = new MemberFactory();

members.push(factory.createMember('Denis', 'standart'));
members.push(factory.createMember('Katya', 'premium'));

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
