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

  const handleOptionChange = (e) => {
    console.log(e.target.value);
    setSelectedOption(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>ini QuizPage</h1>
      <h1>
        Pertanyaan:
        {/* {dataQuiz.results[0]} */}
      </h1>

      <select value={selectedOption} onChange={handleOptionChange}>
        <option value="True">True</option>
        <option value="False">False</option>
      </select>

      <button type="submit">Submit</button>
    </form>
  );
}
