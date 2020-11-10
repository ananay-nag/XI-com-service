const events = require("../app/module/events");
module.exports = function (app) {
  app.get("/test", (req, res) => {
    res.send("WORKING");
  });
  app.post("/add-event", events.addEvent);
};
