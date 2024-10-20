///<reference types="cypress"/>

describe('Testing Login Fitur', () => {
    it('TC_LOG_001 Login dengan Valid Username dan Password', () => {
      //untuk kunjungi halaman login
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      //validasi halaman login
      cy.get('h5').contains('Login').should('have.text','Login');
      //input username dan password valid
      cy.get('[name="username"]').type('Admin');
      cy.get('[name="password"]').type('admin123');
      //validasi button submit
      cy.get('[type="submit"]').click();
      //validasi halaman dashboard
      cy.get('h6').contains('Dashboard').should('have.text','Dashboard');
  
    });
    it('TC_LOG_002 Login dengan Valid Username dan Password', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      cy.get('h5').contains('Login').should('have.text','Login');
      cy.get('[name="username"]').type('Admin');
      cy.get('[name="password"]').type('Admin123');
      cy.get('[type="submit"]').click();
      cy.get('[class="oxd-alert-content oxd-alert-content--error"]').should('have.text','Invalid credentials');
  
    });
    it('TC_LOG_003 Login dengan Valid Username dan Invalid Password', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('h5').contains('Login').should('have.text','Login');
        cy.get('[name="username"]').type('Admin');
        cy.get('[name="password"]').type('admin123444');
        cy.get('[type="submit"]').click();
        cy.get('[class="oxd-alert-content oxd-alert-content--error"]').should('have.text','Invalid credentials');
    });
    it('TC_LOG_004 Login dengan Username menggunakan simbol dan Valid Password', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      cy.get('h5').contains('Login').should('have.text','Login');
      cy.get('[name="username"]').type('Admin@*_');
      cy.get('[name="password"]').type('admin123');
      cy.get('[type="submit"]').click();
      cy.get('[class="oxd-alert-content oxd-alert-content--error"]').should('have.text','Invalid credentials');
    });
    it('TC_LOG_005 Login dengan Valid Username dan Password menggunakan simbol', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      cy.get('h5').contains('Login').should('have.text','Login');
      cy.get('[name="username"]').type('Admin');
      cy.get('[name="password"]').type('admin123@@@');
      cy.get('[type="submit"]').click();
      cy.get('[class="oxd-alert-content oxd-alert-content--error"]').should('have.text','Invalid credentials');
    });
    it('TC_LOG_006 Login dengan Valid Username dan Empty Password', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      cy.get('h5').contains('Login').should('have.text','Login');
      cy.get('[name="username"]').type('Admin');
      cy.get('[name="password"]').should('be.empty');
      cy.get('[type="submit"]').click();
      cy.get('[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').should('contain','Required');
    });
    it('TC_LOG_007 Login dengan Empty Username dan Valid Password', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      cy.get('h5').contains('Login').should('have.text','Login');
      cy.get('[name="username"]').should('be.empty');
      cy.get('[name="password"]').type('admin123');
      cy.get('[type="submit"]').click();
      cy.get('[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').should('contain','Required');
    });
    it('TC_LOG_008 Login dengan Empty Username dan Password', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      cy.get('h5').contains('Login').should('have.text','Login');
      cy.get('[name="username"]').should('be.empty');
      cy.get('[name="password"]').should('be.empty');
      cy.get('[type="submit"]').click();
      cy.get('[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').should('contain','Required');
    });
      it('TC_LOG_009 Login dengan Copy Username dan Password dari Notepad', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('h5').contains('Login').should('have.text','Login');
        cy.get('[name="username"]').type('Admin');
        cy.get('[name="password"]').type('admin123');
        cy.get('[type="submit"]').click();
        cy.get('h6').contains('Dashboard').should('have.text','Dashboard');
      });
      it('TC_LOG_010 Login Menggunakan Tombol Enter Setelah Input Valid Username dan Password ', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('h5').contains('Login').should('have.text','Login');
        cy.get('[name="username"]').type('Admin');
        cy.get('[name="password"]').type('admin123{enter}');
        cy.url().should('include','/dashboard')
      });
      it('TC_LOG_011 Login Menggunakan Tombol Enter Setelah Input Valid Username', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('h5').contains('Login').should('have.text','Login');
        cy.get('[name="username"]').type('Admin{enter}');
        cy.get('[name="password"]').should('be.empty');
        cy.get('[type="submit"]').click();
        cy.get('[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').should('contain','Required');
      });
    it('TC_LOG_0012 Validasi Link Reset Password', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      cy.get('h5').contains('Login').should('have.text','Login');
      cy.contains('Forgot your password?').should('be.visible');
      cy.contains('Forgot your password?').click();
      cy.url().should('include','https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode');
      cy.get('h6').contains('Reset Password').should('have.text','Reset Password');
    });

    it('TC_LOG_0013 Pengukuran Waktu Respons Login', () => {
      const startTime = performance.now();
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      cy.get('[name="username"]').type('Admin');
      cy.get('[name="password"]').type('admin123');
      cy.get('[type="submit"]').click();
      cy.url().should('include','/dashboard').then(() => {
        const endTime = performance.now();
        const duration = endTime - startTime;

        cy.log('Login time: ${duration.toFixed(2)} milliseconds');
      });

    });

})