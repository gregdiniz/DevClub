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

const convertCurrency = async () =>{
    switchFlag()
    const currencyAPI = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL').then(response => response.json())   
    const usDolar = currencyAPI.USDBRL.high
    const euro = currencyAPI.EURBRL.high
    const bitcoin = currencyAPI.BTCBRL.high
    let inputAmount = document.getElementById('txtAmount').value
    const currencySelected = document.getElementById('slcCurrency').value
    const displayAmountFrom = document.getElementById('lblFrom')
    const displayAmountTo = document.getElementById('lblTo')
    displayAmountFrom.textContent = new Intl.NumberFormat('pt-BR',
    { style: 'currency', currency:'BRL'}).format(inputAmount)
    
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