import styled from "styled-components"
import React from "react";

export default function FlashCards(props) {
    const [displayC, setDisplayC] = React.useState(true);
    const [displayQ, setDisplayQ] = React.useState(false);
    const [displayA, setDisplayA] = React.useState(false);
    const [displayR, setDisplayR] = React.useState(false);
    const [displayY, setDisplayY] = React.useState(false);
    const [displayG, setDisplayG] = React.useState(false);

    function abreCard() {
        setDisplayC(false);
        setDisplayQ(true);
    }

    function abreResposta() {
        setDisplayA(true);
        setDisplayQ(false);
    }

    function botaoVerde() {
        setDisplayA(false);
        setDisplayG(true);

        props.setContador(props.contador + 1);
    }

    function botaoVermelho() {
        setDisplayA(false);
        setDisplayR(true);

        props.setContador(props.contador + 1);
    }

    function botaoAmarelo() {
        setDisplayA(false);
        setDisplayY(true);

        props.setContador(props.contador + 1);
    }

    return (
        <>
            <CardNumero dispC={displayC}>
                <p data-test="flashcard-text">Pergunta {props.number}</p>
                <ion-icon data-test="play-btn" onClick={abreCard} name="play-outline"></ion-icon>
            </CardNumero>

            <CardPerguntaTexto dispQ={displayQ}>
                <p data-test="flashcard-text">{props.pergunta}</p>
                <ion-icon data-test="turn-btn" onClick={abreResposta} name="refresh"></ion-icon>
            </CardPerguntaTexto>

            <CardResposta dispA={displayA}>
                <p data-test="flashcard-text">{props.resposta}</p>
                <div>
                    <BotaoVermelho data-test="no-btn" onClick={botaoVermelho}>Não lembrei</BotaoVermelho>
                    <BotaoAmarelo data-test="partial-btn" onClick={botaoAmarelo}>Quase não lembrei</BotaoAmarelo>
                    <BotaoVerde data-test="zap-btn" onClick={botaoVerde}>Zap!</BotaoVerde>
                </div>
            </CardResposta>

            <CardNumeroVerde dispG={displayG}>
                <p data-test="flashcard-text">Pergunta {props.number}</p>
                <ion-icon name="checkmark-circle"></ion-icon>
            </CardNumeroVerde>

            <CardNumeroAmarelo dispY={displayY}>
                <p data-test="flashcard-text">Pergunta {props.number}</p>
                <ion-icon name="help-circle"></ion-icon>
            </CardNumeroAmarelo>

            <CardNumeroVermelho dispR={displayR}>
                <p data-test="flashcard-text">Pergunta {props.number}</p>
                <ion-icon name="close-circle"></ion-icon>
            </CardNumeroVermelho>
        </>
    )
}

const CardNumero = styled.div`
width: 280px;
height: 65px;
margin-bottom: 25px;
background: #FFFFFF;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
border-radius: 5px;
display: ${props => props.dispC ? 'flex' : 'none'};
align-items: center;
justify-content: space-between;
padding: 0 20px;

p{
    width: 87px;
    height: 19px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
}

ion-icon{
    font-size: 30px;
}
`

const CardPerguntaTexto = styled.div`
    width: 280px;
    height: 65px;
    margin-bottom: 25px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: ${props => props.dispQ ? 'flex' : 'none'};
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;

    p{
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
    }
`

const CardResposta = styled.div`
    width: 280px;
    height: fit-content;
    margin-bottom: 25px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: ${props => props.dispA ? 'flex' : 'none'};
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;

    p{
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        margin-bottom: 20px;
    }

    div{
        display: flex;
        width: 280px;
        align-items: center;
        justify-content: space-between;

        button{
            box-shadow: 0 0 0 0;
            border: 0 none;
            outline: 0;
            width: 85px;
            height: 37px;
            border-radius: 5px;
            display: flex;
            align-items: center;
            justify-content: center;

            font-family: 'Recursive';
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 14px;
            display: flex;
            align-items: center;
            text-align: center;
            color: #FFFFFF;

            cursor: pointer;
        }
    }
`

const BotaoVermelho = styled.button`
background-color: #FF3030;
`

const CardNumeroVermelho = styled.div`
width: 280px;
height: 65px;
margin-bottom: 25px;
background: #FFFFFF;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
border-radius: 5px;
display: ${props => props.dispR ? 'flex' : 'none'};;
align-items: center;
justify-content: space-between;
padding: 0 20px;
text-decoration-line: line-through;
font-family: 'Recursive';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
color: #FF3030;
ion-icon{
    font-size: 30px;
    color: #FF3030;
}
`

const BotaoAmarelo = styled.button`
background-color: #FF922E;
`

const CardNumeroAmarelo = styled.div`
width: 280px;
height: 65px;
margin-bottom: 25px;
background: #FFFFFF;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
border-radius: 5px;
display: ${props => props.dispY ? 'flex' : 'none'};;
align-items: center;
justify-content: space-between;
padding: 0 20px;
text-decoration-line: line-through;
font-family: 'Recursive';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
color: #FF922E;
ion-icon{
    font-size: 30px;
    color: #FF922E;
}
`

const BotaoVerde = styled.button`
background-color: #2FBE34;
`

const CardNumeroVerde = styled.div`
width: 280px;
height: 65px;
margin-bottom: 25px;
background: #FFFFFF;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
border-radius: 5px;
display: ${props => props.dispG ? 'flex' : 'none'};;
align-items: center;
justify-content: space-between;
padding: 0 20px;
text-decoration-line: line-through;
font-family: 'Recursive';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
color: #2FBE34;

ion-icon{
    font-size: 30px;
    color: #2FBE34;
}
`