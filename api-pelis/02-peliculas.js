const dibujarPeliculas = ({results}) =>{
    console.log(results);
    let url_baseImg="https://image.tmdb.org/t/p/w500";
    results.forEach( peli => {
        let carruselItem = ` 
            <div class="carousel-cell ml-1">
                <div class="card" style="width: 18rem;">
                    <div class="img-pelis card-img-top">
                      <!--  <img src="${url_baseImg}${peli.backdrop_path}" class="card-img-top" alt="...">  -->
                    </div>
                    <div class="card-body">
                    <h5 class="card-title text-danger">${peli.original_title}</h5>
                    <p class="card-text">${peli.overview}</p>
                    <a href="#" class="btn btn-link ">Ver más...</a>
                    </div>
                </div>
            </div>`;
        
            $(".img-pelis").css('background','radial-gradient(circle 20px at 100% 100%, transparent 50%, #dc3545 50%, url(${url_baseImg}${peli.backdrop_path} no-repeat center right / auto 20px) )');
        $('#container-pelis').append(carruselItem);
    });
    $('.main-carousel').flickity({
        // options
        cellAlign: 'left',
        contain: true,
        autoPlay: true 
      });
    
}

const traerPeliculas= () => {
    let endpoint = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=8d94f287bab118170a276a8fdd798ad1';
    fetch(endpoint, {method:'GET',body: null} )
        .then( response => {
            response.json()
                .then( data =>{ dibujarPeliculas(data); });
        });        
}

traerPeliculas();
console.log("adios");

