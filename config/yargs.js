const opts = {
  base: {
    demand: true,
    alias: 'b'
  },
  limit: {
    default: 10,
    alias: 'l'
  }
}

const argv = require('yargs')
  .command('listar', 'Lista la tabla de multiplicar', opts)
  .command('crear', 'Crea una tabla de multipplicar', opts)
  .help()
  .argv;


  module.exports = {
    argv
  }