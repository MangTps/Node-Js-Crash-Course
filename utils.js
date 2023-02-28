function calculateVat(money,vat) {
    return money * vat / 100;
}

function sayHello() {
    console.log('Hello');
}

module.exports = {
    calculateVat,
    sayHello
};