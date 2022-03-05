
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Importo los componenetes
import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";

// Importo las paginas
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
    <div className="App">
      <Header></Header>
      <Nav/>
      <Switch>
        <Route path={"/"} exact component={HomePage}/>
      </Switch>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
