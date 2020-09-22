import React, { useState } from "react";
import { QuestionCard } from "./components/QuestionCard";
import {
  Difficulty,
  QuestionState,
  fetchQuizQuestions,
  APICategories,
  CategoryType,
} from "./API";
import { Category } from "./components/Category";
import { GlobalStyle, Wrapper } from "./App.styles";

const TOTAL_AMOUNT = 10;

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

function App() {
  const [loading, setLoading] = useState(false);
  const [gameOver, setGameOver] = useState(true);
  const [number, setNumber] = useState(0);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [currentCat, setCurrentCat] = useState(0);

  React.useEffect(() => {
    const getCategories = async () => {
      const info = await APICategories();
      setCategories(info);
    };
    getCategories();
  }, [setCategories]);

  const chooseCat = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const catId = Number(e.currentTarget.value);
    setCurrentCat(catId);
  };

  console.log(currentCat);

  const quizStart = async () => {
    setLoading(true);
    setGameOver(false);

    if (currentCat === 0) {
      const newQuestions = await fetchQuizQuestions(
        TOTAL_AMOUNT,
        Difficulty.EASY
      );
      setQuestions(newQuestions);
    } else {
      const specQuestions = await fetchQuizQuestions(
        TOTAL_AMOUNT,
        Difficulty.EASY,
        currentCat
      );
      setQuestions(specQuestions);
    }
    console.log(questions);

    setNumber(0);
    setUserAnswers([]);
    setScore(0);
    setLoading(false);
  };

  const handleAnswers = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = event.currentTarget.value;
      const correct = questions[number].correct_answer === answer;
      if (correct) {
        setScore((prev) => prev + 1);
      }
      const AnswerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, AnswerObject]);
    }
  };

  const nextQuestion = () => {
    const nextQuestion = number + 1;
    if (nextQuestion === TOTAL_AMOUNT) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  };

  return (
    <>
      <GlobalStyle />
      <Wrapper className="App">
        <h1>TypeScript Quiz</h1>
        {gameOver || userAnswers.length === TOTAL_AMOUNT ? (
          <div className="begin">
            <Category categories={categories} chooseCat={chooseCat} />
            <button className="start" onClick={quizStart}>
              Start
            </button>
          </div>
        ) : null}
        {!gameOver ? <p className="score">Score: {score}</p> : null}
        {loading ? <p className="loading">loading...</p> : null}
        {!loading && !gameOver ? (
          <QuestionCard
            question={questions[number].question}
            questionNum={number + 1}
            answers={questions[number].answers}
            callBack={handleAnswers}
            totalQuestions={TOTAL_AMOUNT}
            userAnswers={userAnswers ? userAnswers[number] : undefined}
          />
        ) : null}
        {!gameOver &&
        !loading &&
        userAnswers.length === number + 1 &&
        number !== TOTAL_AMOUNT - 1 ? (
          <button className="next" onClick={nextQuestion}>
            {" "}
            Next Question
          </button>
        ) : null}
      </Wrapper>
    </>
  );
}

export default App;
