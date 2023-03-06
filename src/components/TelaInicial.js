import styled from "styled-components"
import zaprecall from "../assets/zaprecall.png"

export default function TelaInicial(props) {
    function escondeBoasVindas() {
        props.setTelaInicial(false);
    }

    return (
        <BoasVindas hide={props.telaInicial}>
            <img src={zaprecall} />
            <h1>ZapRecall</h1>
            <button onClick={escondeBoasVindas}>Iniciar Recall!</button>
        </BoasVindas>
    )
}

const BoasVindas = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    display: ${props => props.hide ? 'flex' : 'none'};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #FB6B6B;
    z-index: 1;

    img{
        margin-bottom: 40px;
    }

    h1{
        font-family: 'Righteous';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: -0.012em;
        color: #FFFFFF;
        margin-bottom: 40px;
    }

    button{
        box-shadow: 0 0 0 0;
        border: 0 none;
        outline: 0;
        background-color: #FFFFFF;
        border: 1px solid #D70900;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        width: 250px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #D70900;
        cursor: pointer;
    }
`