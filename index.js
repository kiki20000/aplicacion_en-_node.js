require('colors');

const { Menu } = require('./helpers/mensajes.js');

const main = async() => {

    let opt = '';

    do{

        opt = await Menu();

    }while(opt != '7');

    

}

main();