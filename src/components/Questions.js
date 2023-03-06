import styled from "styled-components"
import React from "react";

export default function Questions(props) {

    return (
        <ContainerPerguntas>
            {props.perguntas}
        </ContainerPerguntas>
    )
}

const ContainerPerguntas = styled.div`
    width: 375px;
    height: fit-content;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 70px;
`