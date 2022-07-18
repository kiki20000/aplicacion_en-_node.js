const axios = require('axios');

class Busquedas{

    historial = ['Barcelona', 'Alicante'];

    constructor(){
        //Leer db si existe
    }

    get paramsMapbox(){
        return {
            'access_token': 'pk.eyJ1IjoidmljZW50ZWNhbmRlbGEiLCJhIjoiY2w1bWU3MTZ3MHQ0ZzNkbzFqYjdqdGtrcSJ9.ZC4yvabiw7R9xdV0zX4-tQ',
            'language': 'es',
            'limit': 5
        }
    }

    get parametrosClima(){
        return{
            'appid': '46e9359c16191f1a8da48833530dc761',
            'language': 'es',
            'units': 'metric'
        }
    }


    async ciudad(lugar = ''){
        
        try{
            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
                params: this.paramsMapbox
            });

            const resp = await instance.get();

            return resp.data.features.map( lugar => ({
                id: lugar.id,
                nombre: lugar.place_name,
                lng: lugar.center[0],
                lat: lugar.center[1]
            }))


        }catch( err){

        }

        return[];
    }


    async climaLugar(lat, lng){

        try{

            const instancia = axios.create({
                baseURL: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}`,
                params: this.parametrosClima
            });

            const respuesta = await instancia.get();

            const {weather, main} = respuesta.data; // aqui hacemos una desestructuracion -> esto nos devuelve un array y nosotros solo queremos el weather y la data

            return {
                desc: weather[0].description,
                min: main.temp_min,
                max: main.temp_max,
                temp: main.temp
            }  

        }catch(err){
            console.log(err);
        }
    }

   /* agregarHistorial(){
        //Prevenir duplicados
        this.historial.unshift(lugar);

        //Grabar en DB

    }*/

}


module.exports = Busquedas;







