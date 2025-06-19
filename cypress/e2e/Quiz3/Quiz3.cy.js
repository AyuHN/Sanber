
describe('TC 1 (Positive) -> Check login page', () => {
  it('should load login page', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.wait(1000);
    cy.get(".oxd-sheet.oxd-sheet--rounded.oxd-sheet--gutters.oxd-sheet--gray-lighten-2.orangehrm-demo-credentials");
    cy.wait(1000);
    cy.xpath("//input[@placeholder='Username']");
    cy.get("input[placeholder='Password']");
    cy.get("button[type='submit']");
    cy.get(".oxd-text.oxd-text--p.orangehrm-login-forgot-header");
  });
});

describe('TC 2 (Negative) -> Click login without input', () => {
  it('try login with empty credentials', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.wait(1000);
    cy.get("input[placeholder='Username']");
    cy.get("input[placeholder='Password']");
    cy.get("button[type='submit']").click();
    cy.xpath("//div[@class='orangehrm-login-slot-wrapper']//div[1]//div[1]//span[1]");
  });
});

describe('TC 3 (Positive) -> Login with valid credentials', () => {
  it('login with correct username and password', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get(1000);
    cy.get("input[placeholder='Username']").type('Admin');
    cy.get(1000);
    cy.get("input[placeholder='Password']").type('admin123');
    cy.get("button[type='submit']").click();
    cy.url();
    cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module");
  });
});

describe('TC 4 (Negative) -> Login with invalid credentials', () => {
  it('login with wrong password', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get(1000);
    cy.xpath("//input[@placeholder='Username']").type('Admin');
    cy.get(1000);
    cy.get("input[placeholder='Password']").type('Admin123');
    cy.get("button[type='submit']").click();
    cy.get("div[role='alert']");
  });
});

describe('TC 5 (Positive) -> Click forgot password link', () => {
  it('click forgot password', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get(1000);
    cy.xpath("//input[@placeholder='Username']").type('Admin');
    cy.get(1000);
    cy.get("input[placeholder='Password']").type('Admin123');
    cy.get("button[type='submit']").click();
    cy.get("div[role='alert']");
    cy.get(".oxd-text.oxd-text--p.orangehrm-login-forgot-header").click();
    cy.get(".oxd-text.oxd-text--h6.orangehrm-forgot-password-title");
    cy.url();
  });
});

describe('TC 6 (Positive) -> Check forgot password page', () => {
  it('view elements on forgot password page', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get(1000);
    cy.xpath("//input[@placeholder='Username']").type('Admin');
    cy.get(1000);
    cy.get("input[placeholder='Password']").type('Admin123');
    cy.get("button[type='submit']").click();
    cy.get("div[role='alert']");
    cy.get(".oxd-text.oxd-text--p.orangehrm-login-forgot-header").click();
    cy.get(".oxd-text.oxd-text--h6.orangehrm-forgot-password-title");
    cy.url();
    cy.get("input[placeholder='Username']");
    cy.xpath("//button[normalize-space()='Cancel']");
    cy.xpath("//button[normalize-space()='Reset Password']");
  });
});
