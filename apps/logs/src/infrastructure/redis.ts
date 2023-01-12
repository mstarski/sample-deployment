import * as redis from "redis";
import { promisifyAll } from "bluebird";
import { getConfig } from "./config";
import dotenv = require("dotenv");

dotenv.config();

promisifyAll(redis);

const client = redis.createClient({
  socket: {
    host: getConfig("REDIS_HOST"),
    port: parseInt(getConfig("REDIS_PORT")),
  },
});

client.on("error", (err) => {
  throw new Error(err);
});

export const connectToRedis = async () => {
  return redisClient.connect();
};
export const redisClient = client;
