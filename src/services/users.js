import axios from "axios";
const base_url = process.env.REACT_APP_API + "/users";

const instance = axios.create({
  withCredentials: true,
  baseURL: base_url,
});

const getUser = async () => {
  const {data: user} = await instance.get();
  return user;
};
const googleLogin = async (googleData) => {
  console.log(googleData);
  const {data} = await instance.post("googleLogin", {
    token: googleData.tokenId,
  });
  return data;
};
const logIn = async (email, password) => {
  const {data} = await instance.post("logIn", {
    email,
    password,
  });
  return data;
};
const logOut = async () => {
  const {data} = await instance.post("logOut");
  return data;
};
const signUp = async (name, email, password) => {
  const {data} = await instance.post("signUp", {
    name,
    email,
    password,
  });
  return data;
};

const getContainerResumis = async () => {
  return await instance.get("getContainerResumis");
};
const getContainerResumi = async (title) => {
  const {data} = await instance.get("getContainerResumi/" + title);
  return data;
};
const getObservingResumis = async () => {
  const {data} = await instance.get("getObservingResumis");
  return data;
};
const observeResumi = async (resumiTitle) => {
  const res = await instance.post("observeResumi", {resumiTitle});
  return res.data;
};
const saveResumi = async (resumiTitle) => {
  const res = await instance.post("saveResumi", {resumiTitle});
  return res.data;
};
const updateResumiData = async (resumiTitle, resumiData) => {
  const res = await instance.post("updateResumi", {resumiTitle, resumiData});
  return res.data;
};
export {
  googleLogin,
  logIn,
  logOut,
  signUp,
  getUser,
  getContainerResumi,
  getContainerResumis,
  getObservingResumis,
  observeResumi,
  saveResumi,
  updateResumiData,
};
