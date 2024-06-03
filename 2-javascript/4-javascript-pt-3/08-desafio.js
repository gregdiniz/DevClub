/*
  Criar um programa que dê 10% de desconto para todos os produtos com valores maiores ou iguais a R$50,00
*/
const min = 30
const max = 150
prod1 = 30//Math.floor( Math.random() *(max-min+1))+min
prod2 = 50//Math.floor( Math.random() *(max-min+1))+min
prod3 = 254//Math.floor( Math.random() *(max-min+1))+min
prod4 = 15//Math.floor( Math.random() *(max-min+1))+min
prod5 = 39//Math.floor( Math.random() *(max-min+1))+min
finalPrice = 0
totalDiscount = 0
const cart = [prod1, prod2, prod3, prod4, prod5]

function calculateDiscount(price, discount){
    totalDiscount += (price*discount)/100
    return (price*discount)/100
}

cart.forEach(value =>{
    value >= 30 ? finalPrice += (value - calculateDiscount(value,10)) : finalPrice += value
})

console.log(`Valor sem desconto: R$ ${(finalPrice + totalDiscount).toFixed(2)}
Valor a ser pago: R$${finalPrice.toFixed(2)}
Desconto total: R$ ${totalDiscount.toFixed(2)}`)