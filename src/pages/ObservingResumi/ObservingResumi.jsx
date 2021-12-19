import {Button, Divider, Spin} from "antd";
import React, {useState, useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import Viewer from "../../components/SunEditor/Viewer";
import { getResumi } from "../../services/resumis";

function ViewMode({data}) {
  return <Viewer defaultValue={data} />;
}

export default function ContainerResumi() {
  const {title} = useParams();
  const [resumi, setResumi] = useState(null);
  useEffect(() => {
    const initialize = async () => {
      const resumi = await getResumi (title);
      setResumi(resumi);
    };
    initialize();
  }, [title]);
  const navigate=useNavigate();
  const goback=()=>{
    navigate(-1);
  }
  if (!resumi) return <Spin tip="loading"></Spin>;
  return (
    <>
      <div style={{width: "100%", padding: "10px", display: "flex", justifyContent: "space-between", alignContent: "center"}}>
        <Button onClick={goback}>←	</Button>
        <h1 style={{lineHeight: "1",fontSize:"15px"}}>{resumi.title}</h1>
      </div>
      <Divider></Divider>
      <div>{<ViewMode data={resumi.data} />}</div>
    </>
  );
}
