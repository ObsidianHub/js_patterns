class Server {
    constructor(name, ip) {
        this.name = name;
        this.ip = ip;
    }

    getUrl() {
        return `https://${this.ip}:80`
    }
}

const serv = new Server('GoogleCloud DennyPearce', '82.33.66.88');
console.log(serv.getUrl());