import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../Style.scss';

function Umum() {
  const questions = [
    {
      questionText: 'Siapakah Presiden RI pertama?',
      answerOptions: [
        { answerText: 'Megawati', isCorrect: false },
        { answerText: 'Joko Widodo', isCorrect: false },
        { answerText: 'Soekarno', isCorrect: true },
        { answerText: 'Soeharto', isCorrect: false },
      ],
    },
    {
      questionText: 'Lambang sila ke-3 adalah?',
      answerOptions: [
        { answerText: 'Bintang', isCorrect: false },
        { answerText: 'Pohon Beringin', isCorrect: true },
        { answerText: 'Padi', isCorrect: false },
        { answerText: 'Kapas', isCorrect: false },
      ],
    },
    {
      questionText: 'Ibukota provinsi Sumatera Selatan adalah?',
      answerOptions: [
        { answerText: 'Palembang', isCorrect: true },
        { answerText: 'Palu', isCorrect: false },
        { answerText: 'Lembang', isCorrect: false },
        { answerText: 'Banyuasin', isCorrect: false },
      ],
    },
    {
      questionText: 'Hari Pendidikan Nasional jatuh pada tanggal?',
      answerOptions: [
        { answerText: '20 Maret', isCorrect: false },
        { answerText: '20 April', isCorrect: false },
        { answerText: '2 Maret', isCorrect: false },
        { answerText: '2 Mei', isCorrect: true },
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

export default Umum;
