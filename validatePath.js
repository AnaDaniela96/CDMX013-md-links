const fs = require('fs');
const process = require('node:process');

const validatePath = (path) => {
    let result = 'no exist';
    try {
        if (fs.existsSync(path)){
            result =  'exist';
            console.log(path[path.length-3], path[path.lenght-2], path[path.lenght-1]);
        }
    } catch(err) {
        result = err;
    }
    return result;
}
console.log(validatePath(process.argv[2]));
