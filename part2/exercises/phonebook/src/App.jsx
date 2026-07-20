import { useState, useEffect } from "react";
import NewPersonForm from "./components/NewRecordForm";
import PhonebookSearch from "./components/PhonebookSearch";
import PhonebookList from "./components/PhonebookList";
import personsService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterValue, setFilterValue] = useState("");

  useEffect(() => {
    personsService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  function handleNewNameSubmission(event) {
    event.preventDefault();

    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }

    const newPerson = { name: newName, number: newNumber };

    personsService.create(newPerson).then((createdPerson) => {
      const newPersons = persons.concat([createdPerson]);
      setPersons(newPersons);
    });

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

  function handleDelete(personId) {
    const confirmed = confirm(
      `Are you sure you want to delete ${persons.find((person) => person.id === personId).name}`,
    );
    if (!confirmed) {
      return;
    }

    personsService.deleteEntry(personId);

    const newPersons = persons.filter((person) => person.id !== personId);
    setPersons(newPersons);
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
      <PhonebookList
        personsToShow={personsToShow}
        handleDeleteFunction={handleDelete}
      />
    </div>
  );
};

export default App;
