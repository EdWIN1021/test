import express from "express";

const app = express();

app.get("/api/test", (req, res) => {
  res.end(`hello world`);
});

export default app;
