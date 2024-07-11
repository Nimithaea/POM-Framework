

class LoginPage{

    visit(){
        cy.visit('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F')
     }
     getEmail(email){

        cy.get('#Email').clear().type(email)
     }
     getPwd(pwd){
        cy.get('#Password').clear().type(pwd)
     }
     submit(){
        cy.get('.button-1.login-button').click()
     }

}

export default LoginPage