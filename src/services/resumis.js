import axios from "axios";
const base_url = process.env.REACT_APP_API + "/resumis";

const instance = axios.create({
  withCredentials: true,
  baseURL: base_url,
});

const isTitleFree = async (title) => {
  const {data:status} = await instance.get("/isTitleFree/"+title);
  return status;
};

const getResumi = async (title) => {
  const {data} = await instance.get("resumi/"+title);
  return data;
};


export {isTitleFree,getResumi};
