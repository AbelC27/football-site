import React, { useState } from 'react';
import './Quiz.css';

function Quiz() {
  const questions = [
    {
      questionText: 'How many players are on a volleyball court at one time per team?',
      answerOptions: [
        { answerText: '5', isCorrect: false },
        { answerText: '6', isCorrect: true },
        { answerText: '7', isCorrect: false },
        { answerText: '4', isCorrect: false },
      ],
    },
    {
      questionText: 'What is the specialist defensive player who wears a different colored jersey called?',
      answerOptions: [
        { answerText: 'Setter', isCorrect: false },
        { answerText: 'Blocker', isCorrect: false },
        { answerText: 'Libero', isCorrect: true },
        { answerText: 'Spiker', isCorrect: false },
      ],
    },
    {
      questionText: 'In standard indoor volleyball, how many points do you need to win a typical set?',
      answerOptions: [
        { answerText: '15', isCorrect: false },
        { answerText: '21', isCorrect: false },
        { answerText: '25', isCorrect: true },
        { answerText: '30', isCorrect: false },
      ],
    },
    {
      questionText: 'Which country won the Men\'s Volleyball Gold Medal at the Tokyo 2020 Olympics?',
      answerOptions: [
        { answerText: 'Brazil', isCorrect: false },
        { answerText: 'Russia (ROC)', isCorrect: false },
        { answerText: 'France', isCorrect: true },
        { answerText: 'USA', isCorrect: false },
      ],
    },
    {
      questionText: 'What is it called when a player jumps and hits the ball forcefully over the net?',
      answerOptions: [
        { answerText: 'Spike (Attack)', isCorrect: true },
        { answerText: 'Set', isCorrect: false },
        { answerText: 'Dig', isCorrect: false },
        { answerText: 'Bump', isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="quiz-page fade-in">
      <div className="container">
        <section className="hero-section">
          <h1 className="hero-title">Fan Zone Quiz</h1>
          <p className="hero-subtitle">Think you know volleyball? Test your knowledge!</p>
        </section>

        <div className="quiz-container card">
          {showScore ? (
            <div className="score-section fade-in">
              <h2>Quiz Complete!</h2>
              <p className="score-text">
                You scored <strong>{score}</strong> out of <strong>{questions.length}</strong>
              </p>
              <div className="score-message">
                {score === questions.length ? '🎉 Perfect Score! You are a true super-fan! 🏐' : 
                 score > questions.length / 2 ? '👏 Great job! You know your stuff!' : 
                 '🙂 Nice try! Keep watching and learning!'}
              </div>
              <button onClick={resetQuiz} className="btn btn-primary">Play Again</button>
            </div>
          ) : (
            <>
              <div className="question-section">
                <div className="question-count">
                  <span>Question {currentQuestion + 1}</span>/{questions.length}
                </div>
                <div className="question-text">
                  {questions[currentQuestion].questionText}
                </div>
              </div>
              <div className="answer-section">
                {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                  <button 
                    key={index}
                    className="quiz-btn" 
                    onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
                  >
                    {answerOption.answerText}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Quiz;