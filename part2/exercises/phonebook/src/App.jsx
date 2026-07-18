import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterValue, setFilterValue] = useState("");

  function handleNewNameSubmission(event) {
    event.preventDefault();

    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }

    const newPersons = persons.concat([{ name: newName, number: newNumber }]);
    setPersons(newPersons);
    setNewName("");
    setNewNumber("");
  }

  function handleNewNameChange(event) {
    setNewName(event.target.value);
  }

  function handleNewNumberChange(event) {
    setNewNumber(event.target.value);
  }

  function handleFilterValueChange(event) {
    setFilterValue(event.target.value);
  }

  const personsToShow = persons.filter((person) => {
    return person.name.toLowerCase().includes(filterValue.toLowerCase());
  });

  return (
    <div>
      <h1>Phonebook</h1>
      <h2>add new</h2>
      <form onSubmit={handleNewNameSubmission}>
        <div>
          name: <input value={newName} onChange={handleNewNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNewNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        Search (case insensetive):
        <input value={filterValue} onChange={handleFilterValueChange} />
      </div>
      {personsToShow.map((person) => {
        return (
          <p key={person.name}>
            {person.name} {person.number}
          </p>
        );
      })}
    </div>
  );
};

export default App;
