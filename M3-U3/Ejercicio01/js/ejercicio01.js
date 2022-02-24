var distancia;

distancia=prompt('Ingrese la distancia que desee recorrer en Metros:','');
distancia=parseInt(distancia); 

if (distancia>0 && distancia<1000){
    document.write(`<h1> El transporte apropiado es a Pie, debido a que la distancia es de  ${distancia} metros </h1>`);
    console.log(`El transporte apropiado es a Pie, debido a que la distancia es de ${distancia}`);
  }else{
    if (distancia>=1000  && distancia<10000)  {
        document.write(`<h1> El transporte apropiado es en Bicicleta, debido a que la distancia es de  ${distancia} metros </h1>`);
        console.log(`El transporte apropiado es en Bicicleta, debido a que la distancia es de ${distancia}`);
    }else{
        if (distancia>=10000 && distancia<30000)  {
            document.write(`<h1> El transporte apropiado es en Colectivo, debido a que la distancia es de  ${distancia} metros </h1>`);
            console.log(`El transporte apropiado es en Colectivo, debido a que la distancia es de ${distancia}`);
        }else{
            if (distancia>=30000 && distancia<100000)  {
                document.write(`<h1> El transporte apropiado es en Auto, debido a que la distancia es de  ${distancia} metros </h1>`);
                console.log(`El transporte apropiado es en Auto, debido a que la distancia es de ${distancia}`);
            }else{
                document.write(`<h1> El transporte apropiado es en Avion, debido a que la distancia es de  ${distancia} metros </h1>`);
                console.log(`El transporte apropiado es en Avion, debido a que la distancia es de ${distancia}`);
            }
        }
    }
  }

