import styled from 'styled-components'
import Background from '../../assets/bg1.png'

export const Container = styled.div `
    background: url(${Background});
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    height: 100vh;
`;

export const Image = styled.img `
    margin-top: 30px;
`;

export const InputLabel = styled.p `
    color: #EEE;
    font-size: 18px;
    font-style: normal;
    font-weight: bold;
    letter-spacing: -0.400px;
    line-height: 22px;
    margin-left: 25px;
`;

export const Input = styled.input `
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    
    border: none;
    border-radius: 14px;
    outline: none;
    
    height: 60px;
    width: 340px;

    color: #FFF;
    padding-left: 25px;
    font-size: 24px;
    font-weight:normal;
    font-style: normal;
    line-height: 28px;

    margin-bottom: 25px;
`;