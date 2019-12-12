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

