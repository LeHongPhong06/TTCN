import { ModalForm, ProForm, ProFormText } from '@ant-design/pro-components';
import { message } from 'antd';
import React, { useState } from 'react';
function ModalFormPoint({ openForm, onChangeClickOpen, dataMajor, onSuccess }) {
  const [loading, setLoading] = useState();
  const handleCreatePoints = (value) => {
    setLoading(true);
    onSuccess();
    message.success('Tạo chuyên ngành mới thành công');
  };
  const handleUpdatePoints = (value) => {
    onSuccess();
    message.success(`Sửa thông tin điểm ${dataMajor.majorName} thành công`);
  };

  return (
    <div>
      <ModalForm
        width={750}
        title={dataMajor.majorId ? 'Sửa thông tin điểm' : 'Thêm điểm'}
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
            handleUpdatePoints(value);
          } else {
            handleCreatePoints(value);
          }
        }}
        onOpenChange={onChangeClickOpen}
      >
        <ProForm.Group>
          <ProFormText
            rules={[{ required: true, message: 'Vui lòng nhập đầy đủ thông tin' }]}
            width='md'
            name='studentId'
            label='Mã sinh viên'
            placeholder='Nhập mã sinh viên. Ví dụ: 655103'
          />
          <ProFormText
            rules={[{ required: true, message: 'Vui lòng nhập đầy đủ thông tin' }]}
            width='md'
            name='termId'
            label='Mã học kì'
            placeholder='Nhập mã học kì. Ví dụ: 20211'
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormText
            width='md'
            rules={[{ required: true, message: 'Vui lòng chọn đầy đủ thông tin !' }]}
            name='DTBhe10'
            label='Điểm trung bình hệ 10'
            placeholder='Nhập điểm trung bình hệ 10'
          />
          <ProFormText
            width='md'
            rules={[{ required: true, message: 'Vui lòng chọn đầy đủ thông tin !' }]}
            name='DTBhe4'
            label='Điểm trung bình hệ 4'
            placeholder='Nhập điểm trung bình hệ 4'
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormText
            width='md'
            rules={[{ required: true, message: 'Vui lòng chọn đầy đủ thông tin !' }]}
            name='DRL'
            label='Điểm rèn luyện'
            placeholder='Nhập điểm rèn luyện'
          />
          <ProFormText
            width='md'
            rules={[{ required: true, message: 'Vui lòng chọn đầy đủ thông tin !' }]}
            name='TCTL'
            label='Tín chỉ tích lũy'
            placeholder='Nhập số tín chỉ tích lũy'
          />
        </ProForm.Group>
      </ModalForm>
    </div>
  );
}

export default ModalFormPoint;
