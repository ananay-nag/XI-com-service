import EventModel from "../../models/eventModel";
export default class EventManager {
  async addEvent(request) {
    if (!request || !request.eventName || !request.startDate || !request.endDate || !request.tickets || !request.tickets.length) {
      throw new Error("Parameter in-sufficient");
    }
    const date = new Date();
    let newModel = new EventModel(request);
    newModel.addedOn = date.getTime();
    newModel.modifiedOn = date.getTime();
    try {
      return await newModel.saveDocument();
    } catch (err) {
      throw new Error("Error to save doc :: " + err.message);
    }
  }
}
