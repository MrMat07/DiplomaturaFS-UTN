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
import PromocionesPage from "./pages/PromocionesPage";
import NoticiasPage from "./pages/NoticiasPage";

// Iporto los estilos
import './App.css';
document.title='Intech 2.0 Systems';

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
          <Route path={"/promociones"} exact component={PromocionesPage} />
          <Route path={"/noticias"} exact component={NoticiasPage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
