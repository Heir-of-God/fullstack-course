function CountriesList({ countries }) {
  if (countries.length === 0) {
    return <div>No matches, specify another filter</div>;
  }

  if (countries.length > 10) {
    return <div>Too many matches, specify another filter</div>;
  }

  return (
    <div>
      {countries.map((country) => {
        return <p key={country.name.common}>{country.name.common}</p>;
      })}
    </div>
  );
}

export default CountriesList;
