import { par } from './clase14_numeros_pares.mjs';

const fs = require('node:fs/promises');
fs.readFile('./ruta', 'utf-8')
  .then((text) => {
    return fs
      .writeFile(
        'Numero_pares',
        `La cantidad de numeros pares en el texto es: ${par(text)}`,
        'utf-8'
      )
      .then(() => {
        console.log(
          `La cantidad de numeros pares en el texto es: ${par(text)}`
        );
      })
      .catch((err) => {
        console.log(`Ocurrió un error al escribir el archivo: ${err}`);
      });
  })

  .catch((err) => {
    console.log(`Ocurrió un error al leer el archivo: ${err}`);
  });
