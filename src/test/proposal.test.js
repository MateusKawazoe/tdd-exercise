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

        client = new Client('Lucas', 18, 800.15, 3, 2.0)
        deal = proposal(client, 1000.00)

        expect(deal.financed).toBe(1000.00)
        expect(deal.totalToPay).toBe(2000.00)
        expect(deal.installment).toBe(client.getInstallment())
        expect(deal.installmentAmount).toBe(666.67)
    })

    test('Wage between 1000.01 and 5000.00', () => {
        client = new Client('Lucas', 18, 1500, 2, 1.3)
        deal = proposal(client, 15000.00)

        expect(deal.financed).toBe(15000.00)
        expect(deal.totalToPay).toBe(19500.00)
        expect(deal.installment).toBe(client.getInstallment())
        expect(deal.installmentAmount).toBe(9750)

        client = new Client('Lucas', 18, 1500, 4, 1.5)
        deal = proposal(client, 15000.00)

        expect(deal.financed).toBe(15000.00)
        expect(deal.totalToPay).toBe(22500.00)
        expect(deal.installment).toBe(client.getInstallment())
        expect(deal.installmentAmount).toBe(5625)

        client = new Client('Lucas', 18, 1500, 10, 1.5)
        deal = proposal(client, 15000.00)

        expect(deal.financed).toBe(15000.00)
        expect(deal.totalToPay).toBe(22500.00)
        expect(deal.installment).toBe(client.getInstallment())
        expect(deal.installmentAmount).toBe(2250)
    })

    test('Wage over 5000.01', () => {
        client = new Client('Lucas', 18, 7500, 2, 1.1)
        deal = proposal(client, 15000.00)

        expect(deal.financed).toBe(15000.00)
        expect(deal.totalToPay).toBe(16500.00)
        expect(deal.installment).toBe(client.getInstallment())
        expect(deal.installmentAmount).toBe(8250)

        client = new Client('Lucas', 18, 7500, 4, 1.3)
        deal = proposal(client, 15000.00)

        expect(deal.financed).toBe(15000.00)
        expect(deal.totalToPay).toBe(19500.00)
        expect(deal.installment).toBe(client.getInstallment())
        expect(deal.installmentAmount).toBe(4875)

        client = new Client('Lucas', 18, 7500, 10, 1.3)
        deal = proposal(client, 15000.00)

        expect(deal.financed).toBe(15000.00)
        expect(deal.totalToPay).toBe(19500.00)
        expect(deal.installment).toBe(client.getInstallment())
        expect(deal.installmentAmount).toBe(1950)

        client = new Client('Lucas', 18, 7500, 20, 1.4)
        deal = proposal(client, 15000.00)

        expect(deal.financed).toBe(15000.00)
        expect(deal.totalToPay).toBe(21000.00)
        expect(deal.installment).toBe(client.getInstallment())
        expect(deal.installmentAmount).toBe(1050)
    })
})