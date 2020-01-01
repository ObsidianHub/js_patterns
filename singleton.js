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

// *********************************************** //
class Database {
    constructor(data) {
        if (Database.exists) {
            return Database.instance
        }
        Database.instance = this;
        Database.exists = true;
        this.data = data;
    }

    getData() {
        return this.data;
    }
}

const mongo = new Database('MongoDB');
console.log(mongo.getData());

const mysql = new Database('MySQL');
console.log(mysql.getData());