//Cotação do dia 16/12/2022
const usDolar = 5.29
const euro = 5.61

const button = document.getElementById('convertButton')
const convertTo = document.getElementById('slcCurrency')

const switchFlag = () => {
    if(convertTo.value === 'dolar'){
        document.getElementById('flagConvertTo').src = './assets/USD.png'
        document.getElementById('currency-name').textContent = 'Dólar Americano'
    } else{
        document.getElementById('flagConvertTo').src = './assets/EUR.png'
        document.getElementById('currency-name').textContent = 'Euro'
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

    currencySelected === 'dolar' ? displayAmountTo.textContent = new Intl.NumberFormat('en-US',{ style: 'currency', currency:'USD'}).format(inputAmount / usDolar) :
        displayAmountTo.textContent = new Intl.NumberFormat('de-DE', { style: 'currency', currency:'EUR'}).format(inputAmount / euro)
}

convertTo.addEventListener('change', switchFlag)
button.addEventListener('click', convertCurrency)