M.AutoInit();
// $(".dropdown-trigger").dropdown();
// $( document ).ready(()=>{
// });

const mostrarTextoColores = (elemento) => {
  let color = elemento.getAttribute('data-badge-caption');
  let colorFondo=document.getElementById("muestra-colores");
  let colorFondoTonos=document.getElementById("badge-colores-tonos");
  let colorTexto=document.getElementById("texto-colores");
  let textoBlancoNegro="";

  if(color==="blue-grey" || color==="brown" || color==="indigo" || color==="deep-purple" || color==="purple" || color==="pink" || color==="red" || color==="deep-orange" ){
    textoBlancoNegro="white"
  }else{
    textoBlancoNegro="black"
  }

  colorFondo.setAttribute('class',`card-panel ${color}`);
  colorFondo.innerHTML=`
    <p class="${textoBlancoNegro}-text">
      Para este color de <strong>FONDO</strong> a un elemento agrega la clase: <strong>${color}</strong> 
      y para la tonalidad de las etiquetas superiores agrega los nombres de las clases indicadas 
    </p>    
    <h6 class="white pl-3 py-1">
      <strong>
      Ejemplo: &lt;div class="${color} darken-3">Contenido&lt;/div>
      </strong>
    </h6>`;
  colorTexto.setAttribute('class',`card-panel ${color}-text`);
  colorTexto.innerHTML=`para colocar este color del <strong>TEXTO</strong> a un elemento agrega la clase: <strong>${color}-text</strong>`;
  
  let tonos=`
            <li><span class="new badge ${color} lighten-5 black-text text-darken-4" data-badge-caption="lighten-5"></span></li>
            <li><span class="new badge ${color} lighten-4 black-text text-darken-4" data-badge-caption="lighten-4"></span></li>
            <li><span class="new badge ${color} lighten-3" data-badge-caption="lighten-3"></span></li>
            <li><span class="new badge ${color} lighten-2" data-badge-caption="lighten-2"></span></li>
            <li><span class="new badge ${color} lighten-1" data-badge-caption="lighten-1"></span></li>
            <li><span class="new badge ${color} darken-1" data-badge-caption="darken-1"></span></li>
            <li><span class="new badge ${color} darken-2" data-badge-caption="darken-2"></span></li>
            <li><span class="new badge ${color} darken-3" data-badge-caption="darken-3"></span></li>
            <li><span class="new badge ${color} darken-4" data-badge-caption="darken-4"></span></li>
            <li><span class="new badge ${color} accent-1 black-text text-darken-4" data-badge-caption="accent-1"></span></li>     
            <li><span class="new badge ${color} accent-2 black-text text-darken-4" data-badge-caption="accent-2"></span></li>     
            <li><span class="new badge ${color} accent-3" data-badge-caption="accent-3"></span></li>     
            <li><span class="new badge ${color} accent-4" data-badge-caption="accent-4"></span></li>     
  `;
  colorFondoTonos.innerHTML=tonos;  
}

const mostrarCodigoBoton = (el)=>{
  
  let muestraCodigo = document.getElementById("codigo-botones");
  let AtId, AtClass ="";

  el.getAttribute('id')===null? AtId= "" : AtId= el.getAttribute("id");
  el.getAttribute('class')===null? AtClass= "" : AtClass= el.getAttribute("class");
 

  muestraCodigo.innerHTML=`<h6 class="deep-purple-text">
    <strong> &#60button id="${AtId}" class="${AtClass}"> Texto del boton &#60/button> </strong>
  </h6>`;
  
}

document.getElementById("badge-colores").onclick = el => mostrarTextoColores(el.target);  
document.getElementById("listaBotones").onclick = el => mostrarCodigoBoton(el.target);  
document.getElementById("boton-fijo").onclick = el => mostrarCodigoBoton(el.target);  
// document.getElementById("boton-fijo").onclick = el => mostrarCodigoBoton(el.target);  
 


let toogleimgCicle=document.getElementById("cambiarImagenCircular");
toogleimgCicle.checked=true;
document.getElementById("cambiarImagenCircular").onclick= () => {
  if(toogleimgCicle.checked){
    document.getElementById("imagenCircular").classList.add('circle')
    }else{
    document.getElementById("imagenCircular").classList.remove('circle')
  }
}


