import { ModalForm, ProForm, ProFormDatePicker, ProFormSelect, ProFormText } from '@ant-design/pro-components';
import { Button, message } from 'antd';
import React, { useState } from 'react';
function ModalFormStudentInfo({ openForm, onChangeClickOpen, dataStudent, onSuccess }) {
  const [loading, setLoading] = useState();
  const handleCreateStudent = (value) => {
    setLoading(true);
    onSuccess();
    message.success('Tạo sinh viên thành công');
  };
  const handleUpdateStudent = (value) => {
    onSuccess();
    message.success('Sửa thông tin sinh viên thành công');
  };

  return (
    <div>
      <ModalForm
        width={750}
        title={dataStudent.id ? 'Sửa thông tin sinh viên' : 'Thêm sinh viên'}
        initialValues={dataStudent}
        modalProps={{
          destroyOnClose: true,
          okText: (
            <Button
              loading={loading}
              className='flex justify-center items-center border-none w-full h-full bg-transparent text-black p-auto'
            >
              {dataStudent.id ? 'Lưu' : 'Tạo'}
            </Button>
          ),
          cancelText: <Button className='flex justify-center items-center border-none w-full h-full'>Hủy</Button>,
        }}
        open={openForm}
        onFinish={(value) => {
          if (dataStudent.id) {
            handleUpdateStudent(value);
          } else {
            handleCreateStudent(value);
          }
        }}
        onOpenChange={onChangeClickOpen}
      >
        <ProForm.Group>
          <ProFormText
            rules={[{ required: true, message: 'Vui lòng nhập đầy đủ họ và tên !' }]}
            width='md'
            name='name'
            label='Họ và tên:'
            placeholder='Nhập họ và tên sinh viên...'
          />
          <ProFormText
            rules={[{ required: true, message: 'Vui lòng nhập mã sinh viên !' }]}
            width='md'
            name='studentId'
            label='Mã sinh viên:'
            placeholder='Nhâp mã sinh viên...'
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormSelect
            width='md'
            rules={[{ required: true, message: 'Vui lòng chọn đầy đủ thông tin !' }]}
            name='gender'
            label='Giới tính'
            valueEnum={{
              male: 'Nam',
              female: 'Nữ',
            }}
            placeholder='Chọn giới tính'
          />
          <ProFormDatePicker rules={[{ required: true }]} width='md' name='dateOfBirth' label='Ngày sinh:' />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormText
            rules={[{ required: true, message: 'Vui lòng nhập số điện thoại !' }]}
            width='md'
            name='phoneNumber'
            label='Số điện thoại:'
            placeholder='Nhập số điện thoại...'
          />
          <ProFormText
            rules={[{ required: true, message: 'Vui lòng nhập đầy đủ thông tin !' }]}
            width='md'
            name='email'
            label='Email:'
            placeholder='Nhập email...'
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormText
            rules={[{ required: true, message: 'Vui lòng nhập đầy đủ họ và tên !' }]}
            width='md'
            name='className'
            label='Lớp:'
            placeholder='Nhập lớp học...'
          />
          <ProFormText
            rules={[{ required: true, message: 'Vui lòng nhập đầy đủ thông tin !' }]}
            width='md'
            name='majorName'
            label='Chuyên ngành:'
            placeholder='Nhập chuyên ngành...'
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormText
            rules={[{ required: true, message: 'Vui lòng nhập đầy đủ thông tin !' }]}
            width='md'
            name='placeOfOrigin'
            label='Quê quán:'
            placeholder='Nhập quê quán...'
          />
          <ProFormText
            rules={[{ required: true, message: 'Vui lòng nhập đầy đủ thông tin !' }]}
            width='md'
            name='accommodation'
            label='Nơi ở hiện tại:'
            placeholder='Nhập nơi ở hiện tại của sinh viên...'
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormText
            rules={[{ required: true, message: 'Vui lòng nhập đầy đủ thông tin !' }]}
            width='md'
            name='parentName'
            label='Họ và tên bố ( mẹ ):'
            placeholder='Nhập họ tên bố ( mẹ )...'
          />
          <ProFormText
            rules={[{ required: true, message: 'Vui lòng nhập đầy đủ thông tin !' }]}
            width='md'
            name='parentNumberPhone'
            label='Nhập số điện thoại bố ( mẹ ):'
            placeholder='Nhập số điện thoại...'
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormSelect
            width='md'
            rules={[{ required: true, message: 'Vui lòng chọn đầy đủ thông tin !' }]}
            name='status'
            label='Tình trạng'
            valueEnum={{
              graduated: 'Đã tốt nghiệp',
              notgraduated: 'Chưa tốt nghiệp',
            }}
            placeholder='Tình trạng'
          />
        </ProForm.Group>
      </ModalForm>
    </div>
  );
}

export default ModalFormStudentInfo;
