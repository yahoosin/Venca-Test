const Auth = require('../pageObjects/Auth.page');
const auth = new Auth();
class SubcribeWindow {

	get $closeButton () { return $$('[class="close"]')[1]; }
	get $closeButtonRM () { return $('[class="pull-right close"]'); }

	async close () {
		if (await auth.isResponse()) {
			await this.$closeButtonRM.waitForExist();
			await this.$closeButtonRM.click();
		}
		else {
			await this.$closeButton.waitForExist();
			await this.$closeButton.click(); 
		}
	}   
}
module.exports = SubcribeWindow;
