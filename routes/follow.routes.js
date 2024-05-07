import { Router } from "express";
import { getFollow } from "../controllers/follow.controllers.js";

const followRoute = Router()

followRoute.get("/follow", getFollow);

export default followRoute