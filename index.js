/** Requires*/
const { guardarArchivo, listarTabla } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
//let param = argv[2];
//let base = param.split('=')[1]; 

//console.log(argv)
// Parametros de proceso: argv argv.base | argv.limit

let opcion = argv._[0];

switch (opcion) {
  case 'listar':
    listarTabla(argv.base, argv.limit);
  break;
  case 'crear':
    guardarArchivo(argv.base, argv.limit)
      .then(archivo => console.log(archivo))
      .catch(err => console.log(err))
  break;
  default:
    console.log("Comando no reconocido")
  break;
}
