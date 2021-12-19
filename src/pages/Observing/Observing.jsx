import {Alert, Button, Input, List, Modal, Typography} from "antd";
import React from "react";
import {isTitleFree} from "../../services/resumis";
import {Link, useNavigate} from "react-router-dom";
import {observeResumi} from "../../services/users";
const {Title} = Typography;

function NewResumiInit() {
  const [visible, setVisible] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = React.useState(false);
  const [resumiTitle, setResumiTitle] = React.useState("");
  const [AlertMessage, setAlertMessage] = React.useState("");
  const navigate = useNavigate();

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = async () => {
    try {
      setConfirmLoading(true);
      await observeResumi(resumiTitle);
      navigate("view/" + resumiTitle);
      setConfirmLoading(false);
      setVisible(false);
    } catch (err) {
      alert(err);
    }
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };
  const filter = (val) => {
    return val.replace(" ", "-").toLowerCase();
  };
  const handleResumiInput = async (val) => {
    if (val === "") return setResumiTitle(val);
    if (await isTitleFree(val)) setAlertMessage("Resumi Not Found");
    else {
      setAlertMessage(null);
    }
    setResumiTitle(filter(val));
  };
  return (
    <>
      <Button type="primary" size="large" onClick={showModal}>
        Observe Resumi
      </Button>
      <Modal
        okButtonProps={{disabled: AlertMessage ? true : false}}
        title="Title"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <Input placeholder="Enter Title for Resumi..." size="large" value={resumiTitle} onChange={(e) => handleResumiInput(e.target.value)}></Input>
        {AlertMessage && <Alert message={AlertMessage} showIcon type="error" />}
      </Modal>
    </>
  );
}

export default function Container({resumis}) {
  const header = (
    <div style={{display: "flex", justifyContent: "space-between"}}>
      <Title level={3}>Observing</Title>
      <NewResumiInit />
    </div>
  );
  return (
    <div>
      <List
        style={{margin:"10px"}}
        bordered
        header={header}
        dataSource={resumis}
        renderItem={(resumi) => (
          <List.Item>
            <Link to={"view/" + resumi}>{resumi}</Link>
          </List.Item>
        )}
      />
    </div>
  );
}
