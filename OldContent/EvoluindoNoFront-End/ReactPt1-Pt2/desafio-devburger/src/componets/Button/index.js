import React from "react";
import { Button as BTN } from "./styles";

function Button ({children,...props}){
    return (
        <BTN {...props}>{children}</BTN>
    )
}

export default Button