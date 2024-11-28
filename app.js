const {crearArchivo} = require('./helpers/multiplicar')
const colors = require('colors');
const argv = require('./config/yargs');


console.clear();
//console.log(argv);
//console.log('base yargs', argv.base);

crearArchivo(argv.b,argv.h ,argv.l)
    .then( nombreArchivo => console.log(nombreArchivo.rainbow) )
    .catch( err => console.log(err) );


