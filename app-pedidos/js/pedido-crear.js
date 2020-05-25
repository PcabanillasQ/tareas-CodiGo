

const URL_BACKEND = "https://5ec86442155c130016a909c8.mockapi.io";

let formRepartidor = document.getElementById("formRepartidor");
let inpRepartidorNombre = document.getElementById("inpRepartidorNombre");
let inpRepartidorApellido = document.getElementById("inpRepartidorApellido");
let inpRepartidorDni = document.getElementById("inpRepartidorDni");
let tblListaRepartidores = document.getElementById("tblListaRepartidores");

let formCliente = document.getElementById("formCliente");
let inpClienteNombre = document.getElementById("inpClienteNombre");
let inpClienteApellido = document.getElementById("inpClienteApellido");
let inpClienteDni = document.getElementById("inpClienteDni");
let tblListaClientes = document.getElementById("tblListaClientes");

let formProducto = document.getElementById("formProducto");
let inpProductoNombre = document.getElementById("inpProductoNombre");
let inpProductoPrecio = document.getElementById("inpProductoPrecio");
let inpProductoImg = document.getElementById("inpProductoImg");
let tblListaProductos = document.getElementById("tblListaProductos");

let formPedido = document.getElementById("formPedido");
let inputOrigen = document.getElementById("inputOrigen");
let inputDestino = document.getElementById("inputDestino");
let selectRepartidor = document.getElementById("selectRepartidor");
let selectCliente = document.getElementById("selectCliente");
let selectProducto = document.getElementById("selectProducto");

let listaPedidos = document.getElementById("listaPedidos");

/* Efecto Scroll del los Pedidos */
if(listaPedidos){
    ScrollReveal().reveal('.listaPedidos__item:first-child',{delay:0, interval: 80});
    ScrollReveal().reveal('.listaPedidos__item',{delay:500, useDelay: 'onload', reset: true});
}


//TRAER LOS REPARTIDORES
/**
 * Funcion que tare a los repartidores de la base de datos
 * y los dibuja en el select y la tabla
 */

 const getRepartidores = () =>{

    const dibujar = (repartidores) =>{
        repartidores.forEach( rep => {
            if(selectRepartidor){
                let option = document.createElement("option");
                option.innerText=` ${rep.rep_nom} ${rep.rep_ape} `;
                option.value= rep.id;
                // option.setAttribute("value",rep.id);
                selectRepartidor.appendChild(option);
            }

            if(tblListaRepartidores){
                let tr = document.createElement("tr");
                tr.innerHTML= `
                            <th scope="row">${rep.id}</th>
                            <td>${rep.rep_nom}</td>
                            <td>${rep.rep_ape}</td>
                            <td>${rep.rep_dni}</td> 
                            `;
                tblListaRepartidores.appendChild(tr);      
            }
        });
        
    }

     let endpoint = `${URL_BACKEND}/repartidor`;
     fetch(endpoint).then(response => {
         response.json().then(data =>{
            //  console.log(data);
             
             dibujar(data);
         });
     });
 }


//TRAER LOS CLIENTES
/**
 * Funcion que tare a los CLIENTES de la base de datos
 * y los dibuja en el select y la tabla
 */

const getClientes = () =>{

    const dibujar = (clientes) =>{
        // Dibujando clientes
        clientes.forEach( cli => {
            //llenando select
            if(selectCliente){

                let option = document.createElement("option");
                option.innerText=` ${cli.cli_nom} ${cli.cli_ape} `;
                option.value= cli.id;
                // option.setAttribute("value",rep.id);
                selectCliente.appendChild(option);
            }
            if(tblListaClientes){
                let tr = document.createElement("tr");
                tr.innerHTML= `
                        <th scope="row">${cli.id}</th>
                        <td>${cli.cli_nom}</td>
                        <td>${cli.cli_ape}</td>
                        <td>${cli.cli_dni}</td> 
                        `;
                tblListaClientes.appendChild(tr);                 
            }
        });
    }

     let endpoint = `${URL_BACKEND}/cliente`;
     fetch(endpoint).then(response => {
         response.json().then(data =>{
             dibujar(data);
         });
     });
 }

//TRAER LOS PRODUCTOS
/**
 * Funcion que tare a los PRODUCTOS de la base de datos
 * y los dibuja en el select y la tabla
 */

const getProductos = () =>{

    const dibujar = (productos) =>{
        // selectRepartidor.innerHTML="";
        productos.forEach( pro => {            
            if(selectProducto){
                let option = document.createElement("option");
                option.innerText=` ${pro.pro_nom} | S/. ${pro.pro_prec} `;
                option.value= pro.id;
                // option.setAttribute("value",rep.id);
                selectProducto.appendChild(option);
            }
            if(tblListaProductos){
                let tr = document.createElement("tr");
                tr.innerHTML= `
                        <th scope="row">${pro.id}</th>
                        <td>${pro.pro_nom}</td>
                        <td>${pro.pro_prec}</td>
                        <td class="p-0">
                            <div class="img-producto">
                            <img src="${pro.pro_img}" alt="${pro.pro_nom}">
                            </div>
                        </td> 
                        `;
                tblListaProductos.appendChild(tr); 
            }
        });
    }

     let endpoint = `${URL_BACKEND}/producto`;
     fetch(endpoint).then(response => {
         response.json().then(data =>{
            //  console.log(data);             
             dibujar(data);
         });
     });
 }

//TRAER LOS PEDIDOS
/**
 * Funcion que trae los PEDIDOS de la base de datos
 * y los dibuja en la seccion de pedidos
 */

const getPedidos = () => {

    const dibujar = pedidos =>{

        pedidos.forEach( pedido => {
            if(listaPedidos){
                
                let listaPedidosColumna = document.createElement("div");
                listaPedidosColumna.setAttribute('class','listaPedidos__columna');
                
                let listaPedidosItem = document.createElement("div");
                listaPedidosItem.setAttribute('class','listaPedidos__item');
                listaPedidosItem.innerHTML=`
                <div class="card">
                <img src="....." class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title text-success">Pedido N° ${pedido.id} <span class="badge badge-success ml-2">Solicitado</span></h5>
                <div class="card-text text-left">
                <p><span> Cliente: </span>${pedido.id_cli}</p>
                <p><span> Repartidor: </span>${pedido.id_rep}</p>
                <p><span>Partida:</span> ${pedido.ped_ini}</p>
                <p><span>Llegada:</span> ${pedido.ped_fin}</p>
                </div>
                <a href="#" class="btn btn-danger mt-3" ><i class="fas fa-times"></i> Cancelar Pedido</a>
                </div>
                <div class="card-footer bg-success ">
                <select name="" id="" class="form-control">
                <option value="0">Solicitado</option>
                <option value="1">Enviado</option>
                <option value="2">Entregado</option>
                </select>
                </div>
                </div>`;  
                
                // listaPedidosColumna.appendChild(listaPedidosItem);
                // listaPedidos.appendChild(listaPedidosColumna);

                // listaPedidos.appendChild(listaPedidosItem);
            
        }

        } );
        
        
    }

    let endpoint = `${URL_BACKEND}/pedido`;
    fetch(endpoint)
        .then( response => {  
            response.json()
                .then( data => {
                    dibujar(data);
                } )
                .catch( err => {alert(err);
                });
        })
        .catch( err => {alert(err);
    } );
}


if(formPedido){    
    formPedido.onsubmit = e => {
        e.preventDefault();
   
        let fecha = new Date().getDate() + '/' + (new Date().getMonth() + 1) + '/' + new Date().getFullYear();
   
        let objPedido={
            id_pro: selectProducto.value,
            id_rep: selectRepartidor.value,
            id_cli: selectCliente.value,
            ped_ini: inputOrigen.value,
            ped_fin: inputDestino.value,
            ped_est: 'Solicitado',
            ped_fecha: fecha
        }
       fetch(`${URL_BACKEND}/pedido`,{
           method: 'POST',
           body: JSON.stringify(objPedido),
           headers:{
               "Content-type": "application/json"
           }
       }).then(response=>{
           response.json().then(data =>{
               location.reload();       
           });
       }); 
    }
}

if(formCliente){
    formCliente.onsubmit = e => {
       e.preventDefault();
       let objCliente={
           cli_nom: inpClienteNombre.value,
           cli_ape: inpClienteApellido.value,
           cli_dni: inpClienteDni.value
       }
       fetch(`${URL_BACKEND}/cliente`,{
           method: 'POST',
           body: JSON.stringify(objCliente),
           headers:{
               'Content-type': 'application/json'
           }
       })
       .then( response =>{
           response.json()
            .then( data =>{
                location.reload();
            })
            .catch(err =>{ alert(err); });
       })
       .catch(err =>{  alert(err) });
    }
}

if(formProducto){
    formProducto.onsubmit = e =>{
        e.preventDefault();
        let objProducto={
            pro_nom: inpProductoNombre.value,
            pro_prec: inpProductoPrecio.value,
            pro_img: inpProductoImg.value
        }
        fetch(`${URL_BACKEND}/producto`,{
            method: 'POST',
            body: JSON.stringify(objProducto),
            headers:{
                'Content-type': 'application/json'
            }
        })
        .then(response =>{
            response.json()
                .then(data => {
                    location.reload();
                });
        }).catch(err=>{ alert(err); });
    }
    
}

if(formRepartidor){
    formRepartidor.onsubmit= e =>{
        e.preventDefault();
        let objRepartidor={
            rep_nom: inpRepartidorNombre.value,
            rep_ape: inpRepartidorApellido.value,
            rep_dni: inpRepartidorDni.value
        }
        fetch( `${URL_BACKEND}/repartidor`,{
            method:'POST',
            body: JSON.stringify(objRepartidor),
            headers:{
                'Content-type': 'application/json'
            }
        }).then( response =>{
            response.json()
                .then( data =>{
                    location.reload();
                } ).catch( err=>{alert(err);} );
        }).catch( err => { alert(err); } );
    }
}


getPedidos();
 getProductos();
 getClientes();
 getRepartidores();