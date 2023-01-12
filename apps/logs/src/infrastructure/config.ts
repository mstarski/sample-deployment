import * as dotenv from "dotenv";

dotenv.config();

export const getConfig = (key: string): string => {
  return (process.env as Record<string, string>)[key];
};
