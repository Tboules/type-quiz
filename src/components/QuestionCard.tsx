import React from "react";
import { QWrapper, ButtonWrapper } from "./Comp.styles";
import { AnswerObject } from "../App";

type Props = {
  question: string;
  questionNum: number;
  answers: string[];
  callBack: (event: React.MouseEvent<HTMLButtonElement>) => void;
  totalQuestions: number;
  userAnswers: AnswerObject | undefined;
};

export const QuestionCard: React.FC<Props> = ({
  question,
  questionNum,
  answers,
  callBack,
  totalQuestions,
  userAnswers,
}) => {
  return (
    <QWrapper>
      <p className="question">
        Question: {questionNum} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }} />
      <div>
        {answers.map((answer) => {
          return (
            <ButtonWrapper
              key={answer}
              correct={userAnswers?.correctAnswer === answer}
              userClicked={userAnswers?.answer === answer}
            >
              <button
                onClick={callBack}
                disabled={!!userAnswers}
                value={answer}
              >
                <span dangerouslySetInnerHTML={{ __html: answer }} />
              </button>
            </ButtonWrapper>
          );
        })}
      </div>
    </QWrapper>
  );
};
