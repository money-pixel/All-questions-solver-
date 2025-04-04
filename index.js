function solveQuestion(question) {
  if (!question || question.trim() === "") {
    return "Please enter a question!";
  }

  if (question.toLowerCase().includes("ai")) {
    return "AI stands for Artificial Intelligence.";
  }

  return "Sorry, I don't know the answer to that.";
}

const inputQuestion = "What is AI?";
const answer = solveQuestion(inputQuestion);

console.log("Question:", inputQuestion);
console.log("Answer:", answer);
