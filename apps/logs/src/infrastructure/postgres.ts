import * as dotenv from "dotenv";
import { getConfig } from "./config";
import { Knex } from "knex";
import { LOGS_TABLE } from "./tables";
import CreateTableBuilder = Knex.CreateTableBuilder;

dotenv.config();

export const pg = require("knex")({
  client: "pg",
  connection: getConfig("POSTGRES_URL"),
  searchPath: ["knex", "public"],
});

export const createDbSchema = async () => {
  const hasTableLogs = await pg.schema.hasTable(LOGS_TABLE);

  if (hasTableLogs) {
    console.info(`${LOGS_TABLE} table exists. Skipping creation... ✅`);
    return;
  }

  console.info(`creating table ${LOGS_TABLE}...`);
  await pg.schema.createTable(LOGS_TABLE, (table: CreateTableBuilder) => {
    table.increments();
    table.string("player_ip");
    table.string("category");
    table.string("question");
    table.string("difficulty");
    table.string("answer");
    table.boolean("is_correct");
    table.string("answer_hash");
  });
  console.log(`${LOGS_TABLE} table created. ✅`);
};
