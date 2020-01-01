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

class MemberFactory {
    static list = {
        simple: SimpleMemberShip,
        standart: StandartMemberShip,
        premium: PremiumMemberShip
    }

    createMember(name, type = 'simple') {
        const Membership = MemberFactory.list[type] || MemberFactory.list.simple;
        const member = new Membership(name);

        member.type = type;
        member.define = function() {
           console.log(`${this.name} (${this.type}): ${this.cost}`);
        }

        return member;
    }
}

const members = [];
const factory = new MemberFactory();

members.push(factory.createMember('Denis', 'standart'));
members.push(factory.createMember('Katya', 'premium'));

members.forEach((m) => {
    m.define()
})
