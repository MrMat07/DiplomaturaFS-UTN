import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Importo los componenetes
import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";

// Importo las paginas
import HomePage from "./pages/HomePage";
import NosotrosPage from "./pages/NosotrosPage";
import ServiciosPage from "./pages/ServiciosPage";
import GaleriaPage from "./pages/GaleriaPage";
import NovedadesPage from "./pages/NovedadesPage";
import ContactosPage from "./pages/ContactoPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Nav />
        <Switch>
          <Route path={"/"} exact component={HomePage} />
          <Route path={"/nosotros"} exact component={NosotrosPage} />
          <Route path={"/servicios"} exact component={ServiciosPage} />
          <Route path={"/galeria"} exact component={GaleriaPage} />
          <Route path={"/novedades"} exact component={NovedadesPage} />
          <Route path={"/contactos"} exact component={ContactosPage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
