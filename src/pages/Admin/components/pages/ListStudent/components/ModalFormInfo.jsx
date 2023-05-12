import { ModalForm, ProForm, ProFormDatePicker, ProFormSelect, ProFormText } from '@ant-design/pro-components';
import { message } from 'antd';
import React from 'react';
import { createStudent, updateStudent } from '../../../../../../API/axios';
function ModalFormStudentInfo({ openForm, onChangeClickOpen, dataStudent, onSuccess, disabled }) {
  const handleCreateStudent = (values) => {
    createStudent(values).then((res) => {
      if (res.data?.success === true) {
        onSuccess();
        message.success('Tạo sinh viên thành công');
      } else return message.error(res.data?.error?.message);
    });
  };
  const handleUpdateStudent = (dataStudent, values) => {
    updateStudent(dataStudent.id, values).then((res) => {
      if (res.data?.success === true) {
        onSuccess();
        message.success(`Sửa sinh viên ${dataStudent.name} thành công`);
      } else return message.error(res.data?.error?.message);
    });
  };

  return (
    <div>
      <ModalForm
        width={750}
        title={dataStudent.id ? 'Sửa thông tin sinh viên' : 'Thêm sinh viên'}
        initialValues={dataStudent}
        modalProps={{
          destroyOnClose: true,
          okText: dataStudent.id ? 'Lưu' : 'Tạo',
          cancelText: 'Hủy',
        }}
        open={openForm}
        onFinish={(values) => {
          if (dataStudent.id) {
            handleUpdateStudent(dataStudent, values);
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
            name='name'
            label='Họ và tên'
            placeholder='Nhập họ và tên sinh viên'
          />
          <ProFormText
            rules={[{ required: true, message: 'Không được để trống' }]}
            width='md'
            name='id'
            label='Mã sinh viên'
            placeholder='Nhâp mã sinh viên'
            disabled={disabled}
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormSelect
            width='md'
            rules={[{ required: true, message: 'Không được để trống' }]}
            name='gender'
            label='Giới tính'
            valueEnum={{
              Nam: 'Nam',
              Nữ: 'Nữ',
            }}
            placeholder='Chọn giới tính'
          />
          <ProFormText
            rules={[{ required: true }]}
            width='md'
            name='dob'
            label='Ngày sinh'
            placeholder='Nhập ngày sinh'
            // fieldProps={{
            //   format: ['DD/MM/YYYY'],
            // }}
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormText
            rules={[{ required: true, message: 'Không được để trống' }]}
            width='md'
            name='phoneNumber'
            label='Số điện thoại'
            placeholder='Nhập số điện thoại'
          />
          <ProFormText
            rules={[{ required: true, message: 'Không được để trống' }]}
            width='md'
            name='email'
            label='Email'
            placeholder='Nhập email'
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormText
            rules={[{ required: true, message: 'Không được để trống' }]}
            width='md'
            name={['course', 'id']}
            label='Khóa'
            placeholder='Nhập khóa học'
          />
          <ProFormText
            rules={[{ required: true, message: 'Không được để trống' }]}
            width='md'
            name={['major', 'id']}
            label='Chuyên ngành'
            placeholder='Nhập chuyên ngành'
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormText
            rules={[{ required: true, message: 'Không được để trống' }]}
            width='md'
            name={['classes', 'id']}
            label='Lớp'
            placeholder='Nhập lớp học'
          />
          <ProFormSelect
            width='md'
            name='status'
            label='Tình trạng'
            valueEnum={{
              graduated: 'Đã tốt nghiệp',
              stillStudying: 'Còn đi học',
              forcedOut: 'Bị buộc thôi học',
              dropped: 'Đã bỏ học',
            }}
            required={[
              {
                require: true,
                message: 'Không được để trống',
              },
            ]}
            placeholder='Tình trạng'
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormText
            rules={[{ required: true, message: 'Không được để trống' }]}
            width='md'
            name='homeTown'
            label='Quê quán'
            placeholder='Nhập quê quán'
          />
          <ProFormText
            width='md'
            name='residence'
            label='Nơi ở hiện tại'
            placeholder='Nhập nơi ở hiện tại của sinh viên'
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormText width='md' name='fatherName' label='Họ và tên bố' placeholder='Nhập họ tên bố ' />
          <ProFormText
            width='md'
            name='fatherPhoneNumber'
            label='Nhập số điện thoại bố'
            placeholder='Nhập số điện thoại bố'
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormText width='md' name='motherName' label='Họ và tên mẹ' placeholder='Nhập họ tên mẹ' />
          <ProFormText
            width='md'
            name='motherPhoneNumber'
            label='Nhập số điện thoại mẹ'
            placeholder='Nhập số điện thoại mẹ'
          />
          <ProFormDatePicker width='md' name='statusDate' label='Thời gian' />
          {!dataStudent.id && (
            <ProFormText width='md' name='password' label='Nhập mật khẩu' placeholder='Nhập mật khẩu' />
          )}
        </ProForm.Group>
      </ModalForm>
    </div>
  );
}

export default ModalFormStudentInfo;
