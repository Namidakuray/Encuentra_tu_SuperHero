				/* Canvas sin ciclo */
window.onload = function () {
    $('form').submit(function(e){
        e.preventDefault();
        let valueInput=$('#superInfo').val();
        $.ajax({
            url: "https://www.superheroapi.com/api.php/10159157537788480/" + valueInput,
            success:function(data){
                let nombre=data.name;
                let inteligencia=data.powerstats.intelligence;
                let fuerza=data.powerstats.strength;
                let velocidad=data.powerstats.speed;
                let dureza=data.powerstats.durability;
                let poder=data.powerstats.power;
                let combate=data.powerstats.combat;

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
			dataPoints: [
				{ y: `${inteligencia}`, label: `Inteligencia(${inteligencia})`, name:"INT"},
				{ y: `${fuerza}`, label: `Fuerza(${fuerza})`, name:"STR"},
				{ y: `${velocidad}`, label: `velocidad(${velocidad})`, name:"SPD"},
				{ y: `${dureza}`, label: `dureza(${dureza})`, name:"DRB"},
				{ y: `${poder}`, label: `poder(${poder})`, name:"PWR"},
				{ y: `${combate}`, label: `combate(${combate})`, name:"COM"},
			]
		}
		]
	});
	chart.render();
}
})
});
}