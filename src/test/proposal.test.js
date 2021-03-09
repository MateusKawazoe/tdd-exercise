const { toBeDeepCloseTo, toMatchCloseTo } = require('jest-matcher-deep-close-to')

expect.extend({ toBeDeepCloseTo, toMatchCloseTo })

describe('Proposal', () => {
    it('Test this lib', () => {
        expect([42.00063]).toBeDeepCloseTo([42.0006], 4)
    })

    it('should return 42', () => {
        expect({ foo: 42.003,  bar: "xxx", baz: "yyy"})
            .toMatchCloseTo({ foo: 42.009, baz: "yyy" }, 2);
    })

    test('Wage under 1000.01', () => {

    })
})