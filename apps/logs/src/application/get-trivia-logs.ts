import { pg } from "../infrastructure/postgres";
import { LOGS_TABLE } from "../infrastructure/tables";

export const getTriviaLogs = async () => {
  return pg.select().table(LOGS_TABLE).orderBy("id", "desc").limit(10);
};
