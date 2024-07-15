///<reference types="cypress" />

import LoginPage from "../pages/loginPage"
import CategoriesPage from "../pages/catagol/catogoriesPage"


describe('POM-Page Object Model', function() {
    const login = new LoginPage()
    const categories =new CategoriesPage()

    beforeEach( function() {

      login.visit()
      login.getEmail('admin@yourstore.com')
      login.getPwd('admin')
      login.submit()
    })

    it('Open Categories Page and serach for Valid and Invalid Category',  function() {
      categories.getCategories()
      categories.getSearchCategory('Computer')
      categories.getSearchInvalidCategory('Test')

    })    
    
})