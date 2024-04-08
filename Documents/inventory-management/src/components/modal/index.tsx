import React, { useState } from 'react';
import { Button, Modal } from 'antd';

const ModalBox: React.FC = ({title,content,isModalOpen,handleCancel,handleOk}: any) => {

  return (
    <>
      <Modal title={title} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        {content}
      </Modal>
    </>
  );
};

export default ModalBox;