import { useState } from "react";
import NewPersonForm from "./components/NewRecordForm";
import PhonebookSearch from "./components/PhonebookSearch";
import PhonebookList from "./components/PhonebookList";

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
      <NewPersonForm
        newName={newName}
        newNumber={newNumber}
        handleNewNameChange={handleNewNameChange}
        handleNewNumberChange={handleNewNumberChange}
        handleNewNameSubmission={handleNewNameSubmission}
      />
      <h2>Numbers</h2>
      <PhonebookSearch
        filterValue={filterValue}
        handleFilterValueChange={handleFilterValueChange}
      />
      <PhonebookList personsToShow={personsToShow} />
    </div>
  );
};

export default App;
