let fondo = document.querySelector('.contenedor');
let body = document.querySelector('.fondo');
let rojo = document.getElementById('rojo');
let azul = document.getElementById('azul');
let verde = document.getElementById('verde');

// function cambiaColor(color){
//     if(color='rojo'){
//         console.log(color);
//         fondo.style = 'background: red;';
//     }else if (color='azul'){
//         console.log(color);
//         fondo.style = 'background: blue;';
//     }else if (color='verde'){
//         console.log(color);
//         fondo.style = 'background: green;';
//     }
//    }

function cambiaColorRojo(){
    if(rojo.id=='rojo'){
        fondo.style = 'background: red;';
        body.style='background: blue;';
        console.log(rojo);
    }
}

function cambiaColorAzul(){
    if(azul.id=='azul'){
        fondo.style = 'background: blue;';
        body.style='background: green;';
        console.log(azul);
    }
}

function cambiaColorVerde(){
    if(verde.id=='verde'){
        fondo.style = 'background: green;';
        body.style='background: red;';
        console.log(verde);
    }
}