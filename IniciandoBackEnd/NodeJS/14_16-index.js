const { request, response } = require('express')
//Importando o Express para o projeto e atribuindo a uma variável para simplificar o uso
const expressImport = require('express')
const app = expressImport()
app.use(expressImport.json()) /*para utilizar o JSON como padrão de resposta. Obs. Deve ser sempre declarado antes da definição das rotas*/

const port = 3000

/*
    - Query params => meusite.com/project?name=gregory&age=33      //Filtro recebido pela URL
    - Route params => /users/2       //BUSCAR, DELETAR OU ATUALIZAR, ALGO ESPECÍFICO
    - Request Body =>  {"name":"Gregory", "age":33}

    - GET          => Buscar informações no back-end
    - POST         => Criar informações no back-end
    - PUT / PATCH  => Alterar/Atualizar informações no back-end
    - DELETE       => Deletar informações no back-end
*/

//Criando uma rota para o projeto
/*app.get('/project',(request, response)=>{
    //recuperando os valores das variáveis através de Query Params
    const description = request.query.description
    const owner = request.query.owner
    OU
    const {description, owner} = request.query

    //return  response.send('Projeto Nodejs com atualização pelo nodemon')
    return response.json({description, owner}) //abreviação para quando o nome da chave e da variável forem iguais
})*/

//Criando uma rota e recuperando os valores das variáveis através de Route Params
/*app.get('/users/:id', (request, response)=>{
    const {id} = request.params
    return response.json({id})
})*/

//Criando uma rota e recuperando valores através de Body Params
app.get('/user', (request, response)=>{
    const {name, age} = request.body
    return response.json({name, age})
})

//Indicando qual a porta que a aplicação vai usar
app.listen(port, ()=>{
    console.log(`Server started on port ${port}...🚀`)
})