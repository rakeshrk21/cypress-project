export class LoginPage {
    usernameTextField = 'input[type="email"]';
    passwordTextField = 'input[type="password"]';
    submitButton = 'button[type="submit"]';
    private readonly errorMessage = '.error-messages';

    login(username: string, password: string) : void {
        cy.get(this.usernameTextField).type(username);
        cy.get(this.passwordTextField).type(password);
        cy.get(this.submitButton).click()
    }

    setUsername(username: string) {
        cy.get(this.usernameTextField).type(username)
    }

    setPassword(password: string) {
        cy.get(this.passwordTextField).type(password)
    }

    clickSubmit(){
        cy.get(this.submitButton).click();
    }

    validateLoginError() : void {
        cy.get(this.errorMessage).invoke('text').then((text)=> {
            expect(text).is.contains('email or password is invalid');
        })
    }

    validateLoginError1() : void {
        cy.get(this.errorMessage).invoke('text').should('include','email or password is invalid');
    }
}