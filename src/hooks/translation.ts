import axios from "axios";

export const translation = (text: string) => {
  try {
    const res = axios.post("http://43.201.20.119:8080/", {
      text: text,
    });
    console.log(res);
  } catch (error) {
    console.error(error);
  }
};
