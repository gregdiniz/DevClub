const companies = [
    {name:'Samsung', marketValue:50, CEO:'Kim Hyun Suk', foundedOn:1938},
    {name:'Microsoft', marketValue:415, CEO:'Satya Nadella', foundedOn:1975},
    {name:'Intel', marketValue:117, CEO:'Brian Krzanich', foundedOn:1968},
    {name:'Facebook', marketValue:383, CEO:'Mark Zuckerberg', foundedOn:2004},
    {name:'Spotify', marketValue:30, CEO:'Daniel Ek', foundedOn:2006},
    {name:'Apple', marketValue:845, CEO:'Tim Cook', foundedOn:1976}
]

//[X] 1- Adicionar 10% ao valor de mercado das empresas.
const add10PercentMarketValue = company =>{
    company.marketValue = company.marketValue + company.marketValue / 10
    return company
}
//const newMarketValue = companies.map(add10PercentMarketValue)
//console.log(newMarketValue)
//console.log('-----------------------------------------------')

//[X] 2- Filtrar pelas empresas que foram fundadas antes do ano 2000
const companiesOlderThan2000 = company => company.foundedOn < 2000
const olderCompanies = companies.map(add10PercentMarketValue).filter(companiesOlderThan2000)
console.log(olderCompanies) 
console.log('-----------------------------------------------')

//[X] 3- Somar o valor de mercado das empresas fundadas antes do ano 2000
const sumOlderCompanies = olderCompanies.reduce((acc,current)=> acc + current.marketValue,0)
console.log(sumOlderCompanies)