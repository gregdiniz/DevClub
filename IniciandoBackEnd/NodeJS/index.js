const { json, request, response } = require('express')
const importExpress = require('express')
const importUUID = require('uuid')

const app = importExpress()
app.use(importExpress.json())

const port = 3000

const orders = []

const checkOrderId = (request, response, next) =>{
    const {id} = request.params
    const index = orders.findIndex(order => order.id === id)

    if(index < 0){
        return response.status(404).json({erro:"No order ID found."})
    }

    request.orderIndex = index
    request.orderID = id

    next()
}

const orderLog = (request, response, next) => {
    request.logFunc = (method, url) => console.log(`[${method}] - ${url}`)
    next()
}

app.get('/orders', orderLog, (request, response) => {
    request.logFunc("GET","/orders")
    return response.status(200).json({orders})
})

app.post('/orders', orderLog, (request,response) => {
    const {order, clientName, price} = request.body
    const newOrder = {id:importUUID.v4(), order, clientName, price, status:"Em preparação"}

    orders.push(newOrder)

    request.logFunc("POST","/orders")
    return response.status(201).json({newOrder})
})

app.put('/orders/:id', checkOrderId, orderLog, (request, response) => {
    const {order, clientName, price} = request.body
    const updateOrder = {id:request.orderID, order, clientName, price, status:orders[request.orderIndex].status}
    orders[request.orderIndex] = updateOrder

    request.logFunc("PUT","/orders/"+request.orderID)
    return response.status(200).json({updateOrder})
})

app.delete('/orders/:id', checkOrderId, orderLog, (request, response) => {
    orders.splice(request.orderIndex,1)
    request.logFunc("DELETE","/orders/" + request.orderID)
    return response.status(200).json({message:"Order successfully deleted."})
})

app.get('/orders/:id', checkOrderId, orderLog, (request, response) => {
    request.logFunc("GET","/orders/"+request.orderID)
    return response.status(200).json(orders[request.orderIndex])
})

app.patch('/orders/:id', checkOrderId, orderLog, (request, response) => {
    orders[request.orderIndex].status = "Pronto"
    request.logFunc("PATCH","/orders/"+request.orderID)
    return response.status(200).json(orders[request.orderIndex])
})

app.listen(port, () => {
    console.log(`Server starting in port ${port}...`)
})