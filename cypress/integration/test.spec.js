/*globals Cypress cy*/
import { feedbackPage } from '../../constants/feedbackConst';

describe('CI test', () => {
    //refactor with a beforeEach for cy.visit command
    beforeEach(() => cy.visit(Cypress.env('HOST')));

    it('should run a test', () => { 
        cy.get(feedbackPage.submitBtn).should('be.visible');
    });

    /*** TO DO ***/
    //Write tests for different behaviour scenarios 
    //For example can you enter text into the comments section
    // - What kind of text is allowed?

    it('should select happy button', () => {
        cy.get(feedbackPage.happyBtn).should('not.be.checked');
        cy.get(feedbackPage.happyBtn).click();
        cy.get(feedbackPage.happyBtn).should('be.checked');
    });

    it('should fail the test', () => {
        cy.get(feedbackPage.happyBtn).should('be.checked');
        cy.get(feedbackPage.happyBtn).click();
        cy.get(feedbackPage.happyBtn).should('not.be.checked');
    });
});
