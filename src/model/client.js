module.exports = class Client {
    constructor(name, age, wage, installment, factor) {
        this.setName(name),
        this.setAge(age),
        this.setWage(wage),
        this.setInstallment(installment),
        this.setFactor(factor)
    }

    setName(name) {
        this.name = name
    }

    setAge(age) {
        this.age = age
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

    getAge() {
        return this.age
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