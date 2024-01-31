// cotação do dólar em real 30/01/2024
const usd = 4.96
//cotação do euro real 30/01/2024
const eur = 5.37

const convertFrom = document.querySelector("#convert-from")
const inputCurrencyValue = document.querySelector("#input-currency-value")
const convertButton = document.querySelector("button")
const chosenCurrencySelect = document.querySelector("#target-currency")
const chosenCurrencyFlag = document.querySelector("#chosen-currency-flag")
const chosenCurrencyName = document.querySelector("#chosen-currency-name")
const chosenCurrencyValue = document.querySelector("#chosen-currency-value")

function switchCurrency(){
    if(chosenCurrencySelect.value === 'dolar'){
        chosenCurrencyFlag.src = './assests/USD.png'
        chosenCurrencyName.textContent = "Dólar Americano"
    } else {
        chosenCurrencyFlag.src = './assests/EUR.png'
        chosenCurrencyName.textContent = "Euro"
    }
    convertCurrency()
}

function convertCurrency(){
    switchCurrency()
    //Função nativa do JS para formatação de moedas.
    convertFrom.textContent = new Intl.NumberFormat("pt-BR",{
        style:"currency",
        currency:"BRL"
    }).format(inputCurrencyValue.value)
    chosenCurrencySelect.value === 'dolar' ? chosenCurrencyValue.textContent = new Intl.NumberFormat("en-US", {style:"currency",currency:"USD"}).format(inputCurrencyValue.value/usd) : chosenCurrencyValue.textContent = new Intl.NumberFormat("de-DE", {style:"currency",currency:"EUR"}).format(inputCurrencyValue.value/eur) 
}

convertButton.addEventListener("click", convertCurrency)
chosenCurrencySelect.addEventListener('change',switchCurrency)