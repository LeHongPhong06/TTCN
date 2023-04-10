import { ModalForm, ProForm, ProFormText } from '@ant-design/pro-components';
import { message } from 'antd';
import React, { useState } from 'react';
function ModalFormCourse({ openForm, onChangeClickOpen, dataCourse, onSuccess }) {
  const [loading, setLoading] = useState();
  const handleCreateCourse = (value) => {
    setLoading(true);
    onSuccess();
    message.success('Tạo khóa mới thành công');
  };
  const handleUpdateCourse = (value) => {
    onSuccess();
    message.success('Sửa thông tin khóa thành công');
  };

  return (
    <div>
      <ModalForm
        width={750}
        title={dataCourse.courseId ? 'Sửa thông tin khóa' : 'Thêm khóa'}
        initialValues={dataCourse}
        modalProps={{
          destroyOnClose: true,
          okText: dataCourse.courseId ? 'Lưu' : 'Tạo',
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
          if (dataCourse.courseId) {
            handleUpdateCourse(value);
          } else {
            handleCreateCourse(value);
          }
        }}
        onOpenChange={onChangeClickOpen}
      >
        <ProForm.Group>
          <ProFormText
            rules={[{ required: true, message: 'Vui lòng nhập đầy đủ Thông tin' }]}
            width='md'
            name='courseId'
            label='Mã khóa'
            placeholder='Nhập mã khóa học, ví dụ: K65'
          />
          <ProFormText
            rules={[{ required: true, message: 'Vui lòng nhập đầy đủ thông tin' }]}
            width='md'
            name='courseName'
            label='Tên khóa'
            placeholder='Nhâp tên khóa, ví dụ: Khóa 65'
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormText
            rules={[{ required: true, message: 'Vui lòng nhập đầy đủ Thông tin' }]}
            width='md'
            name='quantity'
            label='Tổng số sinh viên'
            placeholder='Nhập tổng số sinh viên'
          />
        </ProForm.Group>
      </ModalForm>
    </div>
  );
}

export default ModalFormCourse;
