class SubcribeWindow {

    get $closeButton () { return $$('[class="close"]')[1]; }

    async close () {
        await this.$closeButton.waitForExist();
        await this.$closeButton.click(); 
     }   
}
module.exports = SubcribeWindow;
