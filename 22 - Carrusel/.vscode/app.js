window.addEventListener('load',function(){
    new Glider(document.querySelector('.carousel_lista'), {
    //aqui se coloca que tipo de carrusel queremos (en la pagina se ven) 
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dots: '.carousel_indicadores', //ahi se coloca la clase para indicadores que esta en html
    arrows: {
        prev: '.carousel_anterior',  //la clase de los botones de siguiente
        next: '.carousel_siguiente'
    },  
    //la libreria esta programada para que sea mobile first, 
    //asi que a las medidas mobile se le ponen arriba y las otras abajo
    responsive: [
        {
            // screens greater than >= 775px
            breakpoint: 450,
            settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: 2,
            slidesToScroll: 2,
            
            }
        },{
            // screens greater than >= 1024px
            breakpoint: 800,
            settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
            
            }
        }
        ]
    });
        
});
 