
/* eslint-disable no-undef */

import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

let items = [];

app.get("/api/items", (req, res) => {
  res.json(items);
});

app.post("/api/items", (req, res) => {
  const newItem = { ...req.body, id: Date.now() };
  items.push(newItem);
  res.json(newItem);
});

app.put("/api/items/:id", (req, res) => {
  const itemId = parseInt(req.params.id);
  const itemIndex = items.findIndex((item) => item.id === itemId);

  if (itemIndex !== -1) {
    items[itemIndex] = { ...items[itemIndex], ...req.body };
    res.json(items[itemIndex]);
  } else {
    res.status(404).send("Item not found");
  }
});

app.delete("/api/items/:id", (req, res) => {
  const itemId = parseInt(req.params.id);
  items = items.filter((item) => item.id !== itemId);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});
