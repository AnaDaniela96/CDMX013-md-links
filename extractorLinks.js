const fs = require("fs");

const extractLink = (path) => {
  let data = fs.readFileSync(path, "utf-8");
  const link = Array.from(data.match(/\[(.+)\]\((https?:.+)\)/gi));
  return link.map((texto) => {
    return {href: texto.split("(").pop().replace(")", "")}
  });
};

module.exports = {
  extractLink,
};
