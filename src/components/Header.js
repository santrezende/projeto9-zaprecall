import styled from 'styled-components';
import zaprecall from '../assets/zaprecall.png';

export default function Header() {
    return (
        <Cabecalho>
            <img src={zaprecall} />
            <h1>ZapRecall</h1>
        </Cabecalho>
    )
}

const Cabecalho = styled.div`
    width: 375px;
    height: 150px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: center;
    align-items: center;

    img{
        width: 52px;
        height: 60px;
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
        transform: rotate(0.58deg);
        margin-left: 10px;
    }
`