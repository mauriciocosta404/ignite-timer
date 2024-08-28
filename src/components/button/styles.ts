import styled from "styled-components";
import { ButtonVariant } from "./types";

interface ButtonContainerProps{
    variant?: ButtonVariant;
}

const buttonVariants = {
    primary: 'purple',
    secondary: 'orange',
    danger: 'red',
    success: 'green'
}

export const Button = styled.button<ButtonContainerProps>`
    width: 100px;
    height: 40px;
    background-color: ${({theme}) => theme.colors.primary};

    /*${props => {
        return `background-color: ${buttonVariants[props.variant!]}`
    }}*/
`; 