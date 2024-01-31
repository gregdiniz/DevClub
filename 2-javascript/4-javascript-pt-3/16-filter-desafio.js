//[X] 1- Criar um novo filtro contendo apenas os números pares e divisíveis por 5
const list = [20,3,234,12,17,541,6,87,275,1000]
const newList = list.filter( numeros => numeros % 2 === 0 && numeros % 5 === 0)
console.log(newList)

//[X] 2- Criar um novo array contendo as empresas que foram fundadas depois de 1975 e que tenham mais de U$200 de valor de mercado
const companies = [
    {name:'Samsung', marketValue:50, CEO:'Kim Hyun Suk', foundedOn:1938},
    {name:'Microsoft', marketValue:415, CEO:'Satya Nadella', foundedOn:1975},
    {name:'Intel', marketValue:117, CEO:'Brian Krzanich', foundedOn:1968},
    {name:'Facebook', marketValue:383, CEO:'Mark Zuckerberg', foundedOn:2004},
    {name:'Spotify', marketValue:30, CEO:'Daniel Ek', foundedOn:2006},
    {name:'Apple', marketValue:845, CEO:'Tim Cook', foundedOn:1976}
    
]

const newCompanies = companies.filter( empresas => empresas.foundedOn > 1975 && empresas.marketValue > 200)
console.log(newCompanies)