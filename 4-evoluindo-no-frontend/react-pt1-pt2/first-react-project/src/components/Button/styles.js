import styled from "styled-components";

export const Button = styled.button`
    width: 340px;
    height: 70px;
    margin-top: 20px;

    //usando o props recebido no index.js para criar If-Else que determina o valor de configuração do atributo 
    background: ${props => props.usersButton ? 'transparent' : 'rgba(0, 0, 0, 0.8)' } ;
    border-radius: 14px;
    border: ${props => props.usersButton ? '1px solid #FFF' : 'none'};

    color: #FFF;
    font-size: 20px;
    font-weight: bold;
    font-style: bold;
    line-height: 28px;

    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    &:hover{
        opacity: 0.8;
    }

    &:active{
        opacity: 0.5;
    }

    img{ 
        transform: ${props => props.usersButton && 'rotateY(180deg)'}
    }
`;