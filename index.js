const { leerInput, pausa, inquirerMenu, listarLugares } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");


const main = async() => {

    let opt = 1;

    const busquedas = new Busquedas();

    do{

        opt = await inquirerMenu();

        switch(opt){
            
            case 1:
                //Mostrar mensaje
                const lugar = await leerInput('Ciudad: ');
               
                //Buscar los lugares
                const lugares = await busquedas.ciudad(lugar);
                const idSeleccion = await listarLugares(lugares);

                //if(idSeleccion == '0') continue;

                //Seleccionar el lugar 
                const lugarSeleccionado = lugares.find( l => l.id == idSeleccion);

                //Guardar en DB
                //busquedas.agregarHistorial(lugarSeleccionado.nombre);
                busquedas.agregarHistorial(lugarSeleccionado.nombre);

                //Clima
                const clima = await busquedas.climaLugar(lugarSeleccionado.lat , lugarSeleccionado.lng);

                //Mostrar resultados
                console.log('\nInformacion de la ciudad\n');
                console.log('Ciudad: ', lugarSeleccionado.nombre);
                console.log('Lat: ', lugarSeleccionado.lat);
                console.log('Lng:', lugarSeleccionado.lng);
                console.log('Temperatura: ', clima.temp);
                console.log('Minima: ', clima.min);
                console.log('Maxima: ', clima.max);
                console.log('Descripcion: ', clima.desc);

            break;

            case 2:

                busquedas.historial.forEach((lugar,i) => {
                    const id = `${i + 1}`;
                    console.log(`${id} ${lugar}`);
                });


            break;

        }

        await pausa();

    }while(opt != 0);
    
    
    

}


main();




