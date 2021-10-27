				/* Canvas con ciclo */
window.onload = function () {
	/* Se selecciona el elemento por medio de css selector */
    $('form').submit(function(e){
        e.preventDefault();			/* Previene la acción de refrescar por defecto del form */
        let valueInput=$('#superInfo').val();	/* Se captura el valor del input */
		/* Se inicia la petición (GET) por defecto del metodo ajax */
        $.ajax({
            url: "https://www.superheroapi.com/api.php/10159157537788480/" + valueInput,
            success:function(data){
				/* Se capturan los valores de interes */
                let nombre=data.name;
				let statName=Object.keys(data.powerstats);	/* Se capturan en un array las claves del objeto powerstats */
				let statValue=Object.values(data.powerstats);	/* Se capturan en un array los valores del objeto powerstats */
				let stats= statName.concat(statValue);	/* Se concatenan ambos arrays en el que se utilizara de referencia para settear el dataPoints */
				let dataStats=[];	/* Array contenedor de los objetos en el formato requerido por canvas */
				/* Se genera un ciclo en donde se integran las 6 propiedades, valores obtenidos del array auxiliar "stats" */ 
				for(i=0;i<6;i++){
					dataStats.push({
						y:stats[i+6],
						label:stats[i]+`(${stats[i+6]})`,
						name:stats[i]
					});
				};
	/* Se configuran las opciones canvas */
    var chart = new CanvasJS.Chart("canvas_personaje",
	{
        animationEnable:true,
		title:{
			text: `Estadísticas de Poder para ${nombre}`
		},
		data: [
		{
			type: "pie",
            indexLabelPlacement: "outside",
			showInLegend: true,
			dataPoints: dataStats
		}
		]
	});
	/* Se renderiza el grafico en el elemento de id=canvas_personaje */
	chart.render();
}
})
});
}