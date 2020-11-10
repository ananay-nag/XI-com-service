const { Promise } = require("mongoose");

const app = require("express")();
const PORT = 3001;
require("./config/express/express.js")(app);
require("./route/route.js")(app);
const dbCon = require("./config/db/db");
Promise.all([dbCon.dbConnect()])
  .then(startServer)
  .catch((err) => {
    console.log("err to connectDB" + err);
  });
function startServer() {
  app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
  });
}

// listen();
