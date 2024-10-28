import express from "express";
import serverless from "serverless-http";
import morgan from "morgan";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import session from "express-session";
import dateRoute from "../../routes/dateRoute.js";


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


const router = express.Router();
router.get("/hello", (req, res) => res.send("Hello World!"));

app.use("/api/", router);
app.use("/api/date", dateRoute);

module.exports.handler = serverless(app);