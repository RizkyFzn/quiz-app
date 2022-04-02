import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import './Geografi.scss';

function Geografi() {
  const questions = [
    {
      questionText: 'Bernhardus Varenius (1622-1650) mengemukakan pendapat bahwa pada dasarnya kajian geografi dibedakan menjadi dua, yaitu ….',
      answerOptions: [
        { answerText: 'regional dan fisik', isCorrect: false },
        { answerText: 'klasik dan modern', isCorrect: false },
        { answerText: 'umum dan khusus', isCorrect: true },
        { answerText: 'fisik dan sosial', isCorrect: false },
      ],
    },
    {
      questionText: 'Di daerah dataran rendah terbentuk pemukiman menyebar, sedangkan di daerah aliran sungai terbentuk pemukiman memanjang. Pernyataan tersebut berkaitan dengan konsep geografi, yaitu konsep ...',
      answerOptions: [
        { answerText: 'interelasi', isCorrect: false },
        { answerText: 'pola', isCorrect: true },
        { answerText: 'aglomerasi', isCorrect: false },
        { answerText: 'keterjangkauan ', isCorrect: false },
      ],
    },
    {
      questionText: 'Peserta Ujian Masuk Perguruan Tinggi terlambat mengikuti ujian karena salah menaiki kendaraan (bus) yang menuju tempat pelaksanaan ujian. Fenomena berkaitan dengan ...',
      answerOptions: [
        { answerText: 'Konsep Aglomerasi', isCorrect: true },
        { answerText: 'Konsep Pola', isCorrect: false },
        { answerText: 'Konsep Morfologi', isCorrect: false },
        { answerText: 'Konsep nilai kegunaan', isCorrect: false },
      ],
    },
    {
      questionText: 'Konsep esensial geografi yang menyangkut ketercapaian untuk menjangkau suatu tempat, atau alat komunikasi apa yang digunakan adalah ...',
      answerOptions: [
        { answerText: 'interelasi', isCorrect: false },
        { answerText: 'pola', isCorrect: false },
        { answerText: 'aglomerasi', isCorrect: false },
        { answerText: 'keterjangkauan ', isCorrect: true },
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

export default Geografi;
