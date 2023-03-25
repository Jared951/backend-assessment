const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const { getCompliment, getFortune, getAllOfTheFortunes, addFortune, deleteFortune } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune)
app.get("/api/fortunes", getAllOfTheFortunes)
app.post("/api/fortune", addFortune)
app.delete("/api/fortune/:id", deleteFortune)
// app.put("/api/fortune/:id", putFortune)

app.listen(4000, () => console.log("Server running on 4000"));
