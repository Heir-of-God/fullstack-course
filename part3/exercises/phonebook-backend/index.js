const express = require("express");
const app = express();

app.use(express.json());

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
    response.status(422).end();
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

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
