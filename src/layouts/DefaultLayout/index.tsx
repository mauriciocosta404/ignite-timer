import React from "react"
import { Header } from "../../components/header"
import { Outlet } from "react-router-dom"
import * as S from "./styles";

export const DefaultLayout:React.FC = () =>{
    return(
        <S.LayoutContainer>
            <Header/>
            <Outlet/>
        </S.LayoutContainer>
    )
}