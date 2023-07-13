import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import People from "../../assets/people.png";
import Arrow from "../../assets/arrow.png";

import H1 from '../../components/Title'
import ContainerItens from "../../components/ContainerItens";
import Button from "../../components/Button";
import {
  Container,
  Image,
  InputLabel,
  Input,
} from "./styles.js";

function Home() {
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();
  const navigate = useNavigate();

  async function addNewUser() {
    if(inputName.current.value === "" || inputAge.current.value === ""){
      navigate("/usuarios");
    } else {
      const { data: newUser } = await axios.post("http://localhost:3001/users", {
        userName: inputName.current.value,
        age: inputAge.current.value,
      });
      setUsers([...users, newUser]);
      navigate("/usuarios");
    }
  }

  return (
    <Container>
      <Image alt="People talking to each other." src={People} />
      <ContainerItens>
        <H1>Olá</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome" maxLength="16"></Input>

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade" maxLength="2"></Input>

        <Button onClick={addNewUser}>
          Cadastrar <img alt="Arrow Right" src={Arrow} />
        </Button>
      </ContainerItens>
    </Container>
  );
}

export default Home;
