const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");

const routes = require("./routes/ToDoRoutes");
const corsOptions = require("./utils/corsOptions");

require("dotenv").config();

app.use(express.json());
app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use("/api/v1/toDos", routes);

const PORT = process.env.port || 5000;

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log(`Connected To MongoDB...`))
  .catch((err) => console.log(err));

app.listen(PORT, () => console.log(`listening on: ${PORT}`));
