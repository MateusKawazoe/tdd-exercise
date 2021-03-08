const Client = require('../model/client')

describe('Client', () => {
    test('Test client model', () => {
        const test = new Client()

        var client = {
            name: 'Lucas',
            wage: 975.00,
            installment: 3,
            factor: 2.0
        }

        var errors = test.client.validate(client)

        expect(errors[0]).toBe(undefined)
        expect(errors[1]).toBe(undefined)
        expect(errors[2]).toBe(undefined)
        expect(errors[3]).toBe(undefined)

        client = {
            name: 'Lu',
            wage: '975.00',
            installment: '3'
        }

        errors = test.client.validate(client)

        expect(errors[0].message).toBe('Name is required and must have a length between 3 and 32')
        expect(errors[1].message).toBe('Wabe is required and must be a number')
        expect(errors[2].message).toBe('Installment is required and must be a number')
        expect(errors[3].message).toBe('Factor is required and must be a number')
    })
})