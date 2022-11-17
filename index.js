//usar metodos
//const process = require ('node:process');
const { isValidPath } = require("./validatePath.js");
const { extractLink } = require("./extractorLinks.js");
const { validateLinks } = require("./validateLink.js");

const mdLinks = (path, opcion) => {
  if (opcion == true) {
    if (isValidPath(path)) {
      return validateLinks(extractLink(path));
    }
  } else if (opcion == false) {
    return validateLinks(extractLink(path));
  }
};

//mdLinks(process.argv[2])
mdLinks("TESTS.md", false).then(console.log);
