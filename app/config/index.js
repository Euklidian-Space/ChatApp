'use strict';

if(process.env.NODE_ENV === 'production') {
  //offer prodiction stage env variables
  module.exports = {
    host: process.env.host || "",
    dbURI: process.env.dbURI 
  };
} else {
  //offer dev stage settings and data
  module.exports = require("./development.json");
}