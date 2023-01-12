import { Request, Response, Router } from "express";
import { createHash } from "node:crypto";
import { redisClient } from "../infrastructure/redis";
import { getConfig } from "../infrastructure/config";

export const triviaController = Router();

triviaController.post("/", async (req: Request, res: Response) => {
  const channelName = getConfig("REDIS_PUB_CHANNEL_NAME");

  const data: Record<string, unknown> = {
    userIp: req.ip,
    category: req.body.category,
    question: req.body.question,
    difficulty: req.body.difficulty,
    answer: req.body.userAnswer,
    isCorrect: req.body.userAnswer === req.body.correctAnswer,
  };

  data["hash"] = createHash("sha256")
    .update(JSON.stringify(data))
    .digest("hex");

  await redisClient.publish(channelName, JSON.stringify(data));
  console.log(`Message published 🚁: `, data);

  res.status(201).json({
    status: 201,
    timestamp: new Date(),
  });
});
