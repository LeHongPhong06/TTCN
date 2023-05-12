import { ModalForm, ProForm, ProFormText } from '@ant-design/pro-components';
import { message } from 'antd';
import React from 'react';
import { createClassificationsForClass } from '../../../../../../../API/axios';

function ModalFormClassification({ openForm, onChangeClickOpen, dataIndex, onSuccess }) {
  // const handleUpdateStudent = (id, values) => {
  //   updateClassificationsForClass(id, values).then((res) => {
  //     if (res.data?.success === true) {
  //       onSuccess();
  //       message.success(`Cập nhật xếp loại học kỳ lớp ${dataIndex.classId} thành công`);
  //     } else return message.error(res.data?.error?.message);
  //   });
  // };
  const handleCreateStudent = (values) => {
    createClassificationsForClass(values).then((res) => {
      if (res.data?.success === true) {
        onSuccess();
        message.success('Tạo xếp loại học kỳ thành công');
      } else return message.error(res.data?.error?.message);
    });
  };
  return (
    <div>
      <ModalForm
        width={750}
        title={dataIndex.classId ? 'Sửa thông tin xếp loại học kỳ' : 'Thêm xếp loại học kỳ'}
        initialValues={dataIndex}
        modalProps={{
          destroyOnClose: true,
          okText: dataIndex.classId ? 'Lưu' : 'Tạo',
          cancelText: 'Hủy',
        }}
        open={openForm}
        onFinish={(values) => {
          handleCreateStudent(values);
          // if (dataIndex.classId) {
          //   handleUpdateStudent(dataIndex, values);
          // } else {
          // }
        }}
        onOpenChange={onChangeClickOpen}
      >
        <ProForm.Group>
          <ProFormText
            rules={[{ required: true, message: 'Không được để trống' }]}
            width='md'
            name='classId'
            label='Mã lớp'
            placeholder='Nhập mã lớp'
          />
          <ProFormText
            rules={[{ required: true, message: 'Không được để trống' }]}
            width='md'
            name='termId'
            label='Mã học kỳ'
            placeholder='Nhâp mã học kỳ'
          />
        </ProForm.Group>
      </ModalForm>
    </div>
  );
}

export default ModalFormClassification;
