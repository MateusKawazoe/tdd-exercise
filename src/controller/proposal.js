module.exports = function proposal(client, value) {
    return {
        financed: value,
        totalToPay: client.getFactor()*value,
        installment: client.getInstallment(),
        installmentAmount: parseFloat(((client.getFactor()*value)/client.getInstallment()).toFixed(2))
    }
}