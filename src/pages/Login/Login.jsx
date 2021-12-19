import {Button, Divider, Input, Space, Switch} from "antd";
import React from "react";
import {useState} from "react";
import GoogleLogin from "../../components/GoogleLogin/GoogleLogin";
import {logIn, signUp} from "../../services/users";
import {isMobile} from "react-device-detect"
// const handleLogin = async (googleData) => {
//   const data = await googleLogin(googleData);
//   console.log(data);
// };

function SignUp({setIsAuth}) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const signup = async () => {
    try {
      await signUp(name, email, password);
      setIsAuth(true);
    } catch (err) {
      alert(err);
    }
  };
  return (
    <>
      <h1>Sign Up</h1>
      <Space direction="vertical" style={{width: "300px"}}>
        <Input value={name} placeholder="Name" onChange={(e) => setName(e.target.value)}></Input>

        <Input value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)}></Input>
        <div style={{display: "flex", gap: "5px"}}>
          <Input.Password value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)}></Input.Password>
          <Button onClick={signup}>Sign Up</Button>
        </div>
      </Space>
    </>
  );
}
function Login({setIsAuth}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = async () => {
    try {
      await logIn(email, password);
      setIsAuth(true);
    } catch (err) {
      alert(err);
    }
  };
  return (
    <>
      <h1>Login</h1>
      <Space direction="vertical" style={{width: "300px"}}>
        <Input value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)}></Input>
        <div style={{display: "flex", gap: "5px"}}>
          <Input.Password value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)}></Input.Password>
          <Button onClick={login}>Login</Button>
        </div>
      </Space>
    </>
  );
}

export default function Auth({setIsAuth}) {
  const [logorsign, setLogorsign] = useState(1);
  return (
    <div
      style={{
        marginLeft: "50%",
        textAlign: "center",
        transform: "translateX(-50%)",
        
        width: isMobile? "100%":"50%",
        padding: "30px",
        marginTop: "10%",
        border: "1px solid darkgrey",
        borderRadius: "10px",
      }}
    >
      <div>
        <h1 style={{fontFamily: "Verdana", color: "darkblue"}}>Resumi</h1>
        <Switch checked={logorsign} onChange={setLogorsign} />
        {logorsign ? <Login setIsAuth={setIsAuth} /> : <SignUp setIsAuth={setIsAuth} />}
      </div>
      <Divider>or</Divider>
      <div style={{display: "flex", justifyContent: "space-between"}}>
        <GoogleLogin />
      </div>
    </div>
  );
}
