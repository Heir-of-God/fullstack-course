function PhonebookList({ personsToShow, handleDeleteFunction }) {
  return (
    <div>
      {personsToShow.map((person) => {
        return (
          <p key={person.id}>
            {person.name} {person.number}
            <button onClick={() => handleDeleteFunction(person.id)}>
              Delete
            </button>
          </p>
        );
      })}
    </div>
  );
}

export default PhonebookList;
