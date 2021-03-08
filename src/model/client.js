import Schema from 'validate'

const client = new Schema({
    name: {
        type: String,
        required: true,
        length: { min: 3, max: 32 }
    },
    wage: {
        type: Number,
        required: true
    },
    installment: {
        type: Number,
        required: true
    },
    factor: {
        type: Number,
        required: true
    }
})

module.exports = client