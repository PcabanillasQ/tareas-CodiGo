let frmDatosGenerales = document.getElementById("datosGenerales");
let msgAlert = document.getElementById("msgAlert");
let inpNombre = document.getElementById("inpNombre");
let inpfecha = document.getElementById("inpfecha");
let inpRuc = document.getElementById("inpRuc");
let inpNro = document.getElementById("inpNro");
let inpCantidad = document.getElementById("inpCantidad");
let inpDesArticulo = document.getElementById("inpDesArticulo");
let inpPreUnit = document.getElementById("inpPreUnit");
let inpPreTotal = document.getElementById("inpPreTotal");
let tblDetalleArticulos = document.getElementById("tblDetalleArticulos");
let saveArticulo = document.getElementById("saveArticulo");
let saveFactura = document.getElementById("saveFactura");

let inpSubtot = document.getElementById("inpSubtot");
let inpTot = document.getElementById("inpTot");


let facturas=[];
let detalleArticulos=[];

const calculaPrecioTotalForm = () => {
    let ArtPrecioTotal = inpPreUnit.value * inpCantidad.value;
    inpPreTotal.value = ArtPrecioTotal;    
  };

  const validarForm = () =>{
    /* VALIDACION DE BOOTSTRAP */
    var forms = document.getElementsByClassName("needs-validation");
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function (form) {
    form.addEventListener("submit",
        function (event) {
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        form.classList.add("was-validated");
        },false);
    });
  }

//   const mostrarAlerta(mensaje){
//       set
//     msgAlert.innerText=mensaje;
//     msgAlert.classList.remove("d-none");
//   }
  
const agregaArticulo = (e) => {
    validarForm();
    
    let articulo={
            cantidad: inpCantidad.value,
            descripcion: inpDesArticulo.value,
            precioUni: inpPreUnit.value,
            precioTotal: inpCantidad.value*inpPreUnit.value
        }

    let tr = ` 
        <tr>
            <th scope="row">${articulo.cantidad}</th>
            <td>${articulo.descripcion}</td>
            <td>${articulo.precioUni}</td>
            <td class="font-weight-bold">${articulo.precioTotal}</td>
            <td><a href="#" class="btn btn-outline-danger btn-sm"><i class="fas fa-trash-alt"></i></a></td>
        </tr>`;
    if (inpCantidad.value === "" || inpDesArticulo.value === "" || inpPreUnit.value === "" ) {
        msgAlert.innerText="Por Favor Completa los campos para guardar un item";
        msgAlert.classList.remove("d-none");
    } else {
        msgAlert.classList.add("d-none");
        tblDetalleArticulos.innerHTML += tr;
    }
    detalleArticulos.push(articulo);
    detalleArticulosString = JSON.stringify(detalleArticulos);
    localStorage.setItem("detalle Articulos",detalleArticulosString);
    actualizaTotales();
    limpiarInputsAticulos();
    inpCantidad.focus();
};

const actualizaTotales = () =>{
    let subTot=0;
    detalleArticulos.forEach( fact => {
        subTot += fact.precioTotal;
    });
    inpSubtot.value=subTot;
    inpTot.value=subTot*1.18;    
}

const limpiarTotales = () =>{
    inpSubtot.value=0.00;
    inpTot.value=0.00;
}

const limpiarInputsAticulos = () => {
    inpCantidad.value = "";
    inpDesArticulo.value = "";
    inpPreUnit.value = "";
    inpPreTotal.value = "";
};
const limpiarInputsFactura = () => {
    inpNombre.value = "";
    inpfecha.value = "";
    inpRuc.value = "";
    inpNro.value = "";
};

const limpiartablas = () =>{
    tblDetalleArticulos.innerText= "";
}

const mandarFactura = () =>{
    let factura = {
        nombres: inpNombre.value,
        fecha: inpfecha.value,
        ruc: inpRuc.value,
        nroFact: inpNro.value,
        articulos:detalleArticulos
    };
    facturas.push(factura);
    facturasString=JSON.stringify(facturas);
    localStorage.setItem("facturas",facturasString);
    limpiarInputsFactura();
    limpiartablas();
    limpiarTotales();
    frmDatosGenerales.classList.remove("was-validated");
    localStorage.removeItem("detalle Articulos");
}
