// Realice y represente mediante diagrama de flujo y pseudocódigo un
// algoritmo que lea los nombres y las edades de diez alumnos, y que los
// datos se almacenen en dos vectores, y con base en esto se determine
// el nombre del alumno con la edad mayor del arreglo.

// debugger;
let alumnos=[];
let edades=[];
i=0;
let mayor=0;
let index=0;
while(i<3){
    
    let nombre = prompt("Ingrese su Nombre");
    alumnos.push(nombre);

    let edad = +prompt("Ingrese su Edad");
    edades.push(edad);

    if(edad > mayor){
        mayor = edad;
        index=i;        
    }
    i++;
}

console.log(`El alumno mayor es ${alumnos[index]} y su edad es ${edades[index]}`);


