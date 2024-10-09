import express from "express";
import dateConroller from "../controllers/dateContoller.js";

const dateRoute = express.Router();

dateRoute
  .get("/now", dateConroller.getCurrentIndiaTime)

export default dateRoute;