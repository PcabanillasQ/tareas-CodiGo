const dibujarPeliculas = ({results}) =>{
    // console.log(results);
    let url_baseImg="https://image.tmdb.org/t/p/w500";
    results.forEach( peli => {
        let card = $(` <div class="card">  </div>`);
        let carouselCell= $(`<div class="carousel-cell ml-1"> </div>`);
        let imagen= $(`<div class="img-pelis card-img-top">
                       <!-- <img src="${url_baseImg}${peli.poster_path}" class="card-img-top" alt="..."> -->
                    </div>`);
            imagen.css('background', `radial-gradient(circle 850px at 100% 100%, transparent 35%, #dc3545 58%),
                    url("${url_baseImg}${peli.poster_path}") no-repeat center center / contain`);
        
        let cardBody= $(` <div class="card-body"> </div> `);
        let cardTitle= $(`<h5 class="card-title text-danger">${peli.title}</h5>`);
        let cardText= $(` <p class="card-text"></p>  `);
        let spanTexto = $(`<span>${peli.overview.substr(0,50)}</span>`);
        let leerMas = $(`<span class="text-info" role="button">... Leer Mas</span>`);
        
        cardText.append(spanTexto);
    cardText.append(leerMas);

        leerMas.click( ()=>{
            let flick = $('.main-carousel').flickity({
                // options
                cellAlign: 'left',
                 contain: true,
                autoPlay: true                
              });

            let leerMasTexto = leerMas.text();
            if(leerMasTexto.indexOf("Mas") > -1){
                spanTexto.text(peli.overview);                
                leerMas.text(" Leer Menos");
                flick.flickity('resize');
            }else{
                spanTexto.text(peli.overview.substr(0,50));
                leerMas.text("... Leer Mas");
                flick.flickity('resize');
            }
        });
        
        cardBody.append(cardTitle);
        cardBody.append(cardText);
        card.append(imagen);
        card.append(cardBody);
        carouselCell.append(card);
        $('#container-pelis').append(carouselCell);        
    });
   //ocultabdo alerte
   $("#alertCargando").attr("hidden","hidden");
   $("#container-pelis").removeAttr("hidden");


    $('.main-carousel').flickity({
        // options
        cellAlign: 'left',
        contain: true,
        autoPlay: true       
      });    
}

const traerPeliculas= () => {

    let endpoint = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&language=es&api_key=8d94f287bab118170a276a8fdd798ad1';
    fetch(endpoint, {method:'GET',body: null} )
        .then( response => {
            response.json()
                .then( data =>{ 
                
                    dibujarPeliculas(data);
                 });
        });        
}

traerPeliculas();


