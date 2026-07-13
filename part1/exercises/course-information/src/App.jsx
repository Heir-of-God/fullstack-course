function Part(props) {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  );
}

function Header(props) {
  return <h1>{props.courseName}</h1>;
}

function Content(props) {
  return (
    <>
      <Part part={props.part1} />
      <Part part={props.part2} />
      <Part part={props.part3} />
    </>
  );
}

function Total(props) {
  return <p>Number of exercises {props.totalNumber}</p>;
}

function App() {
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };

  return (
    <div>
      <Header courseName={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total
        totalNumber={part1.exercises + part2.exercises + part3.exercises}
      />
    </div>
  );
}

export default App;
