import CountryFlag from "./CountryFlag";
import CountryGeneralInformation from "./CountryGeneralInformation";

function Country({ country }) {
  return (
    <div>
      <h1>
        {country.name.official} ({country.name.common})
      </h1>
      <CountryFlag country={country} />
      <CountryGeneralInformation country={country} />
    </div>
  );
}

export default Country;
