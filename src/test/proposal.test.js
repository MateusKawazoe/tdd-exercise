const { toBeDeepCloseTo, toMatchCloseTo } = require('jest-matcher-deep-close-to')
const Proposal = require('../controller/proposal')
const Client = require('../model/client')

expect.extend({ toBeDeepCloseTo, toMatchCloseTo })

describe('Proposal', () => {
    let client

    it('Test toBeDeepCloseTo', () => {
        expect([42.00063]).toBeDeepCloseTo([42.0006], 4)
    })

    it('Test toMatchCloseTo', () => {
        expect({ foo: 42.003,  bar: "xxx", baz: "yyy"})
            .toMatchCloseTo({ foo: 42.009, baz: "yyy" }, 2);
    })

    test('Wage under 1000.01', () => {
        client = new Client('Lucas',18 , 975.15, 2, 2.0)
        
    })
})