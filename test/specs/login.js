const Auth = require('../pageObjects/Auth.page');
const Cookies = require('../pageObjects/CookiesBanner.page');
const cookies = new Cookies();
const auth = new Auth();
const { user1 } = require('../fixtures/users');

describe('Login Page', async ()=> {
    beforeEach(async ()=> {
        await auth.load();

        await cookies.accept();
    });

    it('should error with a wrong credentials', async ()=> {
        await auth.login(user1);
        await expect(auth.$wrongCredentialsMessage).toHaveText(`El e-mail o la contraseña son incorrectos`);
     });      


});