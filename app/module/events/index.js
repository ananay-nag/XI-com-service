import EventManager from "../events/eventManager";
module.exports = {
  addEvent: async function (request, response) {
    console.log("request.body", request.body);
    try {
      let result = await new EventManager()
        .addEvent(request.body)
        .then((result) => {
          return {
            code: 200,
            data: result,
            msg: "data added",
          };
        })
        .catch((err) => {
          return {
            code: 400,
            data: {},
            msg: err.message,
          };
        });
      console.log("result", result);
      return response.format({
        json: () => {
          response.send(result);
        },
      });
    } catch (err) {
      return response.format({
        json: () => {
          response.send({
            code: 400,
            data: {},
            msg: err.message,
          });
        },
      });
    }
  },
};
