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
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </>
  );
}

function Total(props) {
  let res = 0;

  for (let part of props.parts) {
    res += part.exercises;
  }

  return <p>Number of exercises {res}</p>;
}

function App() {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

  return (
    <div>
      <Header courseName={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
}

export default App;
