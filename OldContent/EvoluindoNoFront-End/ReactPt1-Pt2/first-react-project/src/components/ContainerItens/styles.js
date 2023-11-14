import styled from "styled-components";

export const ContainerItens = styled.div `
    background: linear-gradient(157.44deg, 
        rgba(255, 255, 255, 0.6) 0.84%,
        rgba(255, 255, 255, 0.6) 0.85%,
        rgba(255, 255, 255, 0.15) 100%
        );
    border-radius: 61px 61px 0px 0px;
    padding: 50px 35px;
    display: flex;
    flex-direction: column;
    height: 100%;
    //O nome da propriedade deve ser o mesmo que a variável usada para armazenar o valor que foi recebido como propriedade do componente    
    ${props => props.usersPageContainer && `
    backdrop-filter: blur(45px);
    min-height: calc(100vh - 150px);
    `}
`;