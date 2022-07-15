require('colors');

const { Menu } = require('./helpers/mensajes.js');
const { inquirerMenu } = require('./helpers/inquirer.js');

const main = async() => {

    let opt = '';

    do{

        opt = await inquirerMenu();

    }while(opt != '7');

    

}

main();