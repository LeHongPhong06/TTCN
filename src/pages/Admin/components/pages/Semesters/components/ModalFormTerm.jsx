import { ModalForm, ProForm, ProFormText } from '@ant-design/pro-components';
import { message } from 'antd';
import React, { useState } from 'react';

function ModalFormTerm({ openForm, onChangeClickOpen, dataTerm, onSuccess }) {
  const [loading, setLoading] = useState();
  const handleCreateTerm = (value) => {
    setLoading(true);
    onSuccess();
    message.success('Tạo kì mới thành công');
  };
  const handleUpdateTerm = (value) => {
    onSuccess();
    message.success('Sửa thông tin kì thành công');
  };
  return (
    <div>
      <ModalForm
        width={750}
        title={dataTerm.id ? 'Sửa thông tin kì' : 'Thêm kì học mới'}
        initialValues={dataTerm}
        modalProps={{
          destroyOnClose: true,
          okText: dataTerm.id ? 'Lưu' : 'Tạo',
          okButtonProps: {
            loading,
            style: { backgroundColor: '#fff', color: '#000' },
          },
          cancelText: 'Hủy',
        }}
        open={openForm}
        onFinish={(value) => {
          if (dataTerm.id) {
            handleUpdateTerm(value);
          } else {
            handleCreateTerm(value);
          }
        }}
        onOpenChange={onChangeClickOpen}
      >
        <ProForm.Group>
          <ProFormText
            rules={[{ required: true, message: 'Vui lòng nhập đầy đủ thông tin' }]}
            width='md'
            name='termId'
            label='Mã học kì'
            placeholder='Nhập mã học kì'
          />
          <ProFormText
            rules={[{ required: true, message: 'Vui lòng nhập đầy đủ thông tin' }]}
            width='md'
            name='termName'
            label='Tên học kì'
            placeholder='Nhâp tên học kì ( ví dụ: Kì 1 - Năm 2020)'
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormText
            rules={[{ required: true, message: 'Vui lòng nhập đầy đủ thông tin' }]}
            width='md'
            name='numOfStu'
            label='Tổng số sinh viên trong khoa'
            placeholder='Nhập tổng số sinh viên trong khoa'
          />
          <ProFormText
            rules={[{ required: true, message: 'Vui lòng nhập đầy đủ thông tin' }]}
            width='md'
            name='excellent'
            label='Số lượng sinh viên hạnh kiểm xuất sắc'
            placeholder='Nhập số lượng sinh viên có hạnh kiểm xuất sắc'
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormText
            rules={[{ required: true, message: 'Vui lòng nhập đầy đủ thông tin' }]}
            width='md'
            name='good'
            label='Số lượng sinh viên hạnh kiểm tốt'
            placeholder='Nhập số sinh viên có hạnh kiểm tốt'
          />
          <ProFormText
            rules={[{ required: true, message: 'Vui lòng nhập đầy đủ thông tin' }]}
            width='md'
            name='fair'
            label='Số lượng sinh viên hạnh kiểm khá'
            placeholder='Nhập số lượng sinh viên có hạnh kiểm khá'
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormText
            rules={[{ required: true, message: 'Vui lòng nhập đầy đủ thông tin' }]}
            width='md'
            name='medium'
            label='Số lượng sinh viên hạnh kiểm trung bình'
            placeholder='Nhập số lượng sinh viên có hạnh kiểm trung bình'
          />
          <ProFormText
            rules={[{ required: true, message: 'Vui lòng nhập đầy đủ thông tin' }]}
            width='md'
            name='weak'
            label='Số lượng sinh viên hạnh kiểm yếu'
            placeholder='Nhập số lượng sinh viên có hạnh kiểm yếu'
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormText
            rules={[{ required: true, message: 'Vui lòng nhập đầy đủ thông tin' }]}
            width='md'
            name='worst'
            label='Số lượng sinh viên hạnh kiểm xuất kém'
            placeholder='Nhập số lượng sinh viên có hạnh kiểm kém'
          />
        </ProForm.Group>
      </ModalForm>
    </div>
  );
}

export default ModalFormTerm;
