import axios, { AxiosResponse } from "axios";
import * as T from "../types/api/";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

const IMG_API = {
  get() {
    const response: Promise<AxiosResponse<T.GetImg[]>> = instance.get(
      "photos?_page=1&_limit=30"
    );
    return response;
  },
};

export default IMG_API;
