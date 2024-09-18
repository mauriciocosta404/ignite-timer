import { Play } from "phosphor-react"
import * as S from './styles';
import React from "react"

export function Home(){
    return (
        <S.HomeContainer>
            <form action="">
                <S.FormCountainer>
                    <label htmlFor="task">Vou trabalhar em</label>
                    
                    <S.TaskInput 
                        placeholder="Dê um nome para o seu projecto" 
                        id="task" 
                    />
                    
                    <label htmlFor="">durante</label>
                    <S.MinutesAmountInput 
                        placeholder="00" 
                        type="number" 
                        id="minutesAmount" 
                    />

                    <span>minutos.</span>
                </S.FormCountainer>
            
                <S.CountDownContainer>
                    <span>0</span>
                    <span>0</span>
                    <S.Separator>:</S.Separator>
                    <span>0</span>
                    <span>0</span>
                </S.CountDownContainer>

                <S.StartCountDownButton type="submit">
                    <Play size={24}/>
                    Começar
                </S.StartCountDownButton>
            </form>

        </S.HomeContainer>
    )
}