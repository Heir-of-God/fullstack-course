import { useState, useEffect } from "react";
import NewPersonForm from "./components/NewRecordForm";
import PhonebookSearch from "./components/PhonebookSearch";
import PhonebookList from "./components/PhonebookList";
import personsService from "./services/persons";
import Notification from "./components/Notification";
import "./App.css";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [notificationText, setNotificationText] = useState("");

  useEffect(() => {
    personsService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  function handleNewNameSubmission(event) {
    event.preventDefault();

    const existingEntry = persons.find((person) => person.name === newName);

    if (existingEntry) {
      const confirmed = confirm(
        `A number for ${newName} was already added. Update it with new one?`,
      );

      if (!confirmed) {
        return;
      }

      const updatedPersonToPass = { ...existingEntry, number: newNumber };

      personsService.update(updatedPersonToPass).then((updatedPerson) => {
        const newPersons = persons.map((person) => {
          return person.id === updatedPerson.id ? updatedPerson : person;
        });
        setPersons(newPersons);
      });
      showTimeLimitedNotifications(
        `A number for ${newName} was successfully updated!`,
        3,
      );
    } else {
      const newPerson = { name: newName, number: newNumber };

      personsService.create(newPerson).then((createdPerson) => {
        const newPersons = persons.concat([createdPerson]);
        setPersons(newPersons);
      });

      showTimeLimitedNotifications(
        `New record for ${newName} was successfully added!`,
        3,
      );
    }

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
    const personToDelete = persons.find((person) => person.id === personId);
    const confirmed = confirm(
      `Are you sure you want to delete ${personToDelete.name}`,
    );
    if (!confirmed) {
      return;
    }

    personsService.deleteEntry(personId);

    const newPersons = persons.filter((person) => person.id !== personId);
    setPersons(newPersons);

    showTimeLimitedNotifications(
      `Record for ${personToDelete.name} was successfully deleted!`,
      3,
    );
  }

  function showTimeLimitedNotifications(message, seconds) {
    setNotificationText(message);
    const milliseconds = seconds * 1000;
    setTimeout(() => setNotificationText(""), milliseconds);
  }

  const personsToShow = persons.filter((person) => {
    return person.name.toLowerCase().includes(filterValue.toLowerCase());
  });

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification message={notificationText} />
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
