/*Tratamento de erros com try catch */

const { response } = require('express')
const importExpress = require('express')
const { request } = require('http')

const app = importExpress
app.use(importExpress.json())

const port = 3000
let id = 0
const users =[]

app.post('/users', (request, response) => {
    try{
        const {name, age} = request.body
        if(age<18) throw new Error("No under age users allowed.")
        const user = {id:id+1, name, age}
        users.push(user)
        return response.status(201).json(user) 
    } catch(err){
        return response.status(400).json({error:err.message})
    } finally {
        console.log('Sou opcional e vou executar sempre após o Try OU o Catch')
    }
})

app.listen(port, () => {
    console.log(`Starting server at port ${port}`)
})