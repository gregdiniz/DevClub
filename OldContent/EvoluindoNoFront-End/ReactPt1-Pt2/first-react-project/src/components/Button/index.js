import React from "react";
import { Button as BTN } from "./styles";

//Usando spread operator é possivel receber tudo que é enviado dentro do componente(que no caso é um botão), abaixo, tudo foi armazenado dentro da variável 'props'(incluindo os eventos e funções do componente)
function Button({children, ...props}){
    return <BTN {...props}>{children}</BTN>
}

export default Button