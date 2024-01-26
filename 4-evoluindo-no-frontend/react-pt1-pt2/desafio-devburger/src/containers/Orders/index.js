import React from "react";
import { useNavigate } from "react-router-dom";

import { Image } from "./styles";
import Logo from "../../assets/imgOrders.svg";
import Container from "../../componets/Container";
import ContainerItens from "../../componets/ContainerItens";
import Title from "../../componets/Title";
import Button from "../../componets/Button";

function Orders() {
  const navigate = useNavigate();

  function goHome(){
    navigate("/")
  }

  return (
    <Container>
      <Image alt="Orders Illustration" src={Logo} />
      <ContainerItens>
        <Title>Pedidos</Title>
        <Button buttonOrders onClick={goHome}>Voltar</Button>
      </ContainerItens>
    </Container>
  );
}

export default Orders;
