require('colors');

const Menu = () => {

    return new Promise (resolve => {

        console.log("-------------------".red);
        console.log(" Seleccione una opcion ".yellow);
        console.log("-------------------\n".red);

        console.log(`${'1.'.blue} Crear tarea`);
        console.log(`${'2.'.blue} Listar tareas`);
        console.log(`${'3.'.blue} Listar tareas completadas`);
        console.log(`${'4.'.blue} Listar tareas pendientes`);
        console.log(`${'5.'.blue} Completar tarea`);
        console.log(`${'6.'.blue} Borrar tarea`);
        console.log(`${'7.'.blue} Salir\n`);


        const readline = require('readline').Interface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question('Seleccione una opcion: ', (opt) => {
            
            readline.close();
            resolve(opt);

        });

    });

    

}


module.exports = {
    Menu
}