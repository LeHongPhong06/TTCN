import { ModalForm, ProForm, ProFormSelect, ProFormText } from '@ant-design/pro-components';
import { message } from 'antd';
import React from 'react';
import { createAdmin, updateAdmin } from '../../../../../../API/axios';

function ModalFormAdmin({ openForm, onChangeClickOpen, dataAdmin, onSuccess, required }) {
  const handleCreateStudent = (values) => {
    createAdmin(values).then((res) => {
      if (res.data?.success === true) {
        onSuccess();
        message.success('Tạo admin thành công');
      } else return message.error(res.data?.error?.message);
    });
  };
  const handleUpdateStudent = (values) => {
    updateAdmin(values).then((res) => {
      if (res.data?.success === true) {
        onSuccess();
        message.success('Sửa thông tin admin thành công');
      } else return message.error(res.data?.error?.message);
    });
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
          cancelText: 'Hủy',
        }}
        open={openForm}
        onFinish={(values) => {
          if (dataAdmin.id) {
            handleUpdateStudent(values);
          } else {
            handleCreateStudent(values);
          }
        }}
        onOpenChange={onChangeClickOpen}
      >
        <ProForm.Group>
          <ProFormText
            rules={[{ required: true, message: 'Không được để trống' }]}
            width='md'
            name='id'
            label='Tên đăng nhập'
            placeholder='Nhập tên đăng nhập'
          />
          <ProFormText
            rules={[{ required: required, message: 'Không được để trống' }]}
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
            name='name'
            label='Tên người dùng'
            placeholder='Nhập tên người dùng'
          />
          <ProFormSelect
            width='md'
            rules={[{ required: true, message: 'Không được để trống' }]}
            name='roleId'
            label='Vai trò'
            valueEnum={{
              ADMIN: 'Admin',
              SUPERMOD: 'Super mod',
              MOD: 'Mod',
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
