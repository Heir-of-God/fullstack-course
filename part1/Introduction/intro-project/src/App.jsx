import { useState } from "react";

function Display(props) {
  return <div>{props.value}</div>;
}

function Button(props) {
  return <button onClick={props.onClick}>{props.text}</button>;
}

function App() {
  const [value, setValue] = useState(10);

  const setToValue = (newValue) => {
    console.log("value now", newValue);
    setValue(newValue);
  };

  return (
    <div>
      <Display value={value} />
      <Button onClick={() => setToValue(1000)} text="thousand" />
      <Button onClick={() => setToValue(0)} text="reset" />
      <Button onClick={() => setToValue(value + 1)} text="increment" />
    </div>
  );
}

export default App;
