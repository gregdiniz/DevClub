import React from 'react'
import{H1} from './styles'

//Conceito de 'props' =>utilizar as propriedade do objeto que são recebidos de outros componentes 

//feito a desestruturação do componente para recuperar o valor que foi recebido dentro da propriedade 'children'. Antes era props.children
function Title({children}) {
    return <H1>{children}</H1>
}

export default Title