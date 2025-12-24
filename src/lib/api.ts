import axios from "axios";


const API = process.env.NEXT_PUBLIC_API_URL;


export const searchFace = async (file: File) => {
  const form = new FormData();
  form.append("file", file);

  const res = await axios.post(`${API}/search`, form);
  return res.data;
};

export const uploadPhoto = async (file: File) => {
  const form = new FormData();
  form.append("file", file);

  await axios.post(`${API}/upload-photo`, form);
};
