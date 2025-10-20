// modules
import express from "express";
import {
  getStatus,
  getHost,
  getPlatform,
  getBrowserInfo,
  getUserAgent,
} from "../controllers/home-controller.js";

const introRouter = express.Router();

introRouter.get("/", getStatus);
introRouter.get("/host", getHost);
introRouter.get("/platform", getPlatform);
introRouter.get("/browser", getBrowserInfo);
introRouter.get("/userAgent", getUserAgent);

export default introRouter;
