import styled from 'styled-components'
import Background from '../../assets/bg2.png'

export const Container = styled.div `
    background: url(${Background});
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    height: 100%;
    min-height: 100vh;
`;

export const Image = styled.img `
    margin-top: 30px;
`;

export const Button = styled.button `
    width: 340px;
    height: 70px;
    margin-top: 20px;

    background: transparent;
    border-radius: 14px;
    border: 1px solid #FFF;

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
        transform: rotate(180deg);
    }
`;

export const UserList = styled.li `
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    padding: 0 10px;

    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    
    border: none;
    border-radius: 14px;
    outline: none;
    
    height: 60px;
    width: 340px;

    p{
        color: #fff;
        font-style: normal;
        font-weight: normal;
        font-size:24px;
        line-height: 28px;
    }

    button{
        background: none;
        border: none;
        cursor: pointer;
    }
`;