import { pg } from "../infrastructure/postgres";
import { LOGS_TABLE } from "../infrastructure/tables";

export const handleTriviaMessage = async (triviaMessage: string) => {
  const dto = JSON.parse(triviaMessage);
  console.log("Message received 📦: ", dto);

  return pg(LOGS_TABLE).insert({
    player_ip: dto.userIp,
    category: dto.category,
    question: dto.question,
    difficulty: dto.difficulty,
    answer: dto.answer,
    is_correct: dto.isCorrect,
    answer_hash: dto.hash,
  });
};
