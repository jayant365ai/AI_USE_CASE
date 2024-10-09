import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import session from "express-session";
import dateRoute from "./routes/dateRoute.js";

const app = express();
dotenv.config();
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  session({
    secret: "techHelps",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);


// mongoose.connect(process.env.MONGO_URI,
//   { useNewUrlParser: true, useUnifiedTopology: true }
// );
// const db = mongoose.connection;
// db.on("error", (err) => {
//   console.log(err);
// });

// db.once("open", () => {
//   console.log("Database Connected");
// });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Backend is running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Welcome to the API!");
});

app.use("/api/date", dateRoute);