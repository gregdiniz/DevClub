//Cotação R$ para U$ e € do dia 16/12/2022
const usDolar = 5.29
const euro = 5.61
//Cotação 1 Bitcoin para Real do dia 06/01/2023
const bitcoin = 88413.58

const button = document.getElementById('convertButton')
const convertTo = document.getElementById('slcCurrency')

const switchFlag = () => {
    if(convertTo.value === 'dolar'){
        document.getElementById('flagConvertTo').src = './assets/USD.png'
        document.getElementById('currency-name').textContent = 'Dólar Americano'
    } else if(convertTo.value === 'euro'){
        document.getElementById('flagConvertTo').src = './assets/EUR.png'
        document.getElementById('currency-name').textContent = 'Euro'
    } else {
        document.getElementById('flagConvertTo').src = './assets/BIT.png'
        document.getElementById('currency-name').textContent = 'Bitcoin'
    }
}

const convertCurrency = () =>{
    switchFlag()
    let inputAmount = document.getElementById('txtAmount').value
    const currencySelected = document.getElementById('slcCurrency').value
    const displayAmountFrom = document.getElementById('lblFrom')
    const displayAmountTo = document.getElementById('lblTo')
    displayAmountFrom.textContent = new Intl.NumberFormat('pt-BR',
    { style: 'currency', currency:'BRL'}).format(inputAmount)
    //função de formatação monetária usando if Ternário. Será incluído mais uma condição, por esse motivo não será possível manter esse IF
    /*currencySelected === 'dolar' ? displayAmountTo.textContent = new Intl.NumberFormat('en-US',{ style: 'currency', currency:'USD'}).format(inputAmount / usDolar) :
        displayAmountTo.textContent = new Intl.NumberFormat('de-DE', { style: 'currency', currency:'EUR'}).format(inputAmount / euro)*/
    if (currencySelected === 'dolar'){
        displayAmountTo.textContent = new Intl.NumberFormat('en-US',{ style: 'currency', currency:'USD'}).format(inputAmount / usDolar)
    } else if(currencySelected === 'euro'){
        displayAmountTo.textContent = new Intl.NumberFormat('de-DE', { style: 'currency', currency:'EUR'}).format(inputAmount / euro)
    } else {
        displayAmountTo.textContent = (inputAmount/bitcoin).toFixed(6)
    }
}

convertTo.addEventListener('change', switchFlag)
button.addEventListener('click', convertCurrency)