import { ModalForm, ProForm, ProFormText } from '@ant-design/pro-components';
import { message } from 'antd';
import React from 'react';
import { createClass, updateClass } from '../../../../../../API/axios';

function ModalFormClass({ openModalForm, onChangeClickOpen, dataClass, onSuccess, disabledClass }) {
  // handle create class
  const handleCreateClass = (values) => {
    createClass(values).then((res) => {
      if (res.data?.success === true) {
        onSuccess();
        message.success(`Tạo lớp thành công`);
      } else if (res.data?.error?.code === 2) {
        // eslint-disable-next-line no-lone-blocks
        {
          res.data?.error?.errorDetailList.forEach((e) => message.error(e.message));
        }
      } else if (res.data?.error?.code === 500) {
        message.error(res.data?.error?.message);
      } else if (res.data?.error?.message === 'Access is denied') {
        message.warning('Bạn không có quyền truy cập');
      }
    });
  };

  // handle update class
  const handleUpdateClass = (id, values) => {
    updateClass(id, values).then((res) => {
      if (res.data?.success === true) {
        onSuccess();
        message.success(`Sửa lớp thành công`);
      } else if (res.data?.error?.code === 2) {
        // eslint-disable-next-line no-lone-blocks
        {
          res.data?.error?.errorDetailList.forEach((e) => message.error(e.message));
        }
      } else if (res.data?.error?.code === 500) {
        message.error(res.data?.error?.message);
      } else if (res.data?.error?.message === 'Access is denied') {
        message.warning('Bạn không có quyền truy cập');
      }
    });
  };
  return (
    <div>
      <ModalForm
        width={750}
        title={dataClass.id ? 'Sửa thông tin lớp' : 'Thêm lớp'}
        initialValues={dataClass}
        modalProps={{
          destroyOnClose: true,
          okText: dataClass.id ? 'Lưu' : 'Tạo',
          okType: 'primary',
          cancelText: 'Hủy',
        }}
        open={openModalForm}
        onFinish={(values) => {
          if (dataClass.id) {
            handleUpdateClass(dataClass.id, values);
          } else {
            handleCreateClass(values);
          }
        }}
        onOpenChange={onChangeClickOpen}
      >
        <ProForm.Group>
          <ProFormText
            rules={[{ required: true, message: 'Vui lòng nhập đầy đủ thông tin ' }]}
            width='md'
            name='id'
            label='Mã lớp'
            placeholder='Nhập mã lớp'
            disabled={disabledClass}
          />
          <ProFormText
            rules={[{ required: '^K[0-9]+-[0-9]+-', message: 'Vui lòng nhập đầy đủ thông tin ' }]}
            width='md'
            name='name'
            label='Tên lớp'
            placeholder='Nhập tên lớp học'
          />
        </ProForm.Group>
      </ModalForm>
    </div>
  );
}

export default ModalFormClass;
