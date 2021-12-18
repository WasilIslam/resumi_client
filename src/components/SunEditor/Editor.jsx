import React from "react";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File

const Editor = ({defaultValue, onChange, viewMode}) => {
  return (
    <SunEditor
      defaultValue={defaultValue}
      onChange={onChange}
      showToolbar={true}
      setDefaultStyle="height: auto; font-family:Verdana"
      setOptions={{
        buttonList: [
          ["bold", "underline", "italic", "strike", "list", "align", "font", "fontColor", "fontSize", "formatBlock", "table", "image","save"],
        ],
      }}
    />
  );
};
export default Editor;
