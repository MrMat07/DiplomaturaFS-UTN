// Declaro la array de Alumnos
let alumnos = [
    {
        nombre: 'Juan Gomez',
        nota: 7
    }, {
        nombre: 'Pedro Rodriguez',
        nota: 4
    }, {
        nombre: 'Roxana García',
        nota: 8
    }, {
        nombre: 'Luciano Lopez',
        nota: 5
    }, {
        nombre: 'Fernanda Gimenez',
        nota: 6
    }, {
        nombre: 'Florencia Martinez',
        nota: 10
    }, {
        nombre: 'Raul Sanchez',
        nota: 7
    }, {
        nombre: 'Sandra Figueroa',
        nota: 8
    }
];


// Armo el listado de alumnos que estan dentro de la array mediante un For
document.write('<h2>Listado de Alumnos con las Notas del Examen:</h2>');
console.log('Listado de Alumnos con las Notas del Examen:')
for (i = 0; i < alumnos.length; i++) {
    document.write(`<h3> Alumno: ${alumnos[i].nombre}, Nota: ${alumnos[i].nota} </h3>`);
    console.log(`Alumno: ${alumnos[i].nombre}, Nota: ${alumnos[i].nota}`);
}

document.write('<h2>Listado de Alumnos Aprobados:</h2>');
console.log('Listado de Alumnos Aprobados:')
// Determino los Alumnos Aprobados con Filter
let aprobados = alumnos.filter(aprobados => aprobados.nota >= 7)

// Recorro con un For los aprobados para mostrar el listado de alumnos con sus notas
for (x = 0; x < aprobados.length; x++) {
    document.write(`<h3> Alumno: ${aprobados[x].nombre}, Nota: ${aprobados[x].nota} </h3>`);
    console.log(`Alumno: ${aprobados[x].nombre}, Nota: ${aprobados[x].nota}`);
}

document.write('<h2>Listado de Alumnos Desaprobados:</h2>');
console.log('Listado de Alumnos Desaprobados:')
// Determino los Alumnos Desaprobados con Filter
let desaprobados = alumnos.filter(desaprobados => desaprobados.nota < 7)

// Recorro con un For los desaprobados para mostrar el listado de alumnos con sus notas
for (y = 0; y < desaprobados.length; y++) {
    document.write(`<h3> Alumno: ${desaprobados[y].nombre}, Nota: ${desaprobados[y].nota} </h3>`);
    console.log(`Alumno: ${desaprobados[y].nombre}, Nota: ${desaprobados[y].nota}`);
}