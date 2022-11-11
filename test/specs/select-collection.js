const Home = require('../pageObjects/Home.page');
const Collections = require('../pageObjects/Items.page');
const Cookies = require('../pageObjects/CookiesBanner.page');
const SubcribeWindow = require('../pageObjects/SubscriptionBanner.page');
const SelectedItem = require('../pageObjects/AddSelectedItemToBag.page');
const Cart = require('../pageObjects/CheckingCart.page');


const home = new Home();
const collections = new Collections();
const cookies = new Cookies();
const subcribeWindow = new SubcribeWindow();
const selectedItem = new SelectedItem();
const cart = new Cart();

describe('Product Selection', async () => {
    beforeEach(async () => {

        await home.load();

        await cookies.accept();

        if (await home.isResponse()){
            const popApp = await $('[data-uitest="closeAppPopUp"]');
            await popApp.click();
        };
            
        const elem = await $('[action="/newsletter"] [type="submit"]');  //$('[title="Mujer"]');

        await elem.scrollIntoView();

        await subcribeWindow.close();
    });

    it('should let you to select the first item of the "Mujer / Camisas y blusas" collection', async () => {
        await home.goToCamisasBlusasCollection();
        await expect(browser).toHaveUrlContaining('venca.es/e/20/camisas-y-blusas');

        await collections.selectFirstItem();
        
        var itemNameBag = await selectedItem.itemName();
        console.log('...................................', itemNameBag.getText());
        
        const itemColorB = await selectedItem.$color;
        itemColorB.waitForExist();
        var itemColorBagFromPage = await itemColorB.getText();
        var itemColorBag = itemColorBagFromPage.toLowerCase();

        const itemReferenceB = await selectedItem.$reference;
        itemReferenceB.waitForExist();
        var itemReferenceBag = await itemReferenceB.getText();

        var amountItemsB = await selectedItem.$amountItemsBag;
        amountItemsB.waitForExist();
        var amountItemsBagString = await amountItemsB.getText();
        var amountItemsBag = parseInt(amountItemsBagString);
        
        await selectedItem.addToBag();

        const itemNameC = await cart.$itemTextCart;
        itemNameC.waitForExist();
        var itemNameCart = await itemNameC.getText();

        const itemReferenceC = await cart.$referenceItemCart;
        itemReferenceC.waitForExist();
        var referenceItemCart = await itemReferenceC.getText();

        const itemColorC = await cart.$colorItemCart;
        itemColorC.waitForExist();
        var colorItemCartFromPage = await itemColorC.getText();        
        var colorItemCart = colorItemCartFromPage.toLowerCase();        

        const amountItemsC = await cart.$amountItemsCart;
        amountItemsC.waitForExist();       
        var amountString = await amountItemsC.getText();
        const string = amountString.split(" ");
        var amountItemsCartString = string[1];
        var amountItemsCart = parseInt(amountItemsCartString);
       
        expect(itemNameBag).toBe(itemNameCart);
        expect(itemColorBag).toBe(colorItemCart);
        expect(itemReferenceBag).toBe(referenceItemCart);
        expect(amountItemsBag + 1).toBe(amountItemsCart);
        
    });
})