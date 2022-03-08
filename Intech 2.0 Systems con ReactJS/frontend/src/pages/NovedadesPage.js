import '../styles/components/pages/ServiciosPage.css';

const NovedadesPage = (props) => {
  return (
    <main class="holder">
      <h2>Novedades:</h2>
      <div class="servicio">
        <img src="images/servicios/paginas_web.jpg" alt="Paginas Webs" />
        <div class="info">
          <h3>Titulo 1</h3>
          <h4>Subtitulo 1</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            praesentium non numquam dolor accusamus qui laborum atque, cum,
            pariatur sit quis dolores nam odio ratione nesciunt aliquam nemo
            delectus expedita.
          </p>
        </div>
      </div>
      <div class="servicio">
        <img src="images/servicios/sistemas_web.jpg" alt="Sistemas Webs" />
        <div class="info">
          <h3>Titulo 2</h3>
          <h4>Subtitulo 2</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            praesentium non numquam dolor accusamus qui laborum atque, cum,
            pariatur sit quis dolores nam odio ratione nesciunt aliquam nemo
            delectus expedita.
          </p>
        </div>
      </div>
      <div class="servicio">
        <img src="images/servicios/aplicaciones_moviles.jpg" alt="Apps" />
        <div class="info">
          <h3>Titulo 3</h3>
          <h4>Subtitulo 3</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            praesentium non numquam dolor accusamus qui laborum atque, cum,
            pariatur sit quis dolores nam odio ratione nesciunt aliquam nemo
            delectus expedita.
          </p>
        </div>
      </div>
    </main>
  );
};

export default NovedadesPage;
