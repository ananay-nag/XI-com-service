const mongo = require("mongoose");
const url = "mongodb+srv://testUser:<pwd>@cluster0.aj3jl.mongodb.net/eventDB?retryWrites=true&w=majority";
// export db connection function;
module.exports = { dbConnect: dbConnect };
function dbConnect() {
  const options = {
    keepAlive: 1,
    poolSize: 10,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  try {
    return mongo.connect(url, options);
  } catch (err) {
    return err;
  }
}
