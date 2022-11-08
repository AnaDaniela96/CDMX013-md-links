const fs = require('fs');
const process = require('node:process');
const  fetch = require('node-fetch');

const validatePath = (path) => {
    let result = 'no exist';
    try {
        if (fs.existsSync(path)){
            result =  'exist';
            //aquí deberá validar sí es un archivo md
            const rut = (path.split(".").pop());
                if (rut == 'md') {
                    fs.readFile(path, 'utf-8', (err, data) => {
                        if (err) {
                            console.log(err);
                        } else {
                            const links = Array.from(data.match(/\[(.+)\]\((https?:.+)\)/ig));
                            links.forEach(texto => {
                                const justLink = texto.split("(" ).pop().replace(")", "")
                                fetch(justLink).then(response => {
                                    console.log(response.status);
                                })
                            })
                        }
                    });
                console.log('Si es un archivo md ');
        }
            else {console.log('No es un archivo MD');
    }}
} catch(err) {
    result = err;
}
return result;
}
console.log(validatePath(process.argv[2]));
