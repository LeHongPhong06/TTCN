import { ModalForm, ProForm, ProFormSelect, ProFormText, ProFormTextArea } from '@ant-design/pro-components';
import { message, notification } from 'antd';
import React, { useEffect, useState } from 'react';
import { createStudent, getMajorList, updateStudent } from '../../../../../../API/axios';
function ModalFormStudentInfo({ openForm, onChangeClickOpen, dataStudent, onSuccess, disabled }) {

  const [majorList, setMajorList] = useState([]);
  const optionMajor = majorList?.map((e) => {
    return { label: e.name, value: e.id };
  });

  const handleMajorList = () => {
    getMajorList({ page: 1, size: 10 }).then((res) => {
      if (res.data?.success) {
        setMajorList(res.data?.data?.items);
      }
    });
  };
  useEffect(() => handleMajorList(), []);

  const handleCreateStudent = (values) => {
    createStudent(values).then((res) => {
      if (res.data?.success === true) {
        onSuccess();
        notification.success({
          message: 'Thành công',
          description: 'Tạo sinh viên thành công',
          duration: 2,
        });
      } else if (res.data?.error?.code === 2) {
        // eslint-disable-next-line no-lone-blocks
        {
          res.data?.error?.errorDetailList.forEach((e) => message.error(e.message, 2));
        }
      } else if (res.data?.error?.code === 500) {
        message.error(res.data?.error?.message);
      }
    });
  };

  const handleUpdateStudent = (dataStudent, values) => {
    updateStudent(dataStudent.id, values).then((res) => {
      if (res.data?.success === true) {
        onSuccess();
        notification.success({
          message: 'Thành công',
          description: `Sửa sinh viên ${dataStudent.name} thành công`,
          duration: 2,
        });
      } else if (res.data?.error?.code === 2) {
        // eslint-disable-next-line no-lone-blocks
        {
          res.data?.error?.errorDetailList.forEach((e) => message.error(e.message, 2));
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
        title={dataStudent.id ? 'Sửa thông tin sinh viên' : 'Thêm sinh viên'}
        initialValues={dataStudent}
        modalProps={{
          destroyOnClose: true,
          okText: dataStudent.id ? 'Cập nhật' : 'Tạo mới',
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
            options={[
              { label: 'Nam', value: 'Nam' },
              { label: 'Nữ', value: 'Nữ' },
            ]}
            placeholder='Chọn giới tính'
          />
          <ProFormText rules={[{ required: true }]} width='md' name='dob' label='Ngày sinh' placeholder='Nhập ngày sinh' />
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
          <ProFormSelect
            rules={[{ required: true, message: 'Không được để trống' }]}
            width='md'
            name={['major', 'id']}
            label='Chuyên ngành'
            placeholder='Chọn chuyên ngành'
            options={optionMajor}
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
            placeholder='Tình trạng'
            options={[
              { label: 'Đã tốt nghiệp', value: 'graduated' },
              { label: 'Còn đi học', value: 'stillStudying' },
              { label: 'Bị buộc thôi học', value: 'forcedOut' },
              { label: 'Đã bỏ học', value: 'dropped' },
            ]}
            required={[{ require: true, message: 'Không được để trống' }]}
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
          <ProFormText width='md' name='residence' label='Nơi ở hiện tại' placeholder='Nhập nơi ở hiện tại của sinh viên' />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormText width='md' name='fatherName' label='Họ và tên bố' placeholder='Nhập họ tên bố ' />
          <ProFormText width='md' name='fatherPhoneNumber' label='Nhập số điện thoại bố' placeholder='Nhập số điện thoại bố' />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormText width='md' name='motherName' label='Họ và tên mẹ' placeholder='Nhập họ tên mẹ' />
          <ProFormText width='md' name='motherPhoneNumber' label='Nhập số điện thoại mẹ' placeholder='Nhập số điện thoại mẹ' />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormText width='md' name='statusDate' label='Thời gian' placeholder='Nhập thời gian' />
          <ProFormText width='md' name='password' label='Mật khẩu' placeholder='Nhập mật khẩu' />
        </ProForm.Group>
        {dataStudent.id && (
          <ProForm.Group>
            <ProFormTextArea width='md' name='warning' label='Diện cảnh cáo' placeholder='Tình trạng cảnh cáo' />
          </ProForm.Group>
        )}
      </ModalForm>
    </div>
  );
}

export default ModalFormStudentInfo;
