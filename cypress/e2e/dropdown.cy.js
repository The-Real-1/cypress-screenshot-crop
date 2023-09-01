
describe('Screenshot call', () => {
  it('Image croped',  () => {
      // cy.visit('https://www.primefaces.org/primeng-v15-lts/dropdown');
      cy.visit('https://f7fpx4.sse.codesandbox.io/');
      cy.get('dropdown-basic-demo p-dropdown span.p-element.p-dropdown-label').then(($el) => {
        expect($el[0].innerText).to.equal("New York");
      });
      cy.get('dropdown-basic-demo p-dropdown').screenshot();
  });

  
  
});