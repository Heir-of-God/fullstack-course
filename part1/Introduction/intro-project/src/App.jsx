import { useState } from "react";

function Display({ counter }) {
  return <div>{counter}</div>;
}

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

function App() {
  const [counter, setCounter] = useState(0);

  function increaseByOne() {
    setCounter(counter + 1);
  }

  function decreaseByOne() {
    setCounter(counter - 1);
  }

  function setToZero() {
    setCounter(0);
  }

  return (
    <>
      <Display counter={counter} />
      <Button onClick={increaseByOne} text="Add" />
      <Button onClick={decreaseByOne} text="Subtract" />
      <Button onClick={setToZero} text="Reset" />
    </>
  );
}

export default App;
