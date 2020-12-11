const express = require("express");

const app = express();
const router = require("./routes");
const reverse = require("./soal1-3/soal1");
const fibonacci = require("./soal1-3/soal2");
const combination = require("./soal1-3/soal3");
const PORT = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello gadjian");
});

// fibonnaci
app.post("/api/fibonacci", (req, res) => {
  const { n } = req.body;
  let output = fibonacci(n);
  res.status(200).json({ result: output });
});

// reverse
app.post("/api/reverse", (req, res) => {
  const { character } = req.body;
  let output = reverse(character);
  res.status(200).json({ result: output });
});

app.post("/api/combination", (req, res) => {
  const { n, r } = req.body;
  let output = combination(n, r);
  res.status(200).json({ result: output });
});

app.use(router);

app.listen(PORT, () => {
  console.log("listening server on port:", PORT);
});
