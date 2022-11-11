const Home = require('../pageObjects/Home.page');
const home = new Home();
const Auth = require('../pageObjects/Auth.page');
const auth = new Auth();
class SelectedItem {
    
    get $itemName () { return $('[id="mainTextFeatures"] h1'); }
    get $responseItemName () { return $('[class="chooseFeatures"] h1'); }
    
    get $color () { return $('[data-uitest="productColor"]'); } // [id="colorName"]
    get $reference () { return $('[id="reference"]'); }
    get $addButton () { return $('[class="add"]'); } // [class="dblock add"]
    get $dropdownSizeButton () { return $('[data-uitest="productSizeSelector"]'); } // [data-uitest="productSize"]
    get $selectSizeL () { return $('[data-id-for-select][data-id-for-select="L"]'); } // [data-id-for-select="L"]
    get $amountItemsBag () { return $('[data-uitest="numberOfElements"]'); }
    get $goToCart () { return $('[id="addProd"] a'); } // [id="cart"]

    async itemName () {
        var name = '';
        await auth.isResponse()
        ? name = await this.$responseItemName
        : name = await this.$itemName; 

    console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', name);    
    return name;
    } 

    async addToBag () {
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
module.exports = SelectedItem;