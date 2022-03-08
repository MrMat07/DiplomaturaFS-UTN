const ContactosPage = (props) => {
  return (
    <main class="holder">
      <div class="columna left">
        <h2>Contacto Rapido:</h2>
        <form action="" method="" class="form">
          <p>
            <input type="text" placeholder="Nombre" />
          </p>
          <p>
            <input type="text" placeholder="Email" />
          </p>
          <p>
            <input type="text" placeholder="Teléfono" />
          </p>
          <p>
            <textarea id="mensaje" placeholder="Mensaje"></textarea>
          </p>
          <p>
            <button class="acciones" id="btnEnviar" type="submit">
              Enviar
            </button>
          </p>
        </form>
      </div>

      <div class="columna right">
        <h2>Otras Vias de Contacto:</h2>
        <p>Tambien puede comunicarse con nosotros</p>
        <ul>
          <li>Teléfono: 3333-4444444</li>
          <li>Email: info@I2S.com.ar</li>
          <li>Facebook:</li>
          <li>Twitter:</li>
          <li>LinkedIn:</li>
        </ul>
      </div>
    </main>
  );
};

export default ContactosPage;
