import React,{useState,useEffect} from 'react';
import NoticiaItem from '../components/noticias/NoticiaItem';
import "../styles/components/pages/NoticiasPage.css";

const NoticiasPage = (props) => {

    const [loading, setLoading]=useState(false);
    const [noticias, setNoticias] = useState([]);
  
    useEffect(()=>{
      const cargarNoticias = async()=>{
        setLoading(true);
        const response = await fetch(`${process.env.REACT_NOTICE_API_URL}`);
        const noticiasJson = await response.json()
        //console.log(noticiasJson.data);
        setNoticias(noticiasJson.data);
        setLoading(false);
      };
  
      cargarNoticias();
    },[]);


  return (
    <main className="holder">
      <header className="header">
        <h1>Noticias:</h1>
      </header>

      <main className="main columns">
        <section className="column main-column">
          
        {
        loading ? (
          <p>Cargando...</p>
        ) : (
            noticias && noticias.map(item=> (<NoticiaItem key={item.title} author={item.author} title={item.title}
                description={item.description} url={item.url} source={item.source} image={item.image} category={item.category} 
                language={item.language} country={item.country} published_at={item.published_at}/>))
        )}

        </section>
      </main>
    </main>
  );
};

export default NoticiasPage;
