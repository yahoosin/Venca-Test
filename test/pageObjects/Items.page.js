const Generic = require('./Generic.page');
class Collections extends Generic {
    constructor() {
    super('./e/20/camisas-y-blusas')
    } 

    get $displayedItems () { return $$('[data-uitest="storefrontProductsList"]')[0]; }

    async selectFirstItem () {
        var url = await browser.getUrl();
        await this.$displayedItems.waitForClickable();
        await this.$displayedItems.click();
        expect(await browser.getUrl()).not.toHaveText(url);  
        
    }
}
module.exports = Collections;