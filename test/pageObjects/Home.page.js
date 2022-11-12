const Generic = require('./Generic.page');
const Auth = require('../pageObjects/Auth.page');
const auth = new Auth();
class Home extends Generic {
    constructor() {
        super('')
    }

    get $mujer() { return $('[data-vc-node-id="5"]'); }
    get $camisasBlusas() { return $('[title="Camisas y blusas"]'); }
    get $collectionBox() { return $('[data-vc-node-id="5"] [data-vc-node-html="5"]'); }
    get $responseMenu() { return $('[data-uitest="navigateShowMenu"]'); }
    get $responseMujer() { return $('[data-uitest="navigationPanelOption"] [alt="Mujer"]'); }
    get $responseCamisasBlusas() { return $('[title="Camisas y blusas"]'); }
    
    async goToCamisasBlusasCollection() {
        if (await this.isResponse()){
            await this.$responseMenu.click();
            await this.$responseMujer.click();
            await this.$responseCamisasBlusas.click();
        }
        else {
        await this.$mujer.moveTo();
        await this.$collectionBox.waitForExist();
        await this.$camisasBlusas.click();
        }
    }
}
module.exports = Home;