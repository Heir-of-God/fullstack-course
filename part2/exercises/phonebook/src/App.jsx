import { useState, useEffect } from "react";
import NewPersonForm from "./components/NewRecordForm";
import PhonebookSearch from "./components/PhonebookSearch";
import PhonebookList from "./components/PhonebookList";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterValue, setFilterValue] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  }, []);

  function handleNewNameSubmission(event) {
    event.preventDefault();

    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
      return;
    }

    const newPerson = { name: newName, number: newNumber };

    axios.post("http://localhost:3001/persons", newPerson).then((response) => {
      const newPersons = persons.concat([response.data]);
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
