const express = require("express");
const db = require("./db");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Analytics Program Backend is running 🚀");
});

app.post("/events", (req, res) => {
  const event = req.body;

  if (!event || !event.websiteId) {
    return res.status(400).json({ error: "Invalid event" });
  }

  const saved = db.saveEvent({
    ...event,
    timestamp: new Date().toISOString(),
  });

  console.log("Event stored:", saved);

  res.json({ success: true });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});