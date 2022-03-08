import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <nav>
      <div class="holder">
        <ul>
          <li>
            <Link Link to="/">Home</Link>
          </li>
          <li>
            <Link Link to="/nosotros">Nosotros</Link>
          </li>
          <li>
            <Link Link to="/servicios">Servicios</Link>
          </li>
          <li>
            <Link Link to="/galeria">Galeria</Link>
          </li>
          <li>
            <Link Link to="/novedades">Novedades</Link>
          </li>
          <li>
            <Link Link to="/contactos">Contactos</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
