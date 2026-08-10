const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(express.json());
app.use(express.static("dist"));

morgan.token("body-content", function (req, res) {
  return JSON.stringify(req.body);
});
const loggerMiddleware = morgan(
  `:method :url :status :res[content-length] - :response-time ms :body-content`,
);
app.use(loggerMiddleware);

let persons = [
  {
    id: "1",
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: "2",
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: "3",
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: "4",
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

function getNewId() {
  let newId;

  do {
    newId = Math.ceil(Math.random() * 10000 + 1);
  } while (persons.find((person) => person.id === newId));

  return newId;
}

app.get("/api/persons", (request, response) => {
  response.json(persons);
});

app.get("/api/persons/:id", (request, response) => {
  const requestedId = request.params.id;
  const requestedPerson = persons.find((person) => person.id == requestedId);

  if (!requestedPerson) {
    response.status(404).end();
  } else {
    response.json(requestedPerson);
  }
});

app.get("/info", (request, response) => {
  const date = new Date();
  const dateString = date.toString();
  response.send(
    `Phonebook has info for ${persons.length} people<br/>${dateString}`,
  );
});

app.post("/api/persons", (request, response) => {
  const newPersonData = request.body;

  if (!newPersonData.number || !newPersonData.name) {
    response
      .status(422)
      .json({ error: 'Fields "name" and "number" mustn\'t be empty!' });
    return;
  }

  const conflictPerson = persons.find(
    (person) => person.name === newPersonData.name,
  );
  if (conflictPerson) {
    response.status(409).json({
      error: `Record with "name = ${newPersonData.name}" already exists with"id = ${conflictPerson.id}"!`,
    });
    return;
  }

  const newPerson = {
    id: getNewId().toString(),
    name: newPersonData.name,
    number: newPersonData.number,
  };

  persons.push(newPerson);

  response.json(newPerson);
});

app.delete("/api/persons/:id", (request, response) => {
  const requestedId = request.params.id;
  const newPersons = persons.filter((person) => person.id !== requestedId);

  const responseStatus = newPersons.length === persons.length ? 404 : 204;
  persons = newPersons;

  response.status(responseStatus).end();
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
