import "./App.css";
import NavBar from "./components/navbar/NavBar";
import CardBlock from "./components/Card/CardBlock";
import Portfolio from "./components/Portfolio/Portfolio";
import Form from "./components/Form/Form";
import BackgroundBubbles from "./components/Background/BackgroundBubbles";

function App() {
  return (
    <div className="main-container">
      <BackgroundBubbles></BackgroundBubbles>
      <header>
        <NavBar></NavBar>
      </header>
      <CardBlock></CardBlock>
      <Portfolio></Portfolio>
      <Form></Form>
    </div>
  );
}

export default App;
