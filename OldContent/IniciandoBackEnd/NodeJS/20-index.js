const { request, response } = require('express')
const importExpress = require('express')
const importUUID = require('uuid')

const app = importExpress()
app.use(importExpress.json())

const port = 3000

//Middlewares => Interceptadores => Tem o poder de para ou alterar dados da requisição

const users = []

const checkUserID = (request, response, next) =>{
    const {id} = request.params
    const index = users.findIndex(user => user.id === id)
    if(index < 0){
        return response.status(404).json({error:"User not found"})
    }
    request.userIndex = index
    request.userId = id
    next()
}

app.get('/users', (request, response)=>{
    return response.status(200).json(users)
})

app.post('/users', (request, response)=>{
    const {name, age} = request.body
    const user = {id:importUUID.v4(), name, age}
    users.push(user)
    return response.status(201).json(user)
})

app.put('/users/:id', checkUserID, (request, response)=>{
    const {name, age} = request.body
    const userUpdate = {id:request.userId, name, age}
    users[request.userIndex] = userUpdate
    return response.status(200).json(userUpdate)
})

app.delete('/users/:id', checkUserID, (request, response)=>{
    users.splice(request.userIndex,1)
    return response.status(204).json({message:"User deleted"})
})

app.listen(port, ()=>{
    console.log(`Starting server in port ${port}...`)
})