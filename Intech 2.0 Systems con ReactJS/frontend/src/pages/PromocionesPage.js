import React,{useState,useEffect} from 'react';
import axios from 'axios';
import PromocionItem from '../components/promociones/PromocionItem';
import '../styles/components/pages/PromocionesPage.css';

const PromocionesPage =(props)=>{

  const [loading, setLoading]=useState(false);
  const [promociones, setPromociones] = useState([]);

  useEffect(()=>{
    const cargarPromociones = async()=>{
      setLoading(true);
      const response = await axios.get('http://localhost:3000/api/promociones');
      setPromociones(response.data);
      setLoading(false);
    };

    cargarPromociones();
  },[]);


    return(
        <main className="holder">
        <h2>Promociones:</h2>
        <div className="promociones">

        {
        loading ? (
          <p>Cargando...</p>
        ) : (
          promociones.map(item=> <PromocionItem key={item.IdPromotion} title={item.Titulo} price={item.Precio}
            detail={item.Detalle}/>)
        )}

          {/* <div className="promocion">
            <h2>Servicio Empresa Básico</h2>
            <h4>$ 603,90</h4><h5>por usuario al mes</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
              odit commodi a, tempore itaque exercitationem temporibus aut natus
              vero assumenda incidunt quasi suscipit distinctio minima voluptas
              provident iusto. Reiciendis, at.
            </p>
          </div>
          <div className="promocion">
          <h2>Aplicaciones para negocios</h2>
            <h4>$ 830,40</h4><h5>por usuario al mes</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
              odit commodi a, tempore itaque exercitationem temporibus aut natus
              vero assumenda incidunt quasi suscipit distinctio minima voluptas
              provident iusto. Reiciendis, at.
            </p>
          </div>
          <div className="promocion">
          <h2>Servicio Empresa Estándar</h2>
            <h4>$ 1.258,20</h4><h5>por usuario al mes</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
              odit commodi a, tempore itaque exercitationem temporibus aut natus
              vero assumenda incidunt quasi suscipit distinctio minima voluptas
              provident iusto. Reiciendis, at.
            </p>
          </div>
          <div className="promocion">
          <h2>Servicio Empresa Premium</h2>
            <h4>$ 2.214,40</h4><h5>por usuario al mes</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
              odit commodi a, tempore itaque exercitationem temporibus aut natus
              vero assumenda incidunt quasi suscipit distinctio minima voluptas
              provident iusto. Reiciendis, at.
            </p>
          </div> */}
        </div>
    </main>
    );
};

export default PromocionesPage;