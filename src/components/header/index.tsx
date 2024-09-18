import { Scroll, Timer } from "phosphor-react";
import * as S from "./styles"
import React from "react"
import { NavLink } from "react-router-dom";

export const Header:React.FC = () =>{
    const logoIgnite = "/logo-ignite.svg";

    return(
        <S.HeaderContainer>
            <img src={logoIgnite} alt="" />

            <nav>
                <NavLink to="/" title="Timer">
                    <Timer size={24}/>
                </NavLink>
                <NavLink to="history" title="Historico">
                    <Scroll size={24}/>
                </NavLink>
            </nav>
        </S.HeaderContainer>
    )
}