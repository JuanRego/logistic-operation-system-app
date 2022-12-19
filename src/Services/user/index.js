import axios from "axios";

const app = axios.create({
  baseURL: "https://url/",
});

export default app;
