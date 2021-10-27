$(document).ready(function(){
    /* Se captura el click para generar el cambio de imagen, entre img inicial y la información desplegada */
    $("#btn").click(function(){
        $("#img_logo")
        .attr("class", "d-none");
        $("#personaje_encontrado")
        .removeClass("d-none");
    });
    /* Se captura el evento submit para generar la peticion a la api SuperHeroe */
    $('form').submit(function(e){
        e.preventDefault();
        let valueInput=$('#superInfo').val();
        /* Se inicia la petición (GET) por defecto del metodo ajax */
        $.ajax({
            url: "https://www.superheroapi.com/api.php/10159157537788480/" + valueInput,
            success:function(data){
                /* Se capturan los datos disponibles en la API y se guardan en variables con nombres auto-explicativas */
                let imagen=data.image.url;
                let nombre=data.name;
                let conexiones=data.connections['group-affiliation'];
                let publicador=data.biography.publisher;
                let ocupacion=data.work.occupation;
                let aparicion=data.biography['first-appearance'];
                let altura=data.appearance.height;
                let peso=data.appearance.weight;
                let alianzas=data.biography.aliases;
                /* Se pinta la imagen capturada, en el elemento HTML de id=img_personaje */
                $('#img_personaje').html(`
                    <img class="img-fluid" src="${imagen}">
                `);
                /* Se pinta la información capturada, en el elemento HTML de id=info_personaje */
                $('#info_personaje').html(`
                    <h5 class="card-title">Nombre: ${nombre}</h5>
                    <p class="card-text">Conexiones: ${conexiones}</p>
                    <div class="m-2">
                        <p class="card-text"><i>Publicado por :</i> ${publicador}</p>
                        <hr size="2px">
                        <p class="card-text"><i>Ocupación:</i> ${ocupacion}</p>
                        <hr size="2px">
                        <p class="card-text"><i>Primera aparición :</i> ${aparicion}</p>
                        <hr size="2px">
                        <p class="card-text"><i>Altura :</i> ${altura.join(" - ")}</p>
                        <hr size="2px">
                        <p class="card-text"><i>Peso :</i> ${peso.join(" - ")}</p>
                        <hr size="2px">
                        <p class="card-text"><i>Alianzas :</i> ${alianzas.join()}</p>
                    </div>
                `)
            }
        })
    });
    
})
