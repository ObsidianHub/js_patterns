class User {
    constructor(name) {
        this.name = name
        this.room = null
    }

    send(message, to) {
        this.room.send(message, this, to)
    }

    receive(message, from) {
        console.log(`${from.name} => ${this.name}: ${message}`)
    }
}

class ChatRoom {
    constructor() {
        this.users = {}
    }

    register(user) {
        this.users[user.name] = user
        user.room = this
    }

    send(message, from, to) {
        if (to) {
            to.receive(message, from)
        } else {
            Object.keys(this.users).forEach((key) => {
                if (this.users[key] !== from) {
                    this.users[key].receive(message, from)
                }
            })
        }
    }
}

const denny = new User('Denny')
const katya = new User('Katya')
const nazar = new User('Nazar')

const room = new ChatRoom()

room.register(denny)
room.register(katya)
room.register(nazar)

denny.send('Hello', nazar)
katya.send('Hi', denny)
nazar.send('Go out guys')