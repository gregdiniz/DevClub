const { request, response } = require('express')
const importExpress = require('express')
const importUUID = require('uuid')

const app = importExpress()
app.use(importExpress.json())

const port = 3000

const users = []

app.get('/users', (request, response)=>{
    return response.json(users)
})

app.post('/users', (request, response)=>{
    const {name, age} = request.body
    const user = {id:importUUID.v4(), name, age}
    users.push(user)

    return response.status(201).json(user)
})

app.put('/users/:id', (request, response)=>{
    const {id} = request.params
    const {name, age} = request.body

    const userUpdate = {id, name, age}
    const userIndex = users.findIndex(user => user.id === id)

    if(userIndex < 0){
        return response.status(404).json({error:"User not found"})
    }

    users[userIndex] = userUpdate

    return response.status(200).json({userUpdate})
})

app.delete('/users/:id', (request, response)=>{
    const {id} = request.params
    const deleteUserByIndex = users.findIndex(user => user.id === id)

    if(deleteUserByIndex < 0){
        return response.status(404).json({error:"User not found"})
    }

    users.splice(deleteUserByIndex,1)

    return response.status(204).json({message:"User deleted"})
})

app.listen(port, ()=>{
    console.log(`Starting server in port ${port}...`)
})