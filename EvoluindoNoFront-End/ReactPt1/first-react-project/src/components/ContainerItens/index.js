import React from "react";
import { ContainerItens as DivContainerItens } from "./styles";

function ContainerItens(props){
    return <DivContainerItens usersPageContainer={props.usersContainerItens}>{props.children}</DivContainerItens>
}

export default ContainerItens