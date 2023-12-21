import { useState, useEffect } from "react";
export default function QuizPage() {
  const [selectedOption, setSelectedOption] = useState("True");

  //   const dataQuiz = require("../data.json");

  const [score, setScore] = useState(0);

  useEffect(() => {}, []);

  const correctAnswer = "True";
  // misalnya jawabannya True

  //   if (selectedOption === correctAnswer) {
  //     setScore((prevScore) => prevScore + 1);
  //     console.log("Correct! Score:", score + 1);
  //   } else {
  //     console.log("Incorrect! Score:", score);
  //   }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Selected value:", selectedOption);
  };

  return (
    <>
      <div className="container">
        <div className="quiz-page">
          <h2 className="judul">Quiz Trivia Programming</h2>
          <form onSubmit={() => handleSubmit()}>
            <div id="quiz" className="mt-4">
              <p>
                JavaScript adalah bahasa pemrograman yang digunakan untuk
                membuat halaman web interaktif.
              </p>
              <div className="d-flex justify-content-center mt-5 gap-3">
                <button type="submit" className="btn btn-outline-info  btn-lg">
                  True
                </button>
                <button type="submit" className="btn btn-outline-info  btn-lg">
                  False
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
