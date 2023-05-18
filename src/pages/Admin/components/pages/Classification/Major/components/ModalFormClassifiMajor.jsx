import { ModalForm, ProForm, ProFormText } from '@ant-design/pro-components';
import { message } from 'antd';
import React from 'react';
import { createClassificationsForCourse } from '../../../../../../../API/axios';

function ModalFormClassifiMajor({ openForm, onChangeClickOpen, dataIndex, onSuccess }) {
  // const handleUpdateStudent = (values) => {
  //   updateClassificationsForCourse(values).then((res) => {
  //     if (res.data?.success === true) {
  //       onSuccess();
  //       message.success('Tạo xếp loại khóa thành công');
  //     } else return message.error(res.data?.error?.message);
  //   });
  // };
  const handleCreateStudent = (values) => {
    createClassificationsForCourse(values).then((res) => {
      if (res.data?.success === true) {
        onSuccess();
        message.success('Tạo xếp loại khóa thành công');
      } else return message.error(res.data?.error?.message);
    });
  };
  return (
    <div>
      <ModalForm
        width={750}
        title={dataIndex.classId ? 'Sửa thông tin xếp loại khóa' : 'Thêm xếp loại khóa'}
        initialValues={dataIndex}
        modalProps={{
          destroyOnClose: true,
          okText: dataIndex.classId ? 'Lưu' : 'Tạo',
          cancelText: 'Hủy',
        }}
        open={openForm}
        onFinish={(values) => {
          handleCreateStudent(values);
          // if (dataIndex.courseId) {
          //   handleUpdateStudent(values);
          // } else {
          // }
        }}
        onOpenChange={onChangeClickOpen}
      >
        <ProForm.Group>
          <ProFormText
            rules={[{ required: true, message: 'Không được để trống' }]}
            width='md'
            name='courseId'
            label='Mã khóa'
            placeholder='Nhâp mã khóa'
          />
          <ProFormText
            rules={[{ required: true, message: 'Không được để trống' }]}
            width='md'
            name='termId'
            label='Mã học kỳ'
            placeholder='Nhập mã học kỳ'
          />
        </ProForm.Group>
      </ModalForm>
    </div>
  );
}

export default ModalFormClassifiMajor;
