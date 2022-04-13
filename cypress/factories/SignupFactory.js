var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function() {
        
        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()
        var phone = faker.random.number()
        var phone = '71996'+phone

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: phone,
            address: {
                postalcode: '42739115',
                street: 'Rua Fernando S Moreira',
                number: '1000',
                details: 'QD 12, Lote 01',
                district: 'Itinga',
                city_state: 'Lauro de Freitas/BA'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        return data
    }
}