import { ModalForm, ProForm, ProFormText } from '@ant-design/pro-components';
import { message } from 'antd';
import React, { useState } from 'react';

function ModalFormClass({ openModalForm, onChangeClickOpen, dataClass, onSuccess }) {
  const [loading, setLoading] = useState();
  const handleCreateClass = (value) => {
    setLoading(true);
    onSuccess();
    message.success(`Tạo lớp thành công`);
  };
  const handleUpdateClass = (value) => {
    onSuccess();
    message.success(`Sửa thông tin lớp ${dataClass.classId} thành công`);
  };
  return (
    <div>
      <ModalForm
        width={750}
        title={dataClass.classId ? 'Sửa thông tin lớp' : 'Thêm lớp'}
        initialValues={dataClass}
        modalProps={{
          destroyOnClose: true,
          okText: '',
          okButtonProps: { loading },
          okType: 'primary',
          cancelText: 'Hủy',
        }}
        open={openModalForm}
        onFinish={(value) => {
          if (dataClass.id) {
            handleUpdateClass(value);
          } else {
            handleCreateClass(value);
          }
        }}
        onOpenChange={onChangeClickOpen}
      >
        <ProForm.Group>
          <ProFormText
            rules={[{ required: true, message: 'Vui lòng nhập đầy đủ họ và tên !' }]}
            width='md'
            name='className'
            label='Tên lớp'
            placeholder='Nhập tên lớp học...'
          />
          <ProFormText
            rules={[{ required: true, message: 'Vui lòng nhập đầy đủ thông tin !' }]}
            width='md'
            name='classId'
            label='Mã lớp'
            placeholder='Nhập mã lớp...'
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormText
            rules={[{ required: true, message: 'Vui lòng nhập đầy đủ họ và tên !' }]}
            width='md'
            name='quantity'
            label='Số sinh viên trong lớp'
            placeholder='Nhập tổng số sinh viên trong lớp'
          />
        </ProForm.Group>
      </ModalForm>
    </div>
  );
}

export default ModalFormClass;
