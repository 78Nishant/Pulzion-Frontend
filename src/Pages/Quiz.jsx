import React, { useState, useEffect } from "react";
import quizData from "../quizData";
import '../index.css'; // Import Tailwind CSS

const App = () => {
  const [currentRound, setCurrentRound] = useState(0); // Track which round we are in
  const [currentQuestion, setCurrentQuestion] = useState(0); // Track current question index in a round
  const [lives, setLives] = useState(3);
  const [timer, setTimer] = useState(60);
  const [score, setScore] = useState(0);
  const [answer, setAnswer] = useState("");
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [selectedOption, setSelectedOption] = useState(""); // Track selected option
  const [emojiFeedback, setEmojiFeedback] = useState(""); // Track emoji feedback
  const [totalWins, setTotalWins] = useState(0); // Track total wins
  const [totalLosses, setTotalLosses] = useState(0); // Track total losses

  const round = quizData.battle.rounds[currentRound];
  const questionList = round.questions.multiple_choice.concat(
    round.questions.true_false,
    round.questions.fill_in_the_blank
  );
  const question = questionList[currentQuestion];

  useEffect(() => {
    const countdown = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      } else {
        if (lives > 1) {
          setLives(lives - 1);
          setTimer(60); // Reset timer when a life is lost
        } else {
          setTotalLosses(totalLosses + 1); // Increment losses on game over
          setLives(0); // Game Over
        }
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, [timer, lives]);

  const handleAnswer = () => {
    if (answer.trim().toLowerCase() === question.correct_answer.toLowerCase()) {
      setScore(score + 1);
      setTimer(timer + 5); // Add 5 seconds for correct answer
      setEmojiFeedback("🎉 +5"); // Set emoji for correct answer
      setShowCorrectAnswer(false); // Reset correct answer display
    } else {
      setLives(lives - 1);
      setTimer(timer - 5); // Subtract 5 seconds for incorrect answer
      setEmojiFeedback("😢"); // Set emoji for incorrect answer
      setShowCorrectAnswer(true); // Show correct answer
    }
    setAnswer(""); // Clear the answer field
    setSelectedOption(""); // Reset selected option
    if (currentQuestion + 1 < questionList.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCurrentRound(currentRound + 1);
      setCurrentQuestion(0);
    }
  };

  const renderLives = () => {
    return [...Array(3)].map((_, index) => (
      <span key={index} className={`inline-block w-6 h-6 rounded-full mx-1 ${
        index < lives ? 'bg-green-500' : 'bg-red-500'
      }`}></span>
    ));
  };

  if (lives <= 0) {
    return (
      <div className="flex justify-center text-black items-center min-h-screen bg-blue-100">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold text-red-500">Opponent Wins!</h2>
          <p className="mt-4">Your score: <span className="text-blue-600">{score}</span></p>
          <p className="mt-2">Total Wins: <span className="text-green-600">{totalWins}</span></p>
          <p className="mt-2">Total Losses: <span className="text-red-600">{totalLosses + 1}</span></p>
          <button
            onClick={() => {
              // Reset game state for new game
              setCurrentRound(0);
              setCurrentQuestion(0);
              setLives(3);
              setTimer(60);
              setScore(0);
              setTotalLosses(totalLosses + 1); // Increment losses when game restarts
              setEmojiFeedback(""); // Clear emoji feedback
              setShowCorrectAnswer(false); // Reset correct answer display
            }}
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Restart Game
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-4 text-blue-600">Quiz Game</h1>
        <h2 className="text-xl mb-2 text-gray-700">Module: {round.module}</h2>
        <h3 className="text-lg mb-4 font-semibold">Question {currentQuestion + 1}:</h3>
        <p className="mb-4 text-gray-800">{question.question}</p>

        {question.options && (
          <ul className="space-y-2 mb-4">
            {question.options.map((option, index) => (
              <li
                key={index}
                className="bg-blue-200 hover:bg-blue-300 text-black text-center py-2 rounded-lg cursor-pointer transition duration-200 ${selectedOption === option ? 'bg-blue-400' : ''"
                onClick={() => {
                  setSelectedOption(option); // Set selected option
                  setAnswer(option); // Update answer
                }}
              >
                {option}
              </li>
            ))}
          </ul>
        )}

        {!question.options && (
          <input
            type="text"
            className="border border-gray-300 p-2 rounded-lg w-full mb-4"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Type your answer"
          />
        )}

        <button
          onClick={handleAnswer}
          className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-200"
        >
          Submit Answer
        </button>

        <div className="flex justify-between mt-4">
          <div className="font-semibold">Time Remaining: <span className="text-blue-600">{timer} sec</span></div>
          <div className="font-semibold">Score: <span className="text-blue-600">{score}</span></div>
        </div>

        <div className="flex justify-center mt-4">
          <div className="font-semibold">
            Lives Remaining: {renderLives()}
          </div>
        </div>

        {showCorrectAnswer && (
          <div className="mt-4 text-red-500 font-bold">
            <p>Correct Answer: <span className="text-green-600">{question.correct_answer}</span></p>
          </div>
        )}

        {/* Display emoji feedback */}
        {emojiFeedback && (
          <div className="mt-4 text-xl">
            <span>{emojiFeedback}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;