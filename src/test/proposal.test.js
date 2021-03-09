const { toBeDeepCloseTo, toMatchCloseTo } = require('jest-matcher-deep-close-to')
const proposal = require('../controller/proposal')
const Client = require('../model/client')

expect.extend({ toBeDeepCloseTo, toMatchCloseTo })

describe('Proposal', () => {
    let client, deal

    it('Test toBeDeepCloseTo', () => {
        expect([42.00063]).toBeDeepCloseTo([42.0006], 4)
    })

    it('Test toMatchCloseTo', () => {
        expect({ foo: 42.003, bar: "xxx", baz: "yyy" })
            .toMatchCloseTo({ foo: 42.009, baz: "yyy" }, 2);
    })

    test('Wage under 1000.01', () => {
        client = new Client('Lucas', 18, 975.15, 2, 2.0)
        deal = proposal(client, 1000.00)

        expect(deal.financed).toBe(1000.00)
        expect(deal.totalToPay).toBe(2000.00)
        expect(deal.installment).toBe(client.getInstallment())
        expect(deal.installmentAmount).toBe(1000.00)
    })
})