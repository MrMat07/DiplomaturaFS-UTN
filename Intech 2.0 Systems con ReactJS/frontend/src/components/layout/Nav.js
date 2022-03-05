import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <nav>
      <div class="holder">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/nosotros">Nosotros</Link>
          </li>
          <li>
            <Link href="/servicios">Servicios</Link>
          </li>
          <li>
            <Link href="/galeria">Galeria</Link>
          </li>
          <li>
            <Link href="/novedades">Novedades</Link>
          </li>
          <li>
            <Link href="/contactos">Contactos</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
