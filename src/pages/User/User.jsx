import React, {useEffect} from "react";
import {useState} from "react";
import {getUser, logOut} from "../../services/users";
import Login from "../Login/Login";
import {Button, Spin, Tabs} from "antd";
import Observing from "../Observing/Observing";
import Container from "../Container/Container";

const {TabPane} = Tabs;

export default function User() {
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(null);
  const logout=async()=>{await logOut();setIsAuth(false)}
  useEffect(() => {
    const initialize = async () => {
      try {
        const user = await getUser();
        console.log(user);
        setUser(user);
        setIsAuth(true);
      } catch (err) {
        setIsAuth(false);
      }
    };
    initialize();
  }, [isAuth]);

  if (isAuth === null) {
    return <div>Loading Page</div>;
  } else if (isAuth === false) {
    return <Login setIsAuth={setIsAuth}/>;
  }
  if(!user)return <Spin/>
  return (
    <>
    <div style={{width:"100%",textAlign:"right"}}>
      <Button onClick={logout}>Logout</Button>
    </div>
    <Tabs defaultActiveKey="2" type="card" centered size="large" tabPosition="top">
      <TabPane tab="Observing" key={1}>
        <Observing resumis={user.observing.resumis}/>
      </TabPane>
      <TabPane tab="Container" key={2}>
        <Container resumis={user.container.resumis}/>
      </TabPane>
    </Tabs>
    </>
  );
}
