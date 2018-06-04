/**  Requires */
const fs = require('fs');
const colors = require('colors');

let data = '';

let listarTabla = (base, limit = 10) => {
  console.log('================='.blue)
  console.log(`TABLA DEL ${base}`.blue)
  console.log('================='.blue)

  for(let i=1; i<=limit;i++){
    console.log(`${base} x ${i} = ${base * i}`)
  }
}

let guardarArchivo = (base, limit=10) => {

  return new Promise( (reject, resolve) => {

    if (!Number(base)) {
      reject(`El valor introducido ${base} no es un número`);
      return;
    }

    for (let i = 1; i <= limit; i++) {
      data += `${base} x ${i} = ${base * i}\n`;
    }

    fs.writeFile(`tablas/tabla-${base}-al-${limit}.txt`, data, (err) => {
      (err)
        ? reject(err)
        : resolve(`Archivo: tabla-${base}-al-${limit}.txt se guardo con éxito.`.green)
    })
  })
}


module.exports = {
  guardarArchivo,
  listarTabla
}