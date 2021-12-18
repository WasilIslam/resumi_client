import {Divider, Spin} from "antd";
import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
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
  if (!resumi) return <Spin tip="loading"></Spin>;
  return (
    <>
      <div style={{width: "100%", padding: "10px", display: "flex", justifyContent: "space-between", alignContent: "center"}}>
        <h1 style={{lineHeight: "1"}}>{resumi.title}</h1>
      </div>
      <Divider></Divider>
      <div>{<ViewMode data={resumi.data} />}</div>
    </>
  );
}
