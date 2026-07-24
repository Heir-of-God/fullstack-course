import { useState, useEffect } from "react";
import "./App.css";
import countriesService from "./services/countriesService";
import CountriesList from "./components/CountriesList";
import Country from "./components/Country";

function App() {
  const [inputText, setInputText] = useState("");
  const [countries, setCountries] = useState([]);

  function handleInputTextChange(event) {
    const newText = event.target.value;
    setInputText(newText);

    countriesService.getAllCountries().then((data) => {
      const names = data.filter((country) => {
        return (
          country.name.official.toLowerCase().includes(newText.toLowerCase()) ||
          country.name.common.toLowerCase().includes(newText.toLowerCase())
        );
      });
      setCountries(names);
    });
  }

  let informationToShow;

  if (countries.length == 1) {
    informationToShow = <Country country={countries[0]} />;
  } else {
    informationToShow = <CountriesList countries={countries} />;
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
