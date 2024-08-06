describe('file upload test', ()=> {

    beforeEach(()=>{
        cy.visit('https://the-internet.herokuapp.com/upload');
    })

    it.only('file upload test', async() =>{

        cy.get('#file-upload').should('be.visible');
        cy.get('#file-upload').attachFile('test.pdf');
        cy.get('#file-submit').click();
        cy.wait(3000)
        cy.get('div[class="example"] h3').should('contain.text', 'File Uploaded!')
    });

    it('file drag & drop test', async() =>{
        cy.get('#drag-drop-upload').attachFile('test.pdf', {subjectType: 'drag-n-drop'});
        cy.get('#file-submit').click();
        cy.wait(3000)
        cy.get('div[class="example"] h3').should('contain.text', 'File Uploaded!')
    })


});