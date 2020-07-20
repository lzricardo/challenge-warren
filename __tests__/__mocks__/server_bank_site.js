const http = require('http');

class BankSiteMock {
    constructor() {
        this.server = null;
    }

    async initialize() {
        return new Promise(async resolve => {
            this.server = http.createServer((req, res) => {
                res.write('<p id="name">Luiz Ricardo</p><p id="balance">R$ 40.000,00</p>');
                return res.end();
            });

            await this.server.listen(5555);

            return resolve();
        });
    }

    destroy() {
        this.server.close();
    }
}

module.exports = BankSiteMock;