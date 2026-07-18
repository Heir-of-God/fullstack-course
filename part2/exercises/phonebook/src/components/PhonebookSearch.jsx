function PhonebookSearch({ filterValue, handleFilterValueChange }) {
  return (
    <div>
      Search (case insensetive):
      <input value={filterValue} onChange={handleFilterValueChange} />
    </div>
  );
}

export default PhonebookSearch;
