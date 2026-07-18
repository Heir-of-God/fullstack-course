function NewPersonForm({
  newName,
  newNumber,
  handleNewNameChange,
  handleNewNumberChange,
  handleNewNameSubmission,
}) {
  return (
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
  );
}

export default NewPersonForm;
