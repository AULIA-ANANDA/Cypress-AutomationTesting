///<reference types="cypress"/>

describe('Testing Login Fitur', () => {
  it('User Login with valid credentials', () => {
    //untuk kunjungi halaman login
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('h5').contains('Login').should('have.text','Login');
    cy.get('[name="username"]').type('Admin');
    cy.get('[name="password"]').type('admin123');
    cy.get('h6').contains('Dashboard').should('have.text','Dashboard');

  });

  
})