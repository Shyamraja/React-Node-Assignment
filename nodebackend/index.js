const { response } = require("express");
const express = require("express");
const app = express();
const axios = require("axios");
const cors = require('cors')
app.use(cors())
/**
 * Gets data from specified URL and returns a promise with response data
 * @returns A promise with response data
 */
const getPlace = (params) => {
  const request = axios.get("http://open-api.myhelsinki.fi/v2/places/",{params});
  return request.then((response) => response.data);
};
/*When http://localhost:3001/ is called, it 
 returns JSON data from getPlace() to browser.
 TODO: Implement solution described in instructions
 */
app.get("/", (request, response) => {
  getPlace(request.query).then((res) => response.json(res));
});

const PORT = 3001;
app.listen(PORT);
console.log(`Server running on port ${PORT}`);
