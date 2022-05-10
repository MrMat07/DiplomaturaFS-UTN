import React,{useState,useEffect} from 'react';
import axios from 'axios';
import NovedadItem from '../components/novedades/NovedadItem';
import '../styles/components/pages/NovedadesPage.css';

const NovedadesPage = (props) => {

  const [loading, setLoading]=useState(false);
  const [novedades, setNovedades] = useState([]);

  useEffect(()=>{
    const cargarNovedades = async()=>{
      setLoading(true);
      const response = await axios.get('http://localhost:3000/api/novedades');
      setNovedades(response.data);
      setLoading(false);
    };

    cargarNovedades();
  },[]);

  return (
    <main className="holder">
      <h2>Novedades:</h2>
      {
        loading ? (
          <p>Cargando...</p>
        ) : (
          novedades.map(item=> <NovedadItem key={item.IdNews} title={item.Titulo} subtitle={item.Subtitulo}
            imagen={item.imagen} body={item.Cuerpo}/>)
        )}

      {/* <div className="servicio">
        <img src="images/servicios/paginas_web.jpg" alt="Paginas Webs" />
        <div className="info">
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
      <div className="servicio">
        <img src="images/servicios/sistemas_web.jpg" alt="Sistemas Webs" />
        <div className="info">
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
      <div className="servicio">
        <img src="images/servicios/aplicaciones_moviles.jpg" alt="Apps" />
        <div className="info">
          <h3>Titulo 3</h3>
          <h4>Subtitulo 3</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            praesentium non numquam dolor accusamus qui laborum atque, cum,
            pariatur sit quis dolores nam odio ratione nesciunt aliquam nemo
            delectus expedita.
          </p>
        </div>
      </div> */}
      
    </main>
  );
};

export default NovedadesPage;
