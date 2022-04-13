
import signupFactory from '../factories/SignupFactory'
import signupPage from '../pages/SignupPage'

describe('Cadastro', ()=> {

    // var signup = new SignupPage()

    // before(function() {
    //     cy.log('Tudo aqui é executado uma única vez ANTES de TODOS os casos de testes')
    // })

    
    // beforeEach(function() {
    //     cy.log('Tudo aqui é executado sempre ANTES de CADA os caso de teste')
    // })

    // after(function() {
    //     cy.log('Tudo aqui é executado uma única vez DEPOIS de TODOS os casos de testes')
    // })

    
    // afterEach(function() {
    //     cy.log('Tudo aqui é executado sempre DEPOIS de CADA os caso de teste')
    // })

    //  beforeEach(function() {
    //      cy.fixture('deliver').then((massa)=> {
    //          this.deliver = massa
    //      })
    //  })

    it('Usuário deve se tornar um Entregador(deliver)', function() {
        const expectedMessage = "Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato."
 
        var deliver = signupFactory.deliver()
        
        signupPage.go()
        signupPage.fillForm(deliver)
        //signup.fillForm(this.deliver.signup)
        signupPage.submit()
        signupPage.modalContentShouldBe(expectedMessage)

    })

    it('CPF Incorreto', function() {     
        var deliver = signupFactory.deliver()
        deliver.cpf = '000aa00141bc'
        
        signupPage.go()
        signupPage.fillForm(deliver)
        //signup.fillForm(this.deliver.cpf_invalido)
        signupPage.submit()
        signupPage.alertMessageShouldBe('Oops! CPF inválido')
    })

    it('Email Inválido', function() {     
        var deliver = signupFactory.deliver()
        deliver.email = 'user.com.br'

        signupPage.go()
        signupPage.fillForm(deliver)
        //signup.fillForm(this.deliver.email_invalido)
        signupPage.submit()
        signupPage.alertMessageShouldBe('Oops! Email com formato inválido.')
    })

    context('Campos Obrigatórios', function() {
    
        const messages = [
            { field: 'name', output: 'É necessário informar o nome' },
            { field: 'cpf', output: 'É necessário informar o CPF' },
            { field: 'email', output: 'É necessário informar o email' },
            { field: 'postalcode', output: 'É necessário informar o CEP' },
            { field: 'number', output: 'É necessário informar o número do endereço' },
            { field: 'delivery_method', output: 'Selecione o método de entrega' },
            { field: 'cnh', output: 'Adicione uma foto da sua CNH' }
        ]

        before(function() {
            signupPage.go()
            signupPage.submit()
        })

        messages.forEach(function(msg){
            it(`${msg.field} é obrigatório`, function(){
                signupPage.alertMessageShouldBe(msg.output)
            })
        })
    })

        // it('Campos Obrigatórios', function() {     

    //     signupPage.go()
    //     signupPage.submit()
    //     signupPage.alertMessageShouldBe('É necessário informar o nome')
    //     signupPage.alertMessageShouldBe('É necessário informar o CPF')
    //     signupPage.alertMessageShouldBe('É necessário informar o email')
    //     signupPage.alertMessageShouldBe('É necessário informar o CEP')
    //     signupPage.alertMessageShouldBe('É necessário informar o número do endereço')
    //     signupPage.alertMessageShouldBe('Selecione o método de entrega')
    //     signupPage.alertMessageShouldBe('Adicione uma foto da sua CNH')

    // })
})


    

