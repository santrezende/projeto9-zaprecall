import GlobalStyle from "./globalstyle";
import Header from "./components/Header";
import Questions from "./components/Questions";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Questions />
      <Footer />
    </div>
  );
}

export default App;
