const fs = require("fs");

//funcion de la ruta path
const isValidPath = (path) => {
  if (fs.existsSync(path)) {
    const rut = path.split(".").pop();
    if (rut == "md") {
      return true;
    } 
  }
  return false;
};

module.exports = {
  isValidPath
};
