import { useState } from "react";
import "./App.css";

function Title({ titleText }) {
  return <h2>{titleText}</h2>;
}

function Button({ onClick, text }) {
  return <button onClick={onClick}>{text}</button>;
}

function StatisticsElement({ text, value }) {
  return (
    <p>
      {text} {value}
    </p>
  );
}

function Statistics({
  feedbackOptions,
  goodCounter,
  neutralCounter,
  badCounter,
}) {
  const statisticText = "Statistics";

  const averageText = "average";
  const average =
    goodCounter + badCounter + neutralCounter != 0
      ? (goodCounter - badCounter) / (goodCounter + badCounter + neutralCounter)
      : "undefined";

  const positiveFeedbackPercantageText = "positive";
  const positiveFeedbackPercantage =
    goodCounter + badCounter + neutralCounter != 0
      ? (goodCounter / (goodCounter + badCounter + neutralCounter)) * 100 + "%"
      : "undefined";

  return (
    <>
      <Title titleText={statisticText} />
      <StatisticsElement text={feedbackOptions[0]} value={goodCounter} />
      <StatisticsElement text={feedbackOptions[1]} value={neutralCounter} />
      <StatisticsElement text={feedbackOptions[2]} value={badCounter} />
      <StatisticsElement text={averageText} value={average} />
      <StatisticsElement
        text={positiveFeedbackPercantageText}
        value={positiveFeedbackPercantage}
      />
    </>
  );
}

function App() {
  const [goodCounter, setGoodCounter] = useState(0);
  const [neutralCounter, setNeutralCounter] = useState(0);
  const [badCounter, setBadCounter] = useState(0);

  const appText = "Give feedback";
  const feedbackOptions = ["good", "neutral", "bad"];

  function setGood(new_val) {
    setGoodCounter(new_val);
  }

  function setNeutral(new_val) {
    setNeutralCounter(new_val);
  }

  function setBad(new_val) {
    setBadCounter(new_val);
  }

  return (
    <>
      <Title titleText={appText} />
      <Button
        onClick={() => setGood(goodCounter + 1)}
        text={feedbackOptions[0]}
      />
      <Button
        onClick={() => setNeutral(neutralCounter + 1)}
        text={feedbackOptions[1]}
      />
      <Button
        onClick={() => setBad(badCounter + 1)}
        text={feedbackOptions[2]}
      />
      <Statistics
        feedbackOptions={feedbackOptions}
        goodCounter={goodCounter}
        neutralCounter={neutralCounter}
        badCounter={badCounter}
      />
    </>
  );
}

export default App;
