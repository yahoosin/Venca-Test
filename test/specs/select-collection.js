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
		}
            
		var elem = ' ';
		await home.isResponse()
			? elem = await $('[action="/newsletter"] [type="submit"]')
			: elem = await $('[title="Mujer"]');  

		await elem.scrollIntoView();

		await subcribeWindow.close();
	});

	it('should let you to select the first item of the "Mujer / Camisas y blusas" collection', async () => {
		await home.goToCamisasBlusasCollection();
		await expect(browser).toHaveUrlContaining('venca.es/e/20/camisas-y-blusas');

		await collections.selectFirstItem();
        
		var itemNameBag = await selectedItem.itemName();
        
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

		var itemNameCart = await cart.itemName();

		const itemReferenceC = await cart.$referenceItemCart;
		itemReferenceC.waitForExist();
		var referenceItemCart = await itemReferenceC.getText();

		var colorItemCartFromPage = await cart.itemColor();        
		var colorItemCart = colorItemCartFromPage.toLowerCase();        

		var amountString = await cart.itemAmunt();
		var string = amountString.split(' ');
		var amountItemsCartString = string[1];
		var amountItemsCart = parseInt(amountItemsCartString);

		expect(itemNameBag).toEqual(itemNameCart);
		expect(itemColorBag).toEqual(colorItemCart);
		expect(itemReferenceBag).toEqual(referenceItemCart);
		expect(amountItemsBag + 1).toEqual(amountItemsCart);        
	});
});