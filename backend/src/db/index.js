const events = [];

function saveEvent(event) {
  events.push(event);
  return event;
}

function getEvents() {
  return events;
}

module.exports = {
  saveEvent,
  getEvents,
};