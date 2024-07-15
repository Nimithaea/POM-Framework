///<reference types="cypress" />

import LoginPage from "../pages/loginPage"
import CategoriesPage from "../pages/catagol/catogoriesPage"


describe('POM-Page Object Model', function() {
    const login = new LoginPage()
    const categories =new CategoriesPage()

    it('Login to the Application', function() {

      login.visit()
      login.getEmail('admin@yourstore.com')
      login.getPwd('admin')
      login.submit()
    })

    
})