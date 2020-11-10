const BodyParser = require("body-parser");
const cors = require("cors");
module.exports = function (app) {
  app.use(BodyParser.urlencoded({ extended: false }));
  app.use(cors());
  app.use(BodyParser.json());
};
