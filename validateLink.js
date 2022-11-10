const fetch = require("node-fetch");

return fetch(justLink)
.then((response) => {
  return { status: response.status };
  //   console.log(response.status);
})
.catch((error) => {
  return { status: "fail" };
});
