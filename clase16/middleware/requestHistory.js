import fs from 'node:fs';

export const requestHistory = (req, res, next) => {
  try {
    const duration = Date.now();
    const method = req.method;
    const url = req.originalUrl;
    const status = res.statusCode;
    const request = {
      duration,
      method,
      url,
      status,
    };
    const log = JSON.stringify(request) + '\n';
    fs.writeFile('request.txt', log, { flag: 'a' }, (err) => {
      if (err) {
        console.error('Error al escribir en el archivo de registro:', err);
      } else {
        console.log('Archivo de registro actualizado correctamente');
      }
    });
  } catch (error) {
    console.error('Se produjo un error al procesar la solicitud:', error);
  }

  next();
};
