const Schema = require('validate')

module.exports = class Client {
    constructor() {
        this.client = new Schema({
            name: {
                type: String,
                required: true,
                message: 'Name is required and must have a length between 3 and 32',
                length: { min: 3, max: 32 }
            },
            wage: {
                type: Number,
                required: true,
                message: 'Wabe is required and must be a number'
            },
            installment: {
                type: Number,
                required: true,
                message: 'Installment is required and must be a number'
            },
            factor: {
                type: Number,
                required: true,
                message: 'Factor is required and must be a number'
            }
        })
    }
}