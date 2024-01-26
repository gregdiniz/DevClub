import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom"
import axios from 'axios'
import Avatar from "../../assets/avatar.png"
import Arrow from "../../assets/arrow.png"
import Trashcan from "../../assets/trashcan.png"

import H1 from '../../components/Title'
import ContainerItens from "../../components/ContainerItens";
import Button from "../../components/Button";
import {
  Container,
  Image,
  UserList,
  } from './styles.js';

function Users(){

  const [users, setUsers] = useState([])
  const navigate = useNavigate()

  //Chamado quando a aplicação é carregada ou quando um estádo que está no array de dependencias do useEffect é alterado
  useEffect( () => {
    async function fetchUsers() {
      const {data: allUsers} = await axios.get('http://localhost:3001/users');
      setUsers(allUsers);
    }
    fetchUsers()
  },[])

  async function deleteUser(userId){
    await axios.delete(`http://localhost:3001/users/${userId}`)
    const updateUsersAfterDelete = users.filter((user) => user.id !== userId)
    setUsers(updateUsersAfterDelete)
  }

  function goHome(){
    navigate("/")
  }


  return (
    <Container>
      <Image alt="Avatar Icons." src={Avatar} />
      <ContainerItens usersContainerItens={true}>
        <H1>Usuários</H1>

        <ul>
          {
            users.map((user) => (
              <UserList key={user.id}>
                <p>{user.userName}</p><p>{user.age}</p> <button onClick={() => deleteUser(user.id)}><img src={Trashcan} alt="Trashcan" /></button>
              </UserList>
            ))
          }
        </ul>
        <Button onClick={goHome} usersButton={true}><img alt="Arrow Left" src={Arrow}/> Voltar</Button>
      </ContainerItens>
    </Container>
  );
}

export default Users