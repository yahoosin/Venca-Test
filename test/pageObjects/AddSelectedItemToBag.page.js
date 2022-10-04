class SelectedItem {
    
    get $itemName () { return $('[id="mainTextFeatures"] h1'); }
    get $color () { return $('[data-uitest="productColor"]'); }
    get $reference () { return $('[id="reference"]'); }
    get $addButton () { return $('[class="add"]'); }
    get $dropdownSizeButton () { return $('[data-uitest="productSizeSelector"]'); }
    get $selectSizeL () { return $('[data-id-for-select][data-id-for-select="L"]'); }
    get $amountItemsBag () { return $('[data-uitest="numberOfElements"]'); }
    get $goToCart () { return $('[id="addProd"] a'); }

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