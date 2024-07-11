class CategoriesPage{

    getCategories(){
        //cy.get('nav-item.has-treeview.menu-is-opening.menu-open >  a > p').click()

        cy.get('.nav-pills > :nth-child(2) > :nth-child(1)').click()
        cy.get('.nav-item').find('p').contains('Categories').click()
     }

     getSearchCategory(categoryName){
        cy.get('#SearchCategoryName').type(categoryName)
        //cy.get('#SearchPublishedId').find('[value="2"]').click()
       cy.get('#search-categories').click()
        cy.get('#categories-grid_info').should('have.text','1-1 of 1 items')
       cy.log('Search result is displaying correctly')
        
     }

     getSearchInvalidCategory(invalidcategoryName){
        cy.get('#SearchCategoryName').clear().type(invalidcategoryName)
        //cy.get('#SearchPublishedId').find('[value="2"]').click()
        cy.get('#search-categories').click()
        cy.get('.dataTables_empty').should('have.text','No data available in table')
        cy.log('No data available in table is shown when searched for Invalid category')
        
     }
}

export default CategoriesPage