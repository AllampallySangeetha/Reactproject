import "./app.css";
import { useEffect, useMemo, useState } from "react";
import React from "react";
import Start from "./project/Components/start";
import Timer from "./project/Components/timer";
import Trivia from "./project/Components/trivia";

// Utility function to shuffle an array
const shuffleArray = (array) => {
  let shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  const data = useMemo(() => [
    {
      id: 1,
      question: "What is the difference between XML and HTML?",
      answers: shuffleArray([
        {
          text: "HTML is used for exchanging data, XML is not",
          correct: false,
        },
        {
          text: "XML is used for exchanging data, HTML is not ",
          correct: true,
        },
        {
          text: "HTML can have user defined tags, XML cannot",
          correct: false,
        },
        {
          text: "None",
          correct: false,
        },
      ]),
    },
    {
      id: 2,
      question: "Who was the primary author of HTML?",
      answers: shuffleArray([
        {
          text: "Brendan Eich",
          correct: false,
        },
        {
          text: "Sabeer Bhatiya",
          correct: false,
        },
        {
          text: "Google Inc",
          correct: false,
        },
        {
          text: "Tim Berners-Lee",
          correct: true,
        },
      ]),
    },
    {
      id: 3,
      question: "What is mean by DTD ?",
      answers: shuffleArray([
        {
          text: "Document type data",
          correct: false,
        },
        {
          text: "Data type definition",
          correct: false,
        },
        {
          text: "Definition type document",
          correct: false,
        },
        {
          text: " Document type definition",
          correct: true,
        },
      ]),
    },
    {
      id: 4,
      question: "What is the Virtual DOM in React used for?",
      answers: shuffleArray([
        {
          text: "Storing user authentication data",
          correct: false,
        },
        {
          text: "Efficiently updating and rendering components",
          correct: true,
        },
        {
          text: "Managing server-side rendering",
          correct: false,
        },
        {
          text: "Handling API requests",
          correct: false,
        },
      ]),
    },
    {
      id: 5,
      question: "In CSS, what is the default value of the position property?",
      answers: shuffleArray([
        {
          text: "static ",
          correct: true,
        },
        {
          text: "relative",
          correct: false,
        },
        {
          text: "fixed",
          correct: false,
        },
        {
          text: "absolute",
          correct: false,
        },
      ]),
    },
    {
      id: 6,
      question: "What does the CSS property transform: scale(2) do?",
      answers: shuffleArray([
        {
          text: "Rotates the element by 2 degrees",
          correct: false,
        },
        {
          text: "Skews the element horizontally",
          correct: false,
        },
        {
          text: " Scales the element to twice its size ",
          correct: true,
        },
        {
          text: "Translates the element by 2 pixels",
          correct: false,
        },
      ]),
    },
    {
      id: 7,
      question: "What is the purpose of the CSS counter-reset property?",
      answers: shuffleArray([
        {
          text: " Resets the position of a counter",
          correct: false,
        },
        {
          text: "Sets the initial value of a counter",
          correct: false,
        },
        {
          text: "Removes a counter from the document",
          correct: false,
        },
        {
          text: "Resets the count of a counter",
          correct: true,
        },
      ]),
    },
    {
      id: 8,
      question: "Which of the following is a server-side Java Script object?",
      answers: shuffleArray([
        {
          text: "Function ",
          correct: false,
        },
        {
          text: "FileUpload",
          correct: false,
        },
        {
          text: "File ",
          correct: true,
        },
        {
          text: "Date",
          correct: false,
        },
      ]),
    },
    {
      id: 9,
      question: "What language defines the behavior of a web page?",
      answers: shuffleArray([
        {
          text: "HTML",
          correct: false,
        },
        {
          text: "Java Script",
          correct: true,
        },
        {
          text: "CSS",
          correct: false,
        },
        {
          text: "XML",
          correct: false,
        },
      ]),
    },
    {
      id: 10,
      question: "What is the alternate name for Java script?",
      answers: shuffleArray([
        {
          text: "LimeScript",
          correct: false,
        },
        {
          text: "ECMAScript ",
          correct: true,
        },
        {
          text: "Both a and d",
          correct: false,
        },
        {
          text: "ECMScript",
          correct: false,
        },
      ]),
    },
    {
      id: 11,
      question: "Java Script entities start with ____________ and end with ______________",
      answers: shuffleArray([
        {
          text: "Ampersand, semicolon",
          correct: true,
        },
        {
          text: "Ampersand, colon",
          correct: false,
        },
        {
          text: "Semicolon, Ampersand",
          correct: false,
        },
        {
          text: "Semicolon, colon",
          correct: false,
        },
      ]),
    },
    {
      id: 12,
      question: "What does SQL stand for?",
      answers: shuffleArray([
        {
          text: "Standard Query Language",
          correct: false,
        },
        {
          text: "Structured Question Language ",
          correct: false,
        },
        {
          text: "Structured Query Language ",
          correct: true,
        },
        {
          text: "System Query Language",
          correct: false,
        },
      ]),
    },
    {
      id: 13,
      question: "Which SQL command is used to remove data from a table?",
      answers: shuffleArray([
        {
          text: "REMOVE",
          correct: false,
        },
        {
          text: "DROP",
          correct: false,
        },
        {
          text: " ERASE ",
          correct: false,
        },
        {
          text: "DELETE",
          correct: true,
        },
      ]),
    },
    {
      id: 14,
      question: "What does the term NULL represent in SQL?",
      answers: shuffleArray([
        {
          text: "A specific value",
          correct: false,
        },
        {
          text: "An error in the query",
          correct: false,
        },
        {
          text: "No value or undefined ",
          correct: true,
        },
        {
          text: "A placeholder for future data",
          correct: false,
        },
      ]),
    },
    {
      id: 15,
      question: "What is ReactJS primarily used for?",
      answers: shuffleArray([
        {
          text: "Server-side scripting",
          correct: false,
        },
        {
          text: "Graphic design",
          correct: false,
        },
        {
          text: " Database management",
          correct: false,
        },
        {
          text: "Building user interfaces  ",
          correct: true,
        },
      ]),
    },
  ], []);

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "₹ 100" },
        { id: 2, amount: "₹ 200" },
        { id: 3, amount: "₹ 300" },
        { id: 4, amount: "₹ 500" },
        { id: 5, amount: "₹ 1,000" },
        { id: 6, amount: "₹ 2,000" },
        { id: 7, amount: "₹ 4,000" },
        { id: 8, amount: "₹ 8,000" },
        { id: 9, amount: "₹ 16,000" },
        { id: 10, amount: "₹ 32,000" },
        { id: 11, amount: "₹ 64,000" },
        { id: 12, amount: "₹ 1,25,000" },
        { id: 13, amount: "₹ 2,50,000" },
        { id: 14, amount: "₹ 5,00,000" },
        { id: 15, amount: "₹ 1,000,000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  key={m.id} // Add a unique key
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
