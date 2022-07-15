var inquirer = require('inquirer');
require('colors');

const opciones = [
    {
        type: 'list',
        name: 'opcion',
        message: 'Opciones a elegir',
        choices: [
            {
                value: '1',
                name: `${'1.'.blue} Crear tarea`
            },
            {
                value: '2',
                name: `${'2.'.blue} Listar tareas`
            },
            {
                value: '3',
                name: `${'3.'.blue} Listar tareas completadas`
            },
            {
                value: '4',
                name: `${'4.'.blue} Listar tareas pendientes`
            },
            {
                value: '5',
                name: `${'5.'.blue} Completar tarea`
            },
            {
                value: '6',
                name: `${'6.'.blue} Borrar tarea`
            },
            {
                value: '7',
                name: `${'7.'.blue} Salir\n`
            },
        ] 
    }
];



const inquirerMenu = async () => {

    console.log("-------------------".red);
    console.log(" Seleccione una opcion ".yellow);
    console.log("-------------------\n".red);



    const {opcion} = await inquirer.prompt(opciones);

    return opcion;
}


module.exports = {
    inquirerMenu
}