const Engine = require('./contracts/engine'),
    puppeteer = require('puppeteer')
;

class Puppeteer extends Engine {
    constructor(url, options) {
        super();
        this.url = url;
        this.options = options;
    }

    async initialize() {
        this.browser = await puppeteer.launch(this.options);
        this.page = await this.browser.newPage();

        //pegar #account e digitar a agência
        //clicar no botão acessar seguinte ao elemento account
        //buscar "Clique nas iniciais do seu nome para inserir a senha: " pegar o h1 seguinte e dentro dele gerar um clique no link <a>
        //buscar o #panelTeclado
        //buscar o #bgTeclado
        //pegar a div seguinte
        //pegar a primeira div
        //buscar o campo do tipo password
        //Digitar a senha
        //pegar a segunda div
        //buscar o input value confirmar ou title Confirmar e clicar nele
        //solicitar a autenticação de duas etapas

        await this.page.goto(this.url);
    }

    async scrape(puppeteerPlan) {
        /* istanbul ignore next */
        const produced = await this.page.evaluate(puppeteerPlan.handler);

        await this.browser.close();

        return produced;
    }
}

module.exports = Puppeteer;