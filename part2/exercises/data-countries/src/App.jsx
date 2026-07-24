import { useState } from "react";
import "./App.css";
import countriesService from "./services/countriesService";
import CountriesList from "./components/CountriesList";
import Country from "./components/Country";

function App() {
  const [inputText, setInputText] = useState("");
  const [countries, setCountries] = useState([]);

  function updateCountries(seachValue) {
    countriesService.getAllCountries().then((data) => {
      const countries = data.filter((country) => {
        return (
          country.name.official
            .toLowerCase()
            .includes(seachValue.toLowerCase()) ||
          country.name.common.toLowerCase().includes(seachValue.toLowerCase())
        );
      });

      for (const country of countries) {
        if (
          country.name.common.toLowerCase() === seachValue.toLowerCase() ||
          country.name.official.toLowerCase() === seachValue.toLowerCase()
        ) {
          setCountries([country]);
          return;
        }
      }

      setCountries(countries);
    });
  }

  function handleButtonClickOnSpecificCountry(countryName) {
    const newText = countryName;
    setInputText(newText);
    updateCountries(newText);
  }

  function handleInputTextChange(event) {
    const newText = event.target.value;
    setInputText(newText);
    updateCountries(newText);
  }

  let informationToShow;

  if (countries.length == 1) {
    informationToShow = <Country country={countries[0]} />;
  } else {
    informationToShow = (
      <CountriesList
        countries={countries}
        chooseCountryButtonOnClick={handleButtonClickOnSpecificCountry}
      />
    );
  }

  return (
    <>
      <p>
        Find countries{" "}
        <input
          value={inputText}
          placeholder="Enter country's name..."
          onChange={handleInputTextChange}
        />
      </p>
      {informationToShow}
    </>
  );
}

export default App;
