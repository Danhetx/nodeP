const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTrabla } = require('./multiplicar/multipliacar');

let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarTrabla(argv.base, argv.limite).then(archivo => console.log(archivo)).catch(err => console.log(err));
        break;
    case 'crear':
        crearArchivo(argv.base).then(archivo => console.log(archivo)).catch(err => console.log(err));
        break;
    default:
        console.log(`${comando} No es un comado`.red);
}
//let parametro = argv[2];
//let base = parametro.split('=')[1]