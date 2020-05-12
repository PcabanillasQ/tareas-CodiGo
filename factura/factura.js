let inputs = document.querySelectorAll("#datosGenerales input");

/*  EVENTOS */

inpPreUnit.onkeyup = calculaPrecioTotalForm;
inpPreUnit.onchange = calculaPrecioTotalForm;
inpCantidad.onkeyup = calculaPrecioTotalForm;
inpCantidad.onchange = calculaPrecioTotalForm;

inputs.forEach(inp =>{
  inp.onkeyup = e =>{    
    if(e.keyCode === 13){        
      agregaArticulo();       
    }
  }
});

saveArticulo.onclick = agregaArticulo;
saveFactura.onclick = mandarFactura;