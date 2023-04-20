import axios from "axios";

const IMG_API = {
  get() {
    const response = axios.get(
      "https://jsonplaceholder.typicode.com/photos?_page=1&_limit=30"
    );
    return response;
  },
};

export default IMG_API;
