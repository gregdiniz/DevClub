import styled from "styled-components";

export const Image = styled.img`
    margin-top: 15px;
`

export const InputLabel = styled.p`
    font-weight: 700;
    font-size: 14px;
    letter-spacing: -0.41px;
    line-height: 22px;
    color: #EEEEEE;
    margin-left: 20px;
    margin-top: ${({ clientName }) => (clientName ? '30px' : '0')};
`

export const Input = styled.input`
    border:none;
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.25);
    padding: 10px 15px;
    height: 40px;
    width: 100%;
`

export const ContentItens =  styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
`