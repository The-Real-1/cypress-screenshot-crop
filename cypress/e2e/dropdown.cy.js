
describe('Screenshot call', () => {
  it('Image croped',  () => {
      // Could use this adress for a complete example 
      // cy.visit('https://www.primefaces.org/primeng-v15-lts/dropdown');
      
      // Code base address
      //cy.visit('https://f7fpx4.sse.codesandbox.io/');
      
      // Local address available in Github repo : https://github.com/The-Real-1/cypress-screenshot-host/tree/main 
      // To clone with git : https://github.com/The-Real-1/cypress-screenshot-host.git
      cy.visit('http://localhost:4200');

      cy.get('dropdown-basic-demo p-dropdown span.p-element.p-dropdown-label').then(($el) => {
        expect($el[0].innerText).to.equal("New York");
      });
      cy.get('dropdown-basic-demo p-dropdown').screenshot();
  });
});
