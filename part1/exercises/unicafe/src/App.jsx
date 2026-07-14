import { useState } from "react";
import "./App.css";

function Title({ titleText }) {
  return <h2>{titleText}</h2>;
}

function Button({ onClick, text }) {
  return <button onClick={onClick}>{text}</button>;
}

function StatisticsLine({ text, value }) {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
}

function Statistics({
  feedbackOptions,
  goodCounter,
  neutralCounter,
  badCounter,
}) {
  const statisticText = "Statistics";

  if (goodCounter + neutralCounter + badCounter === 0) {
    return (
      <>
        <Title titleText={statisticText} />
        <p>No feedback was given</p>
      </>
    );
  }

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
      <table>
        <tbody>
          <StatisticsLine text={feedbackOptions[0]} value={goodCounter} />
          <StatisticsLine text={feedbackOptions[1]} value={neutralCounter} />
          <StatisticsLine text={feedbackOptions[2]} value={badCounter} />
          <StatisticsLine text={averageText} value={average} />
          <StatisticsLine
            text={positiveFeedbackPercantageText}
            value={positiveFeedbackPercantage}
          />
        </tbody>
      </table>
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
