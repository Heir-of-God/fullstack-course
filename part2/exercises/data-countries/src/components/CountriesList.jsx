function CountriesList({ countries, chooseCountryButtonOnClick }) {
  if (countries.length === 0) {
    return <div>No matches, specify another filter</div>;
  }

  if (countries.length > 10) {
    return <div>Too many matches, specify another filter</div>;
  }

  return (
    <div>
      {countries.map((country) => {
        return (
          <p key={country.name.common}>
            {country.name.common}{" "}
            <button
              onClick={() => chooseCountryButtonOnClick(country.name.common)}
            >
              Show
            </button>
          </p>
        );
      })}
    </div>
  );
}

export default CountriesList;
