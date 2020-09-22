import { shuffleArray } from "./utils";

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type CategoryType = {
  id: number;
  name: string;
};

export type QuestionState = Question & { answers: string[] };

export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export const APICategories = async () => {
  const catEndpoint = "https://opentdb.com/api_category.php";
  const data = await (await fetch(catEndpoint)).json();
  return data.trivia_categories;
};

export const fetchQuizQuestions = async (
  amount: number,
  difficulty?: Difficulty,
  category?: number | string
) => {
  if (!category) {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
    const data = await fetch(endpoint);
    const read = await data.json();
    return read.results.map((question: Question) => ({
      ...question,
      answers: shuffleArray([
        ...question.incorrect_answers,
        question.correct_answer,
      ]),
    }));
  } else if (category) {
    const specEnd = `https://opentdb.com/api.php?amount=${amount}&category=${category}&type=multiple`;
    const data = await (await fetch(specEnd)).json();
    return data.results.map((question: Question) => ({
      ...question,
      answers: shuffleArray([
        ...question.incorrect_answers,
        question.correct_answer,
      ]),
    }));
  }
};
