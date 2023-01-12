import { Request, Response, Router } from "express";
import { getTriviaLogs } from "../application/get-trivia-logs";

export const logsController = Router();

logsController.get("/", async (req: Request, res: Response) => {
  const logs = await getTriviaLogs();

  return res.json(logs);
});
