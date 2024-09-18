import React from "react";
import * as S from "./styles";
import { ButtonVariant } from "./types";

interface ButtonProps {
  variant?: ButtonVariant;
}

export const Button: React.FC<ButtonProps> = ({ variant = "primary" }) => {
  return <S.Button variant={variant}>Enviar</S.Button>;
};
