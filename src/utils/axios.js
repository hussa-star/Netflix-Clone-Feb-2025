import axios from "axios";
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});
export default instance;

// https://api.themoviedb.org/3 base for image
