import React from "react"
import * as S from "./styles"

export function History () {
    return (
        <S.HistoryContainer>
            <h1>Meu histórico</h1>

            <S.HistoryList>
                <table>
                    <thead>
                        <tr>
                            <th>Tarefa</th>
                            <th>Duração</th>
                            <th>Início</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Tarefa</td>
                            <td>20 minutos</td>
                            <td>Há 2 meses</td>
                            <td>Concluido</td>
                        </tr>
                        <tr>
                            <td>Tarefa</td>
                            <td>20 minutos</td>
                            <td>Há 2 meses</td>
                            <td>Concluido</td>
                        </tr>
                        <tr>
                            <td>Tarefa</td>
                            <td>20 minutos</td>
                            <td>Há 2 meses</td>
                            <td>Concluido</td>
                        </tr>
                    </tbody>
                </table>
            </S.HistoryList>
        </S.HistoryContainer>
    )
}