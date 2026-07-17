function Part({ part }) {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
}

function Header({ courseName }) {
  return <h1>{courseName}</h1>;
}

function Content({ parts }) {
  return (
    <>
      {parts.map((part) => {
        return <Part key={part.id} part={part} />;
      })}
    </>
  );
}

function Total({ parts }) {
  let res = parts.reduce((prev, curPart) => {
    return prev + curPart.exercises;
  }, 0);

  return <p style={{ fontWeight: "bold" }}>Total number of exercises {res}</p>;
}

function Course({ course }) {
  return (
    <div>
      <Header courseName={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
}

export default Course;
