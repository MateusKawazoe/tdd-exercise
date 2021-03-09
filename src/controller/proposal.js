module.exports = function proposal(client, value) {
    return {
        financed: value,
        totalToPay: client.getFactor()*value,
        installment: client.getInstallment(),
        installmentAmount: (client.getFactor()*value)/client.getInstallment()
    }
}