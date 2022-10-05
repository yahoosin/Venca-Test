const Generic = require('./Generic.page');
class Auth extends Generic {
    constructor() {
    super('./login')
    }

    get $email () { return $('input[data-uitest="emailLogin"]'); }
    get $password () { return $('input[data-uitest="password"]'); }
    get $entrarButton () { return $('[id="userAlreadyDK"]'); }
    get $wrongCredentialsMessage () { return $('[class="field-validation-error FS12 error pdl10"]'); }

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