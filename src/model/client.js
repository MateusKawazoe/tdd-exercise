module.exports = class Client {
    constructor(name, wage, installment, factor) {
        this.setName(name),
        this.setWage(wage),
        this.setInstallment(installment),
        this.setFactor(factor)
    }

    setName(name) {
        this.name = name
    }

    setWage(wage) {
        this.wage = wage
    }

    setInstallment(installment) {
        this.installment = installment
    }

    setFactor(factor) {
        this.factor = factor
    }

    getName() {
        return this.name
    }

    getWage() {
        return this.wage
    }

    getInstallment() {
        return this.installment
    }

    getFactor() {
        return this.factor
    }
}