import '../styles/components/pages/NosotrosPage.css'

const NosotrosPage = (props) => {
  return (
    <main className="holder">
      <div className="historia">
        <h2>Historia:</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          praesentium non numquam dolor accusamus qui laborum atque, cum,
          pariatur sit quis dolores nam odio ratione nesciunt aliquam nemo
          delectus expedita.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor eaque
          molestiae laborum distinctio sit facere, voluptates cumque iusto est
          voluptas aliquam suscipit totam quam architecto! Ipsam vel voluptate
          nisi eveniet?
        </p>
      </div>

      <div className="staff">
        <h2>Staff:</h2>
        <div className="empleados">
          <div className="empleado">
            <img
              src="images/nosotros/staff/nosotros1.jpg"
              alt="Juan Jose Lopez"
            />
            <h5>Juan Jose Lopez</h5>
            <h6>CEO</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
              odit commodi a, tempore itaque exercitationem temporibus aut natus
              vero assumenda incidunt quasi suscipit distinctio minima voluptas
              provident iusto. Reiciendis, at.
            </p>
          </div>
          <div className="empleado">
            <img
              src="images/nosotros/staff/nosotros2.jpg"
              alt="Ana Laura Martinez"
            />
            <h5>Ana Laura Martinez</h5>
            <h6>Gerente de Ventas</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
              odit commodi a, tempore itaque exercitationem temporibus aut natus
              vero assumenda incidunt quasi suscipit distinctio minima voluptas
              provident iusto. Reiciendis, at.
            </p>
          </div>
          <div className="empleado">
            <img
              src="images/nosotros/staff/nosotros3.jpg"
              alt="Jose Luis Rodriguez"
            />
            <h5>Jose Luis Rodriguez</h5>
            <h6>Gerente de Marketing</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
              odit commodi a, tempore itaque exercitationem temporibus aut natus
              vero assumenda incidunt quasi suscipit distinctio minima voluptas
              provident iusto. Reiciendis, at.
            </p>
          </div>
          <div className="empleado">
            <img
              src="images/nosotros/staff/nosotros4.jpg"
              alt="Maria Jose Hernandez"
            />
            <h5>Maria Jose Perez</h5>
            <h6>Gerente de Calidad</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
              odit commodi a, tempore itaque exercitationem temporibus aut natus
              vero assumenda incidunt quasi suscipit distinctio minima voluptas
              provident iusto. Reiciendis, at.
            </p>
          </div>
          <div className="empleado">
            <img
              src="images/nosotros/staff/nosotros5.jpg"
              alt="Hernesto Gonzalves"
            />
            <h5>Hernesto Gonzalves</h5>
            <h6>Gerente de Desarrollo</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
              odit commodi a, tempore itaque exercitationem temporibus aut natus
              vero assumenda incidunt quasi suscipit distinctio minima voluptas
              provident iusto. Reiciendis, at.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NosotrosPage;
