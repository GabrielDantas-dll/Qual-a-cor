import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState();
  const [answers, setAnswers] = useState([""]);
  const [isWrongSelection, setIsWrongSelection] = useState(false);

  const generateColors = () => {
    const actualAnswer = getRandomColor();
    setColor(actualAnswer);
    setAnswers(
      [actualAnswer, getRandomColor(), getRandomColor()].sort(
        () => 0.5 - Math.random()
      )
    );
  }

  const getRandomColor = () => {
    const digits = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "0",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];

    const color = new Array(6)
      .fill("")
      .map(() => digits[Math.floor(Math.random() * digits.length)])
      .join("");

    return `#${color}`;
  };

  useEffect(() => {
    generateColors();
  }, []);

  const handleAnswerClicked = (answer) => {
    if(answer === color) {
      setIsWrongSelection(false);
      generateColors();
    } else {
      setIsWrongSelection(true);
    }
  }

  return (
    <div className="App">
      <div>
        <div className="guess-me" style={{ background: color }}></div>
        {answers.map((answer) => (
          <button onClick={() => handleAnswerClicked(answer)} key={answer}>{answer}</button>
        ))}
        {isWrongSelection && <div className="wrong">Wrong Answer</div>}
      </div>
    </div>
  );
}

export default App;
