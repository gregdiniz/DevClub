import React,{useRef} from "react";
import { useNavigate } from "react-router-dom";
//import axios from "axios";

import { Image, Input, InputLabel, ContentItens } from "./styles";
import Logo from "../../assets/imgHome.svg";
import Container from "../../componets/Container";
import Title from "../../componets/Title";
import ContainerItens from "../../componets/ContainerItens";
import Button from "../../componets/Button";

function Home() {
  const inputOrder = useRef();
  const inputName = useRef();
  const navigate = useNavigate();

  function novoPedido(){
    console.log("pedido")
    if(inputName.current.value === "" || inputOrder.current.value === ""){
      navigate("/orders")
    }
  }

  return (
    <Container>
      <Image alt="DevBurger Logo" src={Logo} />
      <ContainerItens>
        <Title>Faça seu pedido!</Title>
        <ContentItens>
          <InputLabel>Pedido</InputLabel>
          <Input ref={inputOrder}></Input>
          <InputLabel clientName>Nome do Cliente</InputLabel>
          <Input ref={inputName}></Input>
          <Button onClick={novoPedido}>Novo Pedido</Button>
        </ContentItens>
      </ContainerItens>
    </Container>
  );
}

export default Home;
