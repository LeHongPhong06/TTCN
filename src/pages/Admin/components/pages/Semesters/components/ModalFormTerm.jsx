import { ModalForm, ProForm, ProFormText } from '@ant-design/pro-components';
import { message } from 'antd';
import React from 'react';
import { createSemester, updateSemester } from '../../../../../../API/axios';

function ModalFormTerm({ openForm, onChangeClickOpen, dataTerm, onSuccess }) {
  const handleCreateTerm = (values) => {
    createSemester(values).then((res) => {
      if (res.data?.success === true) {
        onSuccess();
        message.success('Tạo kỳ mới thành công');
      }
    });
  };
  const handleUpdateTerm = (id, values) => {
    updateSemester(id, values).then((res) => {
      if (res.data?.success === true) {
        onSuccess();
        message.success('Sửa thông tin kì thành công');
      }
    });
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
          cancelText: 'Hủy',
        }}
        open={openForm}
        onFinish={(value) => {
          if (dataTerm.id) {
            handleUpdateTerm(dataTerm.id, value);
          } else {
            handleCreateTerm(value);
          }
        }}
        onOpenChange={onChangeClickOpen}
      >
        <ProForm.Group>
          <ProFormText
            rules={[
              { required: true, message: 'Vui lòng nhập đầy đủ thông tin' },
              { pattern: '[0-9]{4}[1-2]', message: 'Mã học kỳ có dạng năm + học kỳ' },
              { min: 5, max: 5, message: 'Mã học kỳ chỉ dài 5 kí tự số' },
            ]}
            width='md'
            name='id'
            label='Mã học kì'
            placeholder='Nhập mã học kì, ví dụ: 20201'
          />
        </ProForm.Group>
      </ModalForm>
    </div>
  );
}

export default ModalFormTerm;
