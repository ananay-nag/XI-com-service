const mongo = require("mongoose");
let events = new mongo.Schema({
  eventName: { type: String, default: "" },
  eventDescription: { type: String, default: "" },
  startDate: { type: Number, default: 0 },
  endDate: { type: Number, default: 0 },
  organizer: { type: String, default: "" },
  tickets: [
    {
      ticketID: { type: Number, default: 0 },
      ticketNumber: { type: Number, default: 0 },
      price: { type: Number, default: 0 },
      addedOn: { type: Number, default: 0 },
    },
  ],
  addedOn: { type: Number, default: 0 },
  modifiedOn: { type: Number, default: 0 },
});
events.method({
  saveDocument: function () {
    return this.save();
  },
});
events.static({
  getDocument: function (doc) {
    return this.findOne(doc);
  },
  getDocuments: function (doc) {
    return this.find(doc);
  },
});
export default mongo.model("events", events);
