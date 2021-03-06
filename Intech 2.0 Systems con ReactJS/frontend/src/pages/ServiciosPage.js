import '../styles/components/pages/ServiciosPage.css';

const ServiciosPage =(props)=>{
    return(
        <main className="holder">
        <h2>Servicios:</h2>
        <div className="servicio">
            <img src="images/servicios/paginas_web.jpg" alt="Paginas Webs"/>
            <div className="info">
                <h4>Desarrollo de Paginas Webs</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam praesentium non numquam dolor
                    accusamus
                    qui laborum atque, cum, pariatur sit quis dolores nam odio ratione nesciunt aliquam nemo delectus
                    expedita.</p>
            </div>
        </div>
        <div className="servicio">
            <img src="images/servicios/sistemas_web.jpg" alt="Sistemas Webs"/>
            <div className="info">
                <h4>Sistemas de Webs</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam praesentium non numquam dolor
                    accusamus
                    qui laborum atque, cum, pariatur sit quis dolores nam odio ratione nesciunt aliquam nemo delectus
                    expedita.</p>
            </div>
        </div>
        <div className="servicio">
            <img src="images/servicios/aplicaciones_moviles.jpg" alt="Apps"/>
            <div className="info">
                <h4>Desarrollo de Aplicaciones Moviles</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam praesentium non numquam dolor
                    accusamus
                    qui laborum atque, cum, pariatur sit quis dolores nam odio ratione nesciunt aliquam nemo delectus
                    expedita.</p>
            </div>
        </div>
    </main>
    );
};

export default ServiciosPage;