const fs = require("node:fs");

const express = require("express");
const app = express();
const indexRouter = require("./routes/indexRouter");

app.use("/", indexRouter);

app.listen(process.env.PORT || 8080, (error) => {
  if (error) {
    throw error;
  }

  console.log(`Server running at ${process.env.PORT || 8080}`);
});
