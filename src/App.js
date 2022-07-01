import "./App.css";
import NavBar from "./components/navbar/NavBar";
import CardBlock from "./components/Card/CardBlock";
import Portfolio from "./components/Portfolio/Portfolio";
import Form from "./components/Form/Form";
import BackgroundBubbles from "./components/Background/BackgroundBubbles";
import NavbarMobile from "./components/navbar/NavbarMobile";



function App() {
  return (
    <div className="main-container">
      <BackgroundBubbles></BackgroundBubbles>
      <header>
        <NavBar/>
        <NavbarMobile/>
      </header>
      <CardBlock></CardBlock>
      <Portfolio></Portfolio>
      <Form></Form>
    </div>
  );
}

export default App;
