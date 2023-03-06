import styled from "styled-components"

export default function Footer(props) {
    return (
        <Rodape data-test="footer">
            <p>{props.concluidas}/8 CONCLUÍDOS</p>
            <div>{props.icons}</div>
        </Rodape>
    )
}

const Rodape = styled.div`
    width: 100%;
    height: 70px;
    position: fixed;
    bottom: 0;
    margin-left: auto;
    margin-right: auto;
    background-color: #FFFFFF;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p{
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #333333;
        margin-bottom: 5px;
    }

    div{
        font-size: 20px;
    }
`