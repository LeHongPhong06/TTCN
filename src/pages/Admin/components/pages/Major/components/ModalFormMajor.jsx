import { ModalForm, ProForm, ProFormText } from '@ant-design/pro-components';
import { message } from 'antd';
import React, { useState } from 'react';
function ModalFormMajor({ openForm, onChangeClickOpen, dataMajor, onSuccess }) {
  const [loading, setLoading] = useState();
  const handleCreateStudent = (value) => {
    setLoading(true);
    onSuccess();
    message.success('Tạo chuyên ngành mới thành công');
  };
  const handleUpdateStudent = (value) => {
    onSuccess();
    message.success(`Sửa thông tin chuyên ngành ${dataMajor.majorName} thành công`);
  };

  return (
    <div>
      <ModalForm
        width={750}
        title={dataMajor.majorId ? 'Sửa thông tin chuyên ngành' : 'Thêm chuyên ngành'}
        initialValues={dataMajor}
        modalProps={{
          destroyOnClose: true,
          okText: dataMajor.majorId ? 'Lưu' : 'Tạo',
          okType: 'primary',
          okButtonProps: {
            loading,
            backgroundColor: '#fff',
            color: '#000',
          },
          cancelText: 'Hủy',
        }}
        open={openForm}
        onFinish={(value) => {
          if (dataMajor.majorId) {
            handleUpdateStudent(value);
          } else {
            handleCreateStudent(value);
          }
        }}
        onOpenChange={onChangeClickOpen}
      >
        <ProForm.Group>
          <ProFormText
            rules={[{ required: true, message: 'Vui lòng nhập đầy đủ thông tin' }]}
            width='md'
            name='majorId'
            label='Mã chuyên ngành'
            placeholder='Nhập mã chuyên ngành. Ví dụ: CNTT'
          />
          <ProFormText
            rules={[{ required: true, message: 'Vui lòng nhập đầy đủ thông tin' }]}
            width='md'
            name='majorName'
            label='Tên chuyên ngành:'
            placeholder='Nhập tên chuyên ngành. Ví dụ: Công nghệ thông tin'
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormText
            width='md'
            rules={[{ required: true, message: 'Vui lòng chọn đầy đủ thông tin !' }]}
            name='quantity'
            label='Số lượng sinh viên'
            placeholder='Nhập số lượng sinh viên'
          />
        </ProForm.Group>
      </ModalForm>
    </div>
  );
}

export default ModalFormMajor;
