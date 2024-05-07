import { Router } from "express";
import { getTweets } from "../controllers/tweets.controllers.js";
import { postTweets } from "../controllers/tweets.controllers.js";

const tweetsRoute = Router()

tweetsRoute.get("/tweets", getTweets);
tweetsRoute.post("/tweets", postTweets);

export default tweetsRoute