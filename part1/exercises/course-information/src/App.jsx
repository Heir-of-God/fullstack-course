function Header(props) {
  return <h1>{props.courseName}</h1>;
}

function Content(props) {
  return (
    <>
      <p>
        {props.coursePart1} {props.exercisesNumber1}
      </p>
      <p>
        {props.coursePart2} {props.exercisesNumber2}
      </p>
      <p>
        {props.coursePart3} {props.exercisesNumber3}
      </p>
    </>
  );
}

function Total(props) {
  return <p>Number of exercises {props.totalNumber}</p>;
}

function App() {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header courseName={course} />
      <Content
        coursePart1={part1}
        exercisesNumber1={exercises1}
        coursePart2={part2}
        exercisesNumber2={exercises2}
        coursePart3={part3}
        exercisesNumber3={exercises3}
      />
      <Total totalNumber={exercises1 + exercises2 + exercises3} />
    </div>
  );
}

export default App;
