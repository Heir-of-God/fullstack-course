function Country({ country }) {
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
      <h1>
        {country.name.official} ({country.name.common})
      </h1>
      <div
        style={{
          display: "flex",
          height: "120px",
          gap: "16px",
          marginBottom: "20px",
        }}
      >
        <img
          src={country.flags.png}
          alt="country's flag"
          style={{ height: "100%", objectFit: "contain" }}
        />
        <img
          src={country.coatOfArms.png}
          alt="country's coat of arms"
          style={{ height: "100%", objectFit: "contain" }}
        />
      </div>
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
    </div>
  );
}

export default Country;
