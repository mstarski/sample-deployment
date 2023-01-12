const cleanup = () => {
  const questionEl = $("#trivia-question");
  const categoryEl = $("#trivia-category");
  const answersListEl = $("#trivia-answers");

  questionEl.innerHTML = "";
  categoryEl.innerText = "";
  answersListEl.innerText = "";
};

const handleAnswer = async (data, givenAnswer) => {
  const body = {
    category: data.category,
    correctAnswer: data.correct_answer,
    userAnswer: givenAnswer,
    question: data.question,
    difficulty: data.difficulty,
  };

  try {
    const response = await fetch(`${DUMMY_ACTION_API_URL}/trivia`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(body),
    });

    window.alert("Thanks for your answer 📦");

    cleanup();
    location.reload();
  } catch {
    window.alert("Whoops, something went wrong ❌");
  }
};

const buildTrivia = async () => {
  const triviaId = uuidv4().replace(/-/g, "");

  const questionEl = $("#trivia-question");
  const categoryEl = $("#trivia-category");
  const answersListEl = $("#trivia-answers");

  const triviaResponse = await fetch(
    `${TRIVIA_API_URL}/api.php?amount=1&difficulty=medium`
  );

  const {
    results: [data],
  } = await triviaResponse.json();

  console.log(data);

  const answers = [...data.incorrect_answers, data.correct_answer].shuffle();

  categoryEl.appendChild(`Category: ${data.category}`.toElement());
  questionEl.appendChild(data.question.toElement());

  answers.forEach((answer) => {
    const liElement = document.createElement("li");
    const btn = answer.toElement("button");

    btn.dataset.triviaId = triviaId;
    btn.dataset.answer = answer;

    liElement.appendChild(btn);
    answersListEl.appendChild(liElement);
  });

  answersListEl.addEventListener("click", async (e) => {
    if (!e.target.dataset.answer) return;
    const btn = e.target;
    const answer = btn.dataset.answer;
    const currentBtnsSelector = `button[data-trivia-id='${triviaId}']`;

    toggleButtons(currentBtnsSelector);

    try {
      await handleAnswer(data, answer);
    } finally {
      toggleButtons(currentBtnsSelector);
    }
  });
};
