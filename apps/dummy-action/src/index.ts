import cors = require("cors");
import express = require("express");
import { triviaController } from "./controllers/trivia.controller";
import { connectToRedis } from "./infrastructure/redis";
import { getConfig } from "./infrastructure/config";

async function main() {
  const port = parseInt(getConfig("APP_PORT"));
  const appName = getConfig("APP_NAME");
  const appMode = getConfig("APP_MODE");

  const app = express();
  await connectToRedis();

  app.use(express.json());
  app.use(cors());

  app.use("/trivia", triviaController);

  app.listen(port, () =>
    console.log(`App ${appName} (${appMode}) running on port ${port} 🚛`)
  );
}

void main();
