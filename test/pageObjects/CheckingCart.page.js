const Generic = require('./Generic.page');
class Cart extends Generic {
    constructor() {
    super('/cart')
    } 

    get $itemTextCart () { return $$('[class="block bold cutText"]')[1]; }
    get $referenceItemCart () { return $('[data-uitest="productReference"]'); }
    get $colorItemCart () { return $('[class="thin"] [data-vc-colorname]'); }
    get $amountItemsCart () { return $$('[data-ob-directive="Cart.DetailDirective"] [class="thin"]')[2]; }
      
}
module.exports = Cart;