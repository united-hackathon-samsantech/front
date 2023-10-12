import { instance } from "@/apis/core";

const getRandomPhoto = async () => {
  try {
    return await instance.get(`/photo/list/1`);
  } catch (error) {
    console.error(error);
  }
};
