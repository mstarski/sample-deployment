import { getConfig } from "./infrastructure/config";
import { connectToRedis, redisClient } from "./infrastructure/redis";
import { handleTriviaMessage } from "./application/handle-trivia-message";
import { createDbSchema } from "./infrastructure/postgres";
import { logsController } from "./controllers/logs.controller";
import cors = require("cors");
import express = require("express");

async function main() {
  const port = parseInt(getConfig("APP_PORT"));
  const appName = getConfig("APP_NAME");
  const appMode = getConfig("APP_MODE");

  const app = express();
  await createDbSchema();
  await connectToRedis();

  app.use(express.json());
  app.use(cors());

  await redisClient.subscribe(
    getConfig("REDIS_SUB_CHANNEL_NAME"),
    async (message) => await handleTriviaMessage(message)
  );

  app.use("/logs", logsController);

  app.listen(port, () =>
    console.log(`App ${appName} (${appMode}) running on port ${port} 🚛`)
  );
}

void main();
