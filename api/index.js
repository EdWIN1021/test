const app = require("express")();

app.get("/api/test", (req, res) => {
  res.end(`hello`);
});

module.exports = app;
