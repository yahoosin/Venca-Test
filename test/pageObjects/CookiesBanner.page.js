class Cookies {

    get $acceptButton () { return $('[id="onetrust-accept-btn-handler"]'); }

    async accept () {
        await this.$acceptButton.waitForExist();
        await this.$acceptButton.click();  
         
    }   
}
module.exports = Cookies;