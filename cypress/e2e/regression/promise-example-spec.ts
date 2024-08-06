import { AutomationTestStore } from "cypress/pages/automation-store-page";

describe('promise type tests', ()=>{

    let automationteststore : AutomationTestStore;
    
    before(()=>{
        automationteststore = new AutomationTestStore()
    })

    beforeEach(()=> { 
        cy.visit('https://automationteststore.com/');
    });
    
    it('verify text using promise', async() =>{

        cy.contains('Home').should('be.visible');
        automationteststore.verifyWelcomeLabel();
        automationteststore.verifyWelecomeText();
        // cy.get('ul.info_links_footer>li:nth-child(5)').should('be.visible').invoke('text').contains('Contact Us');
        // cy.get('ul.info_links_footer>li:nth-child(5)').click();
        cy.get("a[href$='contact']").click().then((linkText) => {
            cy.log('Link text is: ' +linkText);
        })
    });

    it('Get href links dynamically and click', async()=>{
        //<a href="https://automationteststore.com/index.php?rt=product/category&   path=43">&nbsp;&nbsp;Skincare</a>
        cy.get("a[href*='product/category&path=']").contains('Makeup').click();
        cy.get("a[href*='product/category&path=']").contains('Skincare').click();
    })

    it('verify text using promise using jquery text() method', async()=> {
        cy.get("a[href*='product/category&path=']").contains('Makeup').click();
        cy.get('h1>.maintext').then(($el)=>{
            const text = $el.text(); // text() is jquery method.
            cy.log('element text is: ' +text)
            expect(text).is.eq('Makeup');
        })
    });

    it('verify form submit', async()=> {
        cy.get("a[href$='contact']").click();
        cy.get('#ContactUsFrm').find('#field_11')
        .should('contain.text', 'First name:')
        cy.get('#ContactUsFrm_first_name').should('be.visible').type("james bond");
        cy.get('#ContactUsFrm_email').should('be.visible').type("test@gmail.com");
        cy.get('#ContactUsFrm_enquiry').should('be.visible').type("enquiry");
        cy.get('button[title="Submit"]').should('be.visible').click();
    });


    it('Get all the product names and then console.log', async()=> {
        //<a class="prdocutname" href="https://automationteststore.com/index.php?rt=product/product&path=52&product_id=69" title="Seaweed Conditioner">Seaweed Conditioner</a>
        //a[href*="product/product&path=52&product_id="]
        cy.get("a[href*='product/category&path=']").contains('Hair Care').click();
        cy.get('.fixed_wrapper .fixed').each(($el, index, $list) => {
         let linkText = [];
         linkText.push($el.text())
         cy.log('Element link text is: ' +$el.text() + "has index: " +index).then(() => {
            cy.log('All text: ' +linkText.join(', '));
         });        
        });
     });

    it('Get all the product names and then click one', async()=> {
       //<a class="prdocutname" href="https://automationteststore.com/index.php?rt=product/product&path=52&product_id=69" title="Seaweed Conditioner">Seaweed Conditioner</a>
       //a[href*="product/product&path=52&product_id="]
       cy.get("a[href*='product/category&path=']").contains('Hair Care').click();
       cy.get('.fixed_wrapper .fixed').each(($el, index, $list) => {
        let linkText = [];
        linkText.push($el.text())
        cy.log('Element link text is: ' +$el.text() + "has index: " +index);
        if($el.text().includes('Eau Parfumee au The Vert Shampoo')){
            cy.wrap($el).should('be.visible').contains('Eau Parfumee au The Vert Shampoo').click();
        }
       });
    });

    it('Get get a single product and then click it - use alias with invoke', async()=> {
        cy.get("a[href*='product/category&path=']").contains('Hair Care').click();
        
        // 
        cy.get('.fixed_wrapper .fixed').eq(0).invoke('text').as('product');
        cy.get('@product').should('include', 'Seaweed Conditioner');
        
        cy.get('.fixed_wrapper .fixed').last().as('lastElement');
        cy.get('@lastElement').contains('Eau Parfumee au The Vert Shampoo').click();

        // cy.get('.fixed_wrapper .fixed').first().as('firstElement');
        // cy.get('@firstElement').contains('Seaweed Conditioner').click();

        // cy.get('.fixed_wrapper .fixed').eq(1).as('secondElement');
        // cy.get('@secondElement').contains('Pantene Pro-V Conditioner, Classic Care').click();

     });

     // validate the attribute and property of the element
     it('find all product on homepage and validate its length', async() => {
        cy.get('.thumbnail').its('length').should('eq', 16); // its grabs the property of the object
        cy.get('.thumbnail').should('have.length', 16);
        cy.get('.thumbnail').find('.productcart').invoke('attr', 'title').should('include','Add to Cart' );
        cy.get('.thumbnail').find('.productcart').should('have.attr', 'title', 'Add to Cart');
     });

     it('total price of all products not on sale', async() => {
        let totalPrice: number = 0;
        
        cy.get('.thumbnail').find('.oneprice').each(($el) => {
            
            cy.wrap($el).invoke('text').then((price) => {
                cy.log('price is ' +parseFloat(price.split('$')[1]));
                let itemPrice : number= parseFloat(price.split('$')[1]);
                totalPrice = totalPrice + itemPrice;
            });

        }).then(()=>{
                cy.log(`Total price for non sale item is : ${totalPrice}`)});
     });

     it.only('total price of all products that are on sale', async() => {

        let totalPrice = 0;
        cy.get('.thumbnail').find('.pricenew').each(($el) => {
            cy.wrap($el).invoke('text').then(($price) => {
                cy.log('The price of itme on sale is ' +$price.split('$')[1]);
                totalPrice = totalPrice + parseFloat($price.split('$')[1]);
            });
           
        }).then(() => {
            cy.log('The total price of items on sale is ' +totalPrice);
        })

     });
});