import '../styles/components/pages/HomePage.css';

const HomePage = (props) => {
  return (
    <main class="holder">
      <div class="home_img">
        <img src="images/desarrollo_home.jpeg" width="960" alt="Desarrollo" />
      </div>

      <div class="columnas">
        <div class="bienvenidos left">
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
        <div class="comentarios right">
          <h2>Comentarios:</h2>
          <div class="comentario">
            <span class="cita">Exelente Servicio</span>
            <span class="autor">Juan Jose Gonzales</span>
          </div>
          <div class="comentario">
            <span class="cita">Servicio Regular</span>
            <span class="autor">Marcos Medina</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
