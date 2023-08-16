import React, { useState } from "react";
import { Button, Modal } from "antd";
import { IPropsModal } from "@/interfaces/props/IPropsModal";

const Modall = (props: IPropsModal) => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <button onClick={showModal} className={props.buttonClassName}>
        {props.modalName}
      </button>
      <Modal
        title={props.title}
        open={open}
        onCancel={handleCancel}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        footer={[
          <Button
            key="cancel"
            onClick={handleCancel}
            className="border-red-600 text-xl text-red-600 border-2 hover:!text-red-500 hover:!border-red-500 h-10 font-semibold"
          >
            Cancel
          </Button>,
          <Button
            key="ok"
            onClick={handleOk}
            className="border-blue-600 text-xl bg-blue-600 text-white border-2 hover:!text-white hover:!border-blue-500 h-10 font-semibold"
          >
            Save
          </Button>,
        ]}
        className={props.modalClassName}
      >
        {props.modalContent}
      </Modal>
    </>
  );
};

export default Modall;
