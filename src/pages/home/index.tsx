import { Play } from "phosphor-react"
import * as S from './styles';
import React from "react"

export function Home(){
    return (
        <S.HomeContainer>
            <form action="">
                <S.FormCountainer>
                    <label htmlFor="task">Vou trabalhar em</label>
                    <input id="task" />
                    
                    <label htmlFor="">durante</label>
                    <input type="number" id="minutesAmount" />

                    <span>minutos.</span>
                </S.FormCountainer>
            
                <S.CountDownContainer>
                    <span>0</span>
                    <span>0</span>
                    <S.Separator>:</S.Separator>
                    <span>0</span>
                    <span>0</span>
                </S.CountDownContainer>

                <button>
                    <Play/>
                    Começar
                </button>
            </form>

        </S.HomeContainer>
    )
}