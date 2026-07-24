function CountryGeneralInformation({ country }) {
  const countryLangs = [];
  const currencies = [];

  for (const langAbbr in country.languages) {
    countryLangs.push(country.languages[langAbbr]);
  }

  for (const currencyAbbr in country.currencies) {
    currencies.push(
      country.currencies[currencyAbbr].name +
        " " +
        country.currencies[currencyAbbr].symbol,
    );
  }

  return (
    <div>
      <div>Capital: {country.capital}</div>
      <div>Area: {country.area}</div>
      <div>Population: {country.population}</div>
      <div>
        Region: {country.region} (
        <a href={country.maps.googleMaps}>Google maps</a>)
      </div>

      <div>
        Languages:
        <ul>
          {countryLangs.map((language) => (
            <li key={language}>{language}</li>
          ))}
        </ul>
      </div>

      <div>
        Currencies:
        <ul>
          {currencies.map((currency) => (
            <li key={currency}>{currency}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CountryGeneralInformation;
