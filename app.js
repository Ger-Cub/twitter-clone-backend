import express from "express";
import cors from "cors";
import currentUserRoute from "./routes/currentUser.routes.js";
import tweetsRoute from "./routes/tweets.routes.js";
import followRoute from "./routes/follow.routes.js";

const PORT = 5000


const app = express();
app.use(express.json());
app.use(cors());

app.use("/", currentUserRoute);
app.use("/", tweetsRoute);
app.use("/", followRoute);

app.listen(PORT, () => {
  console.log(`Notre serveur est lancé avec succès au port ${PORT}`);
});