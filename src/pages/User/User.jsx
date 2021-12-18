import React, {useEffect} from "react";
import {useState} from "react";
import {getUser} from "../../services/users";
import Login from "../Login/Login";
import {Tabs} from "antd";
import Observing from "../Observing/Observing";
import Container from "../Container/Container";

const {TabPane} = Tabs;

export default function User() {
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(null);
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
  }, []);

  if (isAuth === null) {
    return <div>Loading Page</div>;
  } else if (isAuth === false) {
    return <Login />;
  }

  return (
    <Tabs defaultActiveKey="2" type="card" centered size="large" tabPosition="top">
      <TabPane tab="Observing" key={1}>
        <Observing resumis={user.observing.resumis}/>
      </TabPane>
      <TabPane tab="Container" key={2}>
        <Container resumis={user.container.resumis}/>
      </TabPane>
    </Tabs>
  );
}
