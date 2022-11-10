const fs = require("fs");

const extractorLinks = (path) => {
  let LinksV = [];
  fs.readFile(path, "utf-8", (err, data)=> {
    if (err) {
      return err;
    } else {
      const links = Array.from(data.match(/\[(.+)\]\((https?:.+)\)/gi));
      links.map((texto) => {
        return texto.split("(").pop().replace(")", "");
      });
    }
  });
  return LinksV;
};
module.exports = {
  extractorLinks,
};
