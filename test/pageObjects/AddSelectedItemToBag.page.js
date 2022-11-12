const Home = require('../pageObjects/Home.page');
const home = new Home();
const Auth = require('../pageObjects/Auth.page');
const auth = new Auth();
class SelectedItem {
    
    get $itemName () { return $('[id="mainTextFeatures"] h1'); }
    get $responseItemName () { return $('[class="chooseFeatures"] h1'); }

    get $dropdownSizeButton () { return $('[data-uitest="productSizeSelector"]'); } 
    get $dropdownSizeButtonResponse () { return $('[data-uitest="productSize"]'); } 

    get $selectSizeL () { return $('[data-id-for-select][data-id-for-select="L"]'); } 
    get $selectSizeLResponse () { return $('[data-id-for-select="L"]'); } 

    get $addButton () { return $('[data-uitest="productAddToCart"]'); } 
    get $addButtonResponse () { return $('[data-uitest="productAddToCart"]'); }    

    get $goToCart () { return $('[id="cartZone"]'); }
    get $goToCartResponse () { return $('[id="cartZone"]'); }
    
    get $color () { return $('[data-uitest="productColor"]'); }
    get $reference () { return $('[id="reference"]'); }
    get $amountItemsBag () { return $('[data-uitest="numberOfElements"]'); }

    async itemName () {
        var name = '';
        await home.isResponse()
        ? name = await this.$responseItemName.getText()
        : name = await this.$itemName.getText();    
    return name;
    } 

    async addToBag () { 
        if (await home.isResponse()){
            await this.$responseItemName.scrollIntoView();

            await this.$dropdownSizeButtonResponse.waitForExist();
            await this.$dropdownSizeButtonResponse.click();

            await this.$selectSizeLResponse.waitForExist();
            await this.$selectSizeLResponse.click();

            await this.$addButtonResponse.waitForExist();
            await this.$addButtonResponse.click();  

            await this.$goToCartResponse.waitForExist();
            await this.$goToCartResponse.click();            
        }
        else {
            await this.$dropdownSizeButton.waitForExist();
            await this.$dropdownSizeButton.click();

            await this.$selectSizeL.waitForExist();
            await this.$selectSizeL.click();

            await this.$addButton.waitForExist();
            await this.$addButton.click();  

            await this.$goToCart.waitForExist();
            await this.$goToCart.click();
        } 
         
    }   
}
module.exports = SelectedItem;