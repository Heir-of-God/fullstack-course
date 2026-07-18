function PhonebookList({ personsToShow }) {
  return (
    <div>
      {personsToShow.map((person) => {
        return (
          <p key={person.name}>
            {person.name} {person.number}
          </p>
        );
      })}
    </div>
  );
}

export default PhonebookList;
