describe('Primera Practica', () => {

    it('Ejercicio numero #1', () => {
      cy.visit('/')
      cy.title().then((titulo) => {
        if (titulo.includes('Space & Beyond space| Testim.io demo')) {
          cy.log('✅ El título es correcto')
        } else {
          cy.log('⚠️ El título no coincide: ' + titulo)
        }
      })
    })

    it('Ejercicio numero #2', () => {
        cy.visit('/')
        //cy.get('h5').contains('Madan')
        cy.contains('h5', 'Madan').scrollIntoView().should('be.visible')
        
    })

    it('Ejercicio numero #3', () => {
        
        cy.visit('/')
        cy.get('input[role="input"]').eq(1).click()
        cy.get('#years').click()
        cy.get('#2023').click()
        
        //Manera de dar n veces click a un botón
        for (let i = 0; i < 2; i++) {   cy.get('#left').click() }

        cy.contains('span', '28').should('be.visible').click()
        cy.get('.theme__navigation___3eiS- > :nth-child(2)').click()
        cy.log('⚠️ No es posible seleccionar fechas anteriores a la actual.')
    })

    it('Ejercicio numero #4', () => {
        
        cy.visit('/')
        cy.get('input[role="input"]').eq(2).click()
        cy.get('.theme__active___31xyK > .theme__values___1jS4g > :nth-child(3)').click()
        cy.log('Se seleccionan 2 adultos')

        cy.get('input[role="input"]').eq(3).click()
        cy.get('.theme__active___31xyK > .theme__values___1jS4g > :nth-child(2)').click()
        cy.log('Se seleccionan 1 niño')
    })

    it('Ejercicio numero #5', () => {
        
        cy.visit('/')
        cy.get('.Gallery__filters-box___1z3SX > :nth-child(2) > .theme__input___qUQeP > .theme__inputElement___27dyY').click()
        cy.contains('li', 'Blue').should('be.visible').click()

    })

    it('Ejercicio numero #6', () => {
        
        cy.visit('/')
        cy.get('.Gallery__filters-box___1z3SX > :nth-child(2) > .theme__input___qUQeP > .theme__inputElement___27dyY').click()
        cy.contains('li', 'Blue').should('be.visible').click()
        cy.get('button[type="button"]').eq(2).click()
        cy.contains('button', 'Booked').should('be.visible')
        cy.log('Se verifica que el planeta esta en estado Booked')
    })

    it('Ejercicio numero #7', () => {
        
        cy.visit('/')
        cy.get('.Gallery__filters-box___1z3SX > :nth-child(2) > .theme__input___qUQeP > .theme__inputElement___27dyY').click()
        cy.contains('li', 'Blue').should('be.visible').click()
        cy.get('button[type="button"]').eq(2).click()
        cy.contains('button', 'Booked').should('be.visible')
        cy.log('Se verifica que el planeta esta en estado Booked')
        cy.get('form').find('input[role="input"]').eq(0).type('Kevin')
        cy.get('form').find('input[role="input"]').eq(1).type('kevinromero@gmail.com')
        cy.get('form').find('input[role="input"]').eq(2).type('111-11-1111')
        cy.get('form').find('input[role="input"]').eq(3).type('2124567890')
    })

    it('Ejercicio numero #8', () => {

        // Ignorar error específico
        Cypress.on('uncaught:exception', (err, runnable) => {
            if (err.message.includes('Unknown country code: 419')) {
                return false; // Ignora el error
            }
        });
    
        cy.visit('/')
        cy.get('.Gallery__filters-box___1z3SX > :nth-child(2) > .theme__input___qUQeP > .theme__inputElement___27dyY').click()
        cy.contains('li', 'Blue').should('be.visible').click()
        cy.get('button[type="button"]').eq(2).click()
        cy.contains('button', 'Booked').should('be.visible')
        cy.log('Se verifica que el planeta esta en estado Booked')
        cy.get('form').find('input[role="input"]').eq(0).type('Kevin')
        cy.get('form').find('input[role="input"]').eq(1).type('kevinromero@gmail.com')
        cy.get('form').find('input[role="input"]').eq(2).type('111-11-1111')
        cy.get('form').find('input[role="input"]').eq(3).type('2124567890')
    
        // Subir imagen
        cy.get('input[type="file"]').attachFile('carnet.png')
        cy.log('Imagen cargada correctamente');
    })
    
    it('Ejercicio numero #9', () => {

    // Ignorar error específico
    Cypress.on('uncaught:exception', (err, runnable) => {
        if (err.message.includes('Unknown country code: 419')) {
            return false; // Ignora el error
        }
    });

    cy.visit('/')
    cy.get('.Gallery__filters-box___1z3SX > :nth-child(2) > .theme__input___qUQeP > .theme__inputElement___27dyY').click()
    cy.contains('li', 'Blue').should('be.visible').click()
    cy.get('button[type="button"]').eq(2).click()
    cy.contains('button', 'Booked').should('be.visible')
    cy.log('Se verifica que el planeta esta en estado Booked')
    cy.get('form').find('input[role="input"]').eq(0).type('Kevin')
    cy.get('form').find('input[role="input"]').eq(1).type('kevinromero@gmail.com')
    cy.get('form').find('input[role="input"]').eq(2).type('111-11-1111')
    cy.get('form').find('input[role="input"]').eq(3).type('2124567890')

    // Subir imagen
    cy.get('input[type="file"]').attachFile('carnet.png')
    cy.log('Imagen cargada correctamente');

    //Colocar codigo promocional
    cy.get('input[name="promo"]').type('30076')
    cy.log('Codigo ingresado correctamente');
    
    })

    it('Ejercicio numero #10', () => {

    // Ignorar error específico
    Cypress.on('uncaught:exception', (err, runnable) => {
        if (err.message.includes('Unknown country code: 419')) {
            return false; // Ignora el error
        }
    });

    cy.visit('/')
    cy.get('.Gallery__filters-box___1z3SX > :nth-child(2) > .theme__input___qUQeP > .theme__inputElement___27dyY').click()
    cy.contains('li', 'Blue').should('be.visible').click()
    cy.get('button[type="button"]').eq(2).click()
    cy.contains('button', 'Booked').should('be.visible')
    cy.log('Se verifica que el planeta esta en estado Booked')
    cy.get('form').find('input[role="input"]').eq(0).type('Kevin')
    cy.get('form').find('input[role="input"]').eq(1).type('kevinromero@gmail.com')
    cy.get('form').find('input[role="input"]').eq(2).type('111-11-1111')
    cy.get('form').find('input[role="input"]').eq(3).type('2124567890')

    // Subir imagen
    cy.get('input[type="file"]').attachFile('carnet.png')
    cy.log('Imagen cargada correctamente');

    //Colocar codigo promocional
    cy.get('input[name="promo"]').type('30076')
    cy.log('Codigo ingresado correctamente');
    cy.get('.flexboxgrid__col-xs-5___1HkK5 > .theme__button___1iKuo').click()
    cy.get('.theme__check___2B20W').click()

    //Presionar boton de "Pagar"
    cy.get(':nth-child(8) > .flexboxgrid__col-xs___1ROHR').click()
    cy.log('⚠️ El botón Pagar no se encuentra activo')


    })
  })