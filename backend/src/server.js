const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Analytics Program Backend is running 🚀");
});

app.post("/events", (req, res) => {
  const event = req.body;

  console.log("Event received:", event);

  res.json({ success: true });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});