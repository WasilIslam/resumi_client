import {Button, Divider, Spin, Switch} from "antd";
import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {getContainerResumi, updateResumiData} from "../../services/users";
import Editor from "../../components/SunEditor/Editor";
import Viewer from "../../components/SunEditor/Viewer";

//has edit and show options

function EditMode({defaultValue, onChange}) {
  return <Editor defaultValue={defaultValue} onChange={onChange} />;
}
function ViewMode({data}) {
  return <Viewer defaultValue={data} />;
}

export default function ContainerResumi() {
  const {title} = useParams();
  const [resumi, setResumi] = useState(null);
  const [editMode, setEditMode] = useState(true);
  const [uptodate, setUptodate] = useState(true);
  const setResumiData = (data) => {
    resumi.data = data;
    console.log(data);
    setResumi(resumi);
    setUptodate(false);
  };
  const updateResumi = async () => {
    await updateResumiData(resumi.title, resumi.data);
    setUptodate(true);
  };
  useEffect(() => {
    const initialize = async () => {
      const resumi = await getContainerResumi(title);
      console.log(resumi);
      setResumi(resumi);
    };
    initialize();
  }, [title]);
  if (!resumi) return <Spin tip="loading"></Spin>;
  return (
    <>
      <div style={{width: "100%", padding: "10px", display: "flex", justifyContent: "space-between", alignContent: "center"}}>
        <div style={{display: "flex", gap: "10px"}}>
          <h1 style={{lineHeight: "1"}}>{resumi.title}</h1>
        </div>
        <Switch onClick={setEditMode} checkedChildren="Edit Mode" unCheckedChildren="View Mode" checked={editMode} style={{zoom: "1.5"}} />
        <div>
          <Button onClick={updateResumi} disabled={uptodate} type={"primary"} size="large">
            {uptodate ? "up to date" : "update"}
          </Button>
        </div>
      </div>
      <Divider></Divider>
      <div>{editMode ? <EditMode defaultValue={resumi.data} onChange={setResumiData} /> : <ViewMode data={resumi.data} />}</div>
    </>
  );
}
