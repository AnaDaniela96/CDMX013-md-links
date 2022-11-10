//usar metodos
const process = require ('node:process');
const {validatePath} = require('./validatePath.js')
const {extractorLinks} = require('./extractorLinks') 

const mdLinks = (path) => {
        const file = validatePath(path);
        console.log(extractorLinks(file));
}

mdLinks(process.argv[2])