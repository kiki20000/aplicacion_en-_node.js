var inquirer = require('inquirer');
require('colors');

const opciones = [
    {
        type: 'list',
        name: 'opcion',
        message: 'Opciones a elegir',
        choices: ['opt1', 'opt2'] 
    }
];



const inquirerMenu = async () => {

    console.log("-------------------".red);
    console.log(" Seleccione una opcion ".yellow);
    console.log("-------------------\n".red);



    const opt = await inquirer.prompt(opciones);

    return opt;
}


module.exports = {
    inquirerMenu
}