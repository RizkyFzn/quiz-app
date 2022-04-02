import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../Style.scss';

function Olahraga() {
  const questions = [
    {
      questionText: 'di negara manakah piala dunia pertama kali diadakan? ',
      answerOptions: [
        { answerText: 'Brazil', isCorrect: false },
        { answerText: 'Uruguay', isCorrect: true },
        { answerText: 'Spanyol', isCorrect: false },
        { answerText: 'Jerman', isCorrect: false },
      ],
    },
    {
      questionText: 'Ukuran lapangan sepak bola adalah',
      answerOptions: [
        { answerText: '80m - 90m', isCorrect: false },
        { answerText: '100m - 110m', isCorrect: true },
        { answerText: '90m - 100m', isCorrect: false },
        { answerText: '70m - 90m', isCorrect: false },
      ],
    },
    {
      questionText: 'Permainan sepak bola terdiri atas ... babak',
      answerOptions: [
        { answerText: '2', isCorrect: true },
        { answerText: '3', isCorrect: false },
        { answerText: '1', isCorrect: false },
        { answerText: '6', isCorrect: false },
      ],
    },
    {
      questionText: 'Piala dunia pertama dimenangkan oleh negara?',
      answerOptions: [
        { answerText: 'Jerman', isCorrect: false },
        { answerText: 'Spanyol', isCorrect: false },
        { answerText: 'Brazil', isCorrect: false },
        { answerText: 'Uruguay', isCorrect: true },
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
  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          Jumlah Jawaban Benar: {score} dari {questions.length} pertanyaan
          <Link className="btn-back" to="/kategori">
            Kembali Ke Halaman Awal
          </Link>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Pertanyaan {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">{questions[currentQuestion].questionText}</div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Olahraga;
