import { ModalForm, ProForm, ProFormSelect, ProFormText } from '@ant-design/pro-components';
import { message } from 'antd';
import React, { useState } from 'react';

function ModalFormAdmin({ openForm, onChangeClickOpen, dataAdmin, onSuccess }) {
  const [loading, setLoading] = useState();
  const handleCreateStudent = (value) => {
    setLoading(true);
    onSuccess();
    message.success('Tạo admin thành công');
  };
  const handleUpdateStudent = (value) => {
    onSuccess();
    message.success('Sửa thông tin admin thành công');
  };
  return (
    <div>
      <ModalForm
        width={750}
        title={dataAdmin.id ? 'Sửa thông tin admin' : 'Thêm admin'}
        initialValues={dataAdmin}
        modalProps={{
          destroyOnClose: true,
          okText: dataAdmin.id ? 'Lưu' : 'Tạo',
          okButtonProps: {
            loading,
            type: 'primary',
          },
          cancelText: 'Hủy',
        }}
        open={openForm}
        onFinish={(value) => {
          if (dataAdmin.id) {
            handleUpdateStudent(value);
          } else {
            handleCreateStudent(value);
          }
        }}
        onOpenChange={onChangeClickOpen}
      >
        <ProForm.Group>
          <ProFormText
            rules={[{ required: true, message: 'Không được để trống' }]}
            width='md'
            name='id'
            label='Tài khoản'
            placeholder='Nhập tên tài khoản'
          />
          <ProFormText
            rules={[{ required: true, message: 'Không được để trống' }]}
            width='md'
            name='password'
            label='Mật khẩu'
            placeholder='Nhập mật khẩu'
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormText
            rules={[{ required: true, message: 'Không được để trống' }]}
            width='md'
            name='user'
            label='Tên đăng nhập'
            placeholder='Nhập tên đăng nhập'
          />
          <ProFormSelect
            width='md'
            rules={[{ required: true, message: 'Không được để trống' }]}
            name='role'
            label='Vai trò'
            valueEnum={{
              admin: 'Admin',
              supermode: 'Super mod',
              mod: 'Mod',
            }}
            placeholder='Chọn vai trò'
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormText
            rules={[{ required: true, message: 'Không được để trống' }]}
            width='md'
            name='email'
            label='Email'
            placeholder='Nhập email'
          />
        </ProForm.Group>
      </ModalForm>
    </div>
  );
}

export default ModalFormAdmin;
