import styled from "styled-components";

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    height: 40px;
    width: 100%;

    background-color: ${( {buttonOrders} ) => (buttonOrders ? 'rgba(255, 255, 255, 0.14)': '#D93856')};

    font-weight: bold;
    font-size: 12px;
`