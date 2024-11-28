const fs = require('fs');
const colors = require('colors');


const crearArchivo = async(base = 5,hasta, listar = false) => {
    

    
    let salida = '';
    let consola = '';

    for (let i = 1; i <= hasta; i++) {
        salida += `${base} X ${i} = ${5 * i}\n`;
        consola += `${base} ${colors.green('X')} ${i} ${colors.red('=')} ${5 * i}\n`;
    }

    if (listar) {
        console.log('==================='.green );
        console.log(`tabla del ${colors.blue(base)}`);
        console.log('==================='.green );
        console.log(consola);

    }

    

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return `El archivo tabla-${base} ha sido creado`
    }


module.exports={
    crearArchivo 
}