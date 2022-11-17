const fetch = require("node-fetch");

const validateLinks = (links) => {
  let liste = links.map((link => {
    return fetch(link.href)
    .then((response) => {
      if (response.status === 200 ){
        return({
          href: response.url,
          status: response.status,
          word: "ok",
        });
    } else {return {status: response.status, word: 'fail'}}
    })
  }));
  return Promise.all(liste)
};

module.exports = {
  validateLinks,
};
//validateLinks('TESTS.md');
//validateLinks(process.argv[2]);
