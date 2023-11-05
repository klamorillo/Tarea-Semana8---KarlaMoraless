/*Ejercicio 1 */
function comprobarEdad(){
   let edad= document.getElementById("txtEdad").value;
   var condicion="";
    if(edad>=18){
    condicion= "¡Ya puede conducir!";
    }else{
        condicion= "¡No puede conducir, eres menor de edad!"
    }
    document.getElementById("pEdad").innerHTML=condicion;
}
/*Ejercicio 2 */
function comprobarCalificacion() {
    let nota = document.getElementById("txtNumero").value; 
    var condicion = "";
    if (nota >= 0 && nota < 3) {
        condicion = "Muy deficiente";
    } else if (nota >= 3 && nota < 5) {
        condicion = "Insuficiente";
    } else if (nota >= 5 && nota < 6) {
        condicion = "Suficiente";
    } else if (nota >= 6 && nota <7) {
        condicion = "Bien";
    } else if (nota >= 7 && nota < 9) {
        condicion = "Notable";
    } else if (nota >= 9 && nota <= 10) {
        condicion = "Sobresaliente";
    } else {
        condicion = "Nota fuera de rango";
    }
    document.getElementById("pCalificacion").innerHTML = condicion;
}

/** Ejercicio 3 */
let cadena="";
let cadenas=[];
let resultado= "";

function cadenaPalabras(){
cadena= document.getElementById("txtTexto").value;
cadenas.push(cadena);
 resultado= cadenas.join(" - ");
 document.getElementById("txtTexto").value="";/*Borrar la caja de texto*/
}

function cancelar(){
document.getElementById("pCadena").innerHTML= resultado;
cadenas.splice(0, cadenas.length); // Elimina todos los elementos del array
}

/**Ejercicio 4 */
let numeros=[];
let numero= 0;

function agregarNumeros() {
   let numero = parseInt(document.getElementById("txtNumeroSuma").value);
    if (isNaN(numero)) {
            alert("¡La entrada es una letra, no se permite!.");        
    }else{  
            numeros.push(Number(numero));
            document.getElementById("txtNumeroSuma").value = "";
    }    
}

function sumaNumeros(){
   let sumaTotal=0;
    numeros.forEach(function(numerop){
        sumaTotal+= numerop;
    });
    document.getElementById("pSumaTotal").innerHTML= "La suma total de números es de= " + sumaTotal;

}
/**Ejercicio 5 */
let numeroCedula=0;

function cedulaIdentidad(){
numeroCedula= parseInt(document.getElementById("txtNumeroCedula"));
   if(numeroCedula===null){
      return;
   }
if (isNaN(numeroCedula) || numeroCedula < 0 || numeroCedula > 99999999) {
    alert("Número de cédula no válido. Por favor, ingrese numeros enteros válido.");
 }
}

function valorCedula(){
    let residuo = numeroCedula % 23;
    let letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    let letra = letras.charAt(residuo);
    document.getElementById("pValorCedula").innerHTML= "El valor de cedula en letras es: " + letra;
}

/**Ejercicio 6 */
function crearTabla(){
    let filas= parseInt(document.getElementById("txtFila").value);
    let columnas= parseInt(document.getElementById("txtColumna").value);

    if (isNaN(filas) || isNaN(columnas)) {
        alert("Ingrese números válidos para filas y columnas.");
        return;
    }
     // el número total de celdas
     let numeroTotal = filas * columnas;

     // Obtengo el elemento donde se mostrará la tabla
     let tablaContainer = document.getElementById("tabla-container");
 
     // Crear la tabla y llenar las celdas con números en orden descendente
     let numero = numeroTotal;
     let htmlTabla = "<table>";
 
     for (let i = 0; i < filas; i++) {
         htmlTabla += "<tr>";
         for (let j = 0; j < columnas; j++) {
             htmlTabla += "<td>" + numero + "</td>";
             numero--;
         }
         htmlTabla += "</tr>";
     }
 
     htmlTabla += "</table>";
 
     // Insertar la tabla en el elemento "tabla-container"
     tablaContainer.innerHTML = htmlTabla;
}

/**Ejercicio 7 */
function costoTotal(precio, aplicaIVA) {
    const resultadoElement = document.getElementById("resultado");

    if (isNaN(precio) || aplicaIVA === undefined) {
        resultadoElement.textContent = "Por favor, complete los dos campos.";
        return;
    }

    const iva = aplicaIVA ? 0.13 : 0; // 13% de IVA si aplica, 0% si no

    const precioConIVA = precio + (precio * iva);
    resultadoElement.textContent = "El costo total es: " + precioConIVA.toFixed(2);
}

