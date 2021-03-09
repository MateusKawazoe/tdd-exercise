const ClientValidate = require('../validate/clientValidate')
const Client = require('../model/client')

describe('Client', () => {
    let client, errors

    test('Test client model', () => {
        client = new Client('Lucas', 70, 975.00, 3, 2.0)
        errors = ClientValidate.validate(client)

        expect(errors[0]).toBe(undefined)
        expect(errors[1]).toBe(undefined)
        expect(errors[2]).toBe(undefined)
        expect(errors[3]).toBe(undefined)
        expect(errors[4]).toBe(undefined)
    })

    test('Test client model error', () => {
        client = new Client('Lu', 16, '0', '123')
        errors = ClientValidate.validate(client)

        expect(errors[0].message).toBe('Name is required and must have a length between 3 and 32')
        expect(errors[1].message).toBe('Age is required and must be between 18 and 70')
        expect(errors[2].message).toBe('Wabe is required and must be a number')
        expect(errors[3].message).toBe('Installment is required and must be a number')
        expect(errors[4].message).toBe('Factor is required and must be a number')
    })
})