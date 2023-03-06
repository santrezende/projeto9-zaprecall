import GlobalStyle from "./globalstyle";
import styled from "styled-components";
import Header from "./components/Header";
import Questions from "./components/Questions";
import Footer from "./components/Footer";
import FlashCards from "./components/FlashCards";
import cards from "./perguntas"
import React from "react";

export default function App() {
  let [contadorRespondidas, setContadorRespondidas] = React.useState(0);

  const layout = [];

  cards.map((p) => {
    layout.push(
      <Pergunta key={p.id}>
        <FlashCards
          number={p.id}
          pergunta={p.question}
          resposta={p.answer}
          contador={contadorRespondidas}
          setContador={setContadorRespondidas}
          data-test="flashcard"
        />
      </Pergunta>
    );
  });

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Questions perguntas={layout} />
      <Footer concluidas={contadorRespondidas} />
    </div>
  );
}

const Pergunta = styled.div`
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