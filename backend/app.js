const express = require("express"); //we import the package
const app = express(); //we executed the package
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv/config");
app.use(cors());
app.use(express.json());
//connect to the DB
mongoose.connect(
  process.env.DB_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  () => console.log("connected to the database wow")
);

//We have ability to create routes
//how do we start start listening

//middlewares  are functions which executes when a route is hit.
//import routes
const itemsRouter = require("./routes/items");
app.use("/items", itemsRouter);

const CustomerRouter = require("./routes/customer");
app.use("/customers", CustomerRouter);

const InvoiceRouter = require("./routes/Invoice");
app.use("/invoices", InvoiceRouter);

app.listen(process.env.PORT || 5000);
