import React from "react";
import GoogleLogin from "../../components/GoogleLogin/GoogleLogin";
import {googleLogin} from "../../services/users";

const handleLogin = async (googleData) => {
  const data=await googleLogin(googleData);
  console.log(data);
};

export default function Login() {
  return (
    <div>
      <GoogleLogin handleLogin={handleLogin} />
    </div>
  );
}
