import React, {useState} from 'react';
import axios from 'axios';

import '../styles/components/pages/ContactoPage.css';

const ContactosPage = (props) => {

  const initialForm={
    nombre:'',
    email:'',
    telefono:'',
    mensaje:''
  }

  const [sending, setSendig]=useState(false);
  const [msg, setMsg]=useState('');
  const [formData, setFormData]=useState(initialForm);

  const handleChange = e =>{
    const {name, value}=e.target;
    setFormData(oldData=>({
      ...oldData,
      [name]: value
    }));
  }

  const handleSubmit = async e =>{
    e.preventDefault();
    setMsg('');
    setSendig(true)
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/contactos`, formData);
    setSendig(false);
    setMsg(response.data.message);
    if(response.data.error===false){
      setFormData(initialForm);
    }
  }


  return (
    <main className="holder">
      <div className="columna left">
        <h2>Contacto Rapido:</h2>
        <form action="/contactos" method="post" className="form" onSubmit={handleSubmit}>
          <p>
            <input id="nombre" type="text" placeholder="Nombre" name="nombre" value={formData.nombre} onChange={handleChange}/>
          </p>
          <p>
            <input id="email" type="text" placeholder="Email" name="email" value={formData.email} onChange={handleChange} />
          </p>
          <p>
            <input id="telefono" type="text" placeholder="Teléfono" name="telefono" value={formData.telefono} onChange={handleChange}/>
          </p>
          <p>
            <textarea id="mensaje" placeholder="Mensaje" name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
          </p>
          {sending ? <p>Enviando...</p>:null}
          {msg ? <p>{msg}</p>:null}
          <p>
            <button className="acciones" id="btnEnviar" type="submit">
              Enviar
            </button>
          </p>
        </form>
      </div>

      <div className="columna right">
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
