const Generic = require('./Generic.page');
class Home extends Generic {
    constructor() {
        super('')
    }

    get $mujer() { return $('[data-vc-node-id="5"]'); }
    get $camisasBlusas() { return $('[title="Camisas y blusas"]'); }
    get $collectionBox() { return $('[data-vc-node-id="5"] [data-vc-node-html="5"]'); }

    
    async goToCamisasBlusasCollection() {
        await this.$mujer.moveTo();
        await this.$collectionBox.waitForExist();
        await this.$camisasBlusas.click();

    }
}
module.exports = Home;