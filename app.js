const express = require("express");

const app = express();
const router = require("./routes");
const PORT = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello gadjian");
});

app.use(router);

app.listen(PORT, () => {
  console.log("listening server on port:", PORT);
});
