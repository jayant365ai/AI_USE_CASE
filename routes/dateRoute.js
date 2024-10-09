import express from "express";
import dateConroller from "../controllers/dateContoller.js";

const dateRoute = express.Router();

dateRoute
  .post("/now", dateConroller.getCurrentIndiaTime)

export default dateRoute;