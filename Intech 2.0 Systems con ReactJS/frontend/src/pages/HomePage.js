import '../styles/components/pages/HomePage.css';

const HomePage = (props) => {
  return (
    <main className="holder">
      <div className="home_img">
        <img src="images/desarrollo_home.jpeg" width="960" alt="Desarrollo" />
      </div>

      <div className="columnas">
        <div className="bienvenidos left">
          <h2>Bienvenidos</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed eaque
            deleniti fugit labore, id consequatur repellendus hic voluptates
            ipsam debitis neque voluptate nemo cupiditate voluptas! Sit quaerat
            numquam libero dolore.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
            quae ea quidem doloribus non aliquid eveniet dignissimos vel quos
            quibusdam quam amet facere voluptatibus accusantium facilis
            similique, sint molestias eaque.
          </p>
        </div>
        <div className="comentarios right">
          <h2>Comentarios:</h2>
          <div className="comentario">
            <span className="cita">Exelente Servicio</span>
            <span className="autor">Juan Jose Gonzales</span>
          </div>
          <div className="comentario">
            <span className="cita">Servicio Regular</span>
            <span className="autor">Marcos Medina</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
