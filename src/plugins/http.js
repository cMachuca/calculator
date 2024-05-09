import axios from "axios";

const devInstance = createInstance("http://localhost:8000");
// const productionInstance = createInstance("http://localhost:3000"); // will change later

function createInstance(baseURL) {
  return axios.create({
    baseURL,
    withCredentials: true,
    withXSRFToken: true,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export default devInstance;
