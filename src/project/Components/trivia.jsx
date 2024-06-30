import { useEffect, useState } from "react";

export default function Trivia({
  data,
  questionNumber,
  setQuestionNumber,
  setTimeOut,
}) {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber]);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  const handleClick = (a) => {
    if (!selectedAnswer) {
      setSelectedAnswer(a);
      setClassName("answer active");
      delay(2000, () => {
        setClassName(a.correct ? "answer correct" : "answer wrong");
      });

      delay(3000, () => {
        if (a.correct) {
          delay(1000, () => {
            setQuestionNumber((prev) => prev + 1);
            setSelectedAnswer(null);
            setDisabled(false); // Re-enable question click after correct answer
          });
        } else {
          delay(1000, () => {
            setTimeOut(true);
          });
        }
      });
    }
  };

  const handleQuestionClick = () => {
    if (!disabled) {
      setDisabled(true); // Disable question click
    }
  };

  return (
    <div className="trivia">
      <div
        className={`question ${disabled ? "disabled" : ""}`}
        onClick={handleQuestionClick}
      >
        {question?.question}
      </div>
      <div className="answers">
        {question?.answers.map((a) => (
          <div
            key={a.id}
            className={selectedAnswer === a ? className : "answer"}
            onClick={() => !selectedAnswer && handleClick(a)}
          >
            {a.text}
          </div>
        ))}
      </div>
    </div>
  );
}
