import React from "react";
import { useEffect } from "react";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File
import "./viewer.css";
const Viewer = ({defaultValue, onChange}) => {
    useEffect(()=>{
        const node=document.getElementsByClassName("sun-editor-editable")[0];
        console.log(node);
        node.setAttribute("contenteditable", false);
    },[])
  return (
    <div className="viewmode" onClick={()=>{return false}}>
      <SunEditor defaultValue={defaultValue} setDefaultStyle="height: auto; font-family:Verdana" />
    </div>
  );
};
export default Viewer;
