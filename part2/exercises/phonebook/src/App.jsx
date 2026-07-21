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
  const [notification, setNotification] = useState({
    text: null,
    type: "info",
  }); // type: warn, info

  useEffect(() => {
    personsService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  function updatePersonsWithoutId(idToDelete) {
    const newPersons = persons.filter((person) => person.id !== idToDelete);
    setPersons(newPersons);
  }

  function handleNewNameSubmission(event) {
    event.preventDefault();

    const existingEntry = persons.find((person) => person.name === newName);

    if (existingEntry) {
      const confirmed = confirm(
        `A number for ${newName} was already added. Update it with new one?`,
      );

      if (!confirmed) {
        showTimeLimitedNotifications(
          "info",
          "Updating person's number was aborted!",
          3,
        );
        return;
      }

      const updatedPersonToPass = { ...existingEntry, number: newNumber };

      personsService
        .update(updatedPersonToPass)
        .then((updatedPerson) => {
          const newPersons = persons.map((person) => {
            return person.id === updatedPerson.id ? updatedPerson : person;
          });
          setPersons(newPersons);
          showTimeLimitedNotifications(
            "info",
            `A number for ${newName} was successfully updated!`,
            3,
          );
          setNewName("");
          setNewNumber("");
        })
        .catch(() => {
          showTimeLimitedNotifications(
            "warn",
            `The person ${newName} doesn't exist!`,
            3,
          );
          updatePersonsWithoutId(updatedPersonToPass.id);
        });
    } else {
      const newPerson = { name: newName, number: newNumber };

      personsService
        .create(newPerson)
        .then((createdPerson) => {
          const newPersons = persons.concat([createdPerson]);
          setPersons(newPersons);
          showTimeLimitedNotifications(
            "info",
            `New record for ${newName} was successfully added!`,
            3,
          );
          setNewName("");
          setNewNumber("");
        })
        .catch(() => {
          showTimeLimitedNotifications(
            "warn",
            `An error occured while adding ${newName}!`,
            3,
          );
        });
    }
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
      showTimeLimitedNotifications("info", "Person deletion was cancelled!", 3);
      return;
    }

    personsService
      .deleteEntry(personId)
      .then(() => {
        showTimeLimitedNotifications(
          "info",
          `Record for ${personToDelete.name} was successfully deleted!`,
          3,
        );
        updatePersonsWithoutId(personId);
      })
      .catch(() => {
        showTimeLimitedNotifications(
          "warn",
          `Record for ${personToDelete.name} doesn't exist already!`,
          3,
        );
        updatePersonsWithoutId(personId);
      });
  }

  function showTimeLimitedNotifications(type, text, seconds) {
    setNotification({ text: text, type: type });
    const milliseconds = seconds * 1000;
    setTimeout(
      () => setNotification({ text: null, type: "info" }),
      milliseconds,
    );
  }

  const personsToShow = persons.filter((person) => {
    return person.name.toLowerCase().includes(filterValue.toLowerCase());
  });

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification message={notification} />
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
