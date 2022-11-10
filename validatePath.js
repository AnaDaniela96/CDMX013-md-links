//metodos filesystem
const fs = require('fs')

//funcion de la ruta path
const validatePath = (path) => {
  let result = 'no exist';
try {
  //si es valida la ruta el status cambia
  if (fs.existsSync(path)) {
    result = 'exist';
    //valida que sea un archivo md
    const rut = (path.split(".").pop());
    if (rut == 'md') {
      // si es un archivo md. entonces se lee el archivo

      return path
    }
      else { console.log('No es un archivo md')
    }}
} catch (err) {
  result = err;
}
return result; 
}
 
module.exports = {
  validatePath
}