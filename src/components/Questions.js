import styled from "styled-components"

export default function Questions() {
    return (
        <Perguntas>
            <Flashcard>
                <p>Pergunta 1</p>
                <ion-icon name="play-outline"></ion-icon>
            </Flashcard>

            <FlashQuestion>
                <p>O que é JSX?</p>
                <ion-icon name="refresh"></ion-icon>
            </FlashQuestion>

            <FlashAnswer>
                <p>JSX é uma sintaxe para escrever HTML dentro do JS</p>
                <div>
                    <BotaoVermelho>Não lembrei</BotaoVermelho>
                    <BotaoAmarelo>Quase não lembrei</BotaoAmarelo>
                    <BotaoVerde>Zap!</BotaoVerde>
                </div>
            </FlashAnswer>
        </Perguntas>
    )
}

const Perguntas = styled.div`
    width: 375px;
    height: fit-content;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ion-icon{
        font-size: 30px;
    }
`

const Flashcard = styled.div`
    width: 280px;
    height: 65px;
    margin-bottom: 25px;
    background: #FFFFFF;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
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
`

const FlashQuestion = styled.div`
    width: 280px;
    height: 65px;
    margin-bottom: 25px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
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

const FlashAnswer = styled.div`
    width: 280px;
    height: fit-content;
    margin-bottom: 25px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
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

const BotaoAmarelo = styled.button`
    background-color: #FF922E;
`

const BotaoVerde = styled.button`
    background-color: #2FBE34;
`