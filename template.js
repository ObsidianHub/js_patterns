class Employee {
    constructor(name, salary) {
        this.name = name
        this.salary = salary
    }

    responsibilities() {}

    work() {
        return `${this.name} doing ${this.responsibilities()}`
    }

    getPaid() {
        return `${this.name} have salary: ${this.salary}`
    }
}

class Developer extends Employee {
    constructor(name, salary) {
        super(name, salary)
    }

    responsibilities() {
        return 'Create programm process'
    }
}

class Tester extends Employee {
    constructor(name, salary) {
        super(name, salary)
    }

    responsibilities() {
        return 'Testing programm process'
    }
}

const dev = new Developer('Denny', 10000)
console.log(dev.getPaid())
console.log(dev.work())

const tester = new Tester('Roman', 9000)
console.log(tester.getPaid())
console.log(tester.work())
