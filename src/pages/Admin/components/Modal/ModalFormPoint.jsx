import { ModalForm, ProForm, ProFormText } from '@ant-design/pro-components';
import { message } from 'antd';
import React from 'react';
import { createPoint, updatePoint } from '../../../../API/axios';
export function ModalFormPoint({ openForm, onChangeClickOpen, dataPoint, onSuccess, disabled }) {
  const handleCreatePoints = (values) => {
    createPoint(values).then((res) => {
      if (res.data?.success === true) {
        onSuccess();
        message.success('Tạo điểm học kỳ mới thành công');
      } else if (res.data?.error?.code === 2) {
        // eslint-disable-next-line no-lone-blocks
        {
          res.data?.error?.errorDetailList.forEach((e) => message.error(e.message));
        }
      } else if (res.data?.error?.code === 500) {
        message.error(res.data?.error?.message);
      }
    });
  };
  const handleUpdatePoints = (values) => {
    updatePoint(values).then((res) => {
      if (res.data?.success === true) {
        onSuccess();
        message.success(`Sửa thông tin điểm thành công`);
      } else if (res.data?.error?.code === 2) {
        // eslint-disable-next-line no-lone-blocks
        {
          res.data?.error?.errorDetailList.forEach((e) => message.error(e.message));
        }
      } else if (res.data?.error?.code === 500) {
        message.error(res.data?.error?.message);
      }
    });
  };

  return (
    <div>
      <ModalForm
        width={750}
        title={dataPoint.studentId ? 'Sửa thông tin điểm' : 'Thêm điểm'}
        initialValues={dataPoint}
        modalProps={{
          maskClosable: false,
          destroyOnClose: true,
          okText: dataPoint.studentId ? 'Lưu' : 'Tạo',
          okType: 'primary',
          cancelText: 'Hủy',
        }}
        open={openForm}
        onFinish={(value) => {
          if (dataPoint.studentId) {
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
            disabled={disabled}
          />
          <ProFormText
            rules={[{ required: true, message: 'Vui lòng nhập đầy đủ thông tin' }]}
            width='md'
            name='termId'
            label='Mã học kì'
            placeholder='Nhập mã học kì. Ví dụ: 20211'
            disabled={disabled}
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormText
            width='md'
            rules={[{ required: true, message: 'Vui lòng chọn đầy đủ thông tin !' }]}
            name='medScore10'
            label='Điểm trung bình hệ 10'
            placeholder='Nhập điểm trung bình hệ 10'
          />
          <ProFormText
            width='md'
            rules={[{ required: true, message: 'Vui lòng chọn đầy đủ thông tin !' }]}
            name='medScore4'
            label='Điểm trung bình hệ 4'
            placeholder='Nhập điểm trung bình hệ 4'
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormText
            width='md'
            rules={[{ required: true, message: 'Vui lòng chọn đầy đủ thông tin !' }]}
            name='trainingPoint'
            label='Điểm rèn luyện'
            placeholder='Nhập điểm rèn luyện'
          />
          <ProFormText
            width='md'
            rules={[{ required: true, message: 'Vui lòng chọn đầy đủ thông tin !' }]}
            name='creditsAccumulated'
            label='Tín chỉ tích lũy'
            placeholder='Nhập số tín chỉ tích lũy'
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormText
            width='md'
            rules={[{ required: true, message: 'Vui lòng chọn đầy đủ thông tin !' }]}
            name='scoreAccumulated10'
            label='Điểm trung bình tích lũy ( hệ 10 )'
            placeholder='Nhập điểm trung bình tích lũy ( hệ 10 )'
          />
          <ProFormText
            width='md'
            rules={[{ required: true, message: 'Vui lòng chọn đầy đủ thông tin !' }]}
            name='scoreAccumulated4'
            label='Điểm trung bình tích lũy ( hệ 4 )'
            placeholder='Nhập điểm trung bình tích lũy ( hệ 4 )'
          />
        </ProForm.Group>
      </ModalForm>
    </div>
  );
}
