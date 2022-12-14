const Generic = require('./Generic.page');
class Auth extends Generic {
    constructor() {
    super('./login')
    }

    get $email () { return $('input[data-uitest="emailLogin"]'); }
    get $password () { return $('input[data-uitest="password"]'); }
    get $entrarButton () { return $$('[action="/login"] [type="submit"]')[0]; }
    get $wrongCredentialsMessage () { return $('[data-uitest="userOrPassWrong"]'); }

    async login ({email, password}) {
        await this.$email.setValue(email);
        await this.$password.setValue(password);
        await this.$entrarButton.click();      
        
        await browser.waitUntil(
            async () => {
            //const signInExists = await this.$signIn.isExisting();
            const errorExists = await this.$wrongCredentialsMessage.isExisting();
            return errorExists;
            //return !signInExists || errorExists;
            })
            // {
            // timoutMsg:
            // 'The "Sign in" button still exists and an error never appeared'
            // });
        }
    }   

module.exports = Auth;