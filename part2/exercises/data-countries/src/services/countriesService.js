import axios from "axios";

const baseURL = "https://studies.cs.helsinki.fi/restcountries/api/";

function getAllCountries() {
  return axios.get(baseURL + "all").then((response) => {
    return response.data;
  });
}

export default { getAllCountries };
