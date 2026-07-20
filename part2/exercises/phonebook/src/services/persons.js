import axios from "axios";

const baseURL = "http://localhost:3001/persons";

function parseData(response) {
  return response.data;
}

function getAll() {
  return axios.get(baseURL).then(parseData);
}

function create(personObject) {
  return axios.post(baseURL, personObject).then(parseData);
}

function deleteEntry(personId) {
  return axios.delete(baseURL + `/${personId}`).then(parseData);
}

export default { getAll, create, deleteEntry };
