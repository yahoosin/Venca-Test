const Generic = require('./Generic.page');
const Home = require('../pageObjects/Home.page');
const home = new Home();
class Cart extends Generic {
    constructor() {
    super('/cart')
    } 

    get $itemTextCart () { return $$('[class="block bold cutText"]')[1]; }
    get $itemTextCartResponse () { return $('[class="cartFeatures"] p'); }

    get $referenceItemCart () { return $('[data-uitest="productReference"]'); }

    get $colorItemCart () { return $('[class="thin"] [data-vc-colorname]'); }
    get $colorItemCartResponse () { return $$('[class="cartFeatures"] [class="bold"]')[0]; }

    get $amountItemsCart () { return $$('[data-ob-directive="Cart.DetailDirective"] [class="thin"]')[2]; }
    get $amountItemsCartResponse () { return $$('[class="cartFeatures"] [class="bold"]')[2]; }

    async itemName () {
        var name = '';
        await home.isResponse()
        ? name = await this.$itemTextCartResponse.getText()
        : name = await this.$itemTextCart.getText();    
    return name;
    }

    async itemColor () {
        var fullText = '';
        var strings = '';
        var color = '';
        await home.isResponse()
        ? (fullText = await this.$colorItemCartResponse.getText(), strings = fullText.split(":"), color = strings[1].trim())
        : color = await this.$colorItemCart.getText();    
    return color;
    } 
     
    async itemAmunt () {
        var amunt = '';
        await home.isResponse()
        ? amunt = await this.$amountItemsCartResponse.getText()
        : amunt = await this.$amountItemsCart.getText();    
    return amunt;
    } 
}
module.exports = Cart;