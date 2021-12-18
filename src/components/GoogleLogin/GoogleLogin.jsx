import React from "react";
import {GoogleLogin as Login} from "react-google-login";

export default function GoogleLogin({handleLogin}) {
  console.log(process.env);
  return (
    <Login
      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
      buttonText="Log in with Google"
      onSuccess={handleLogin}
      onFailure={handleLogin}
      cookiePolicy={"single_host_origin"}
    />
  );
}
