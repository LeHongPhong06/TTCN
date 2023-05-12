import { ModalForm, ProForm, ProFormText } from '@ant-design/pro-components';
import { message } from 'antd';
import React from 'react';
import { createCourse, updateCourse } from '../../../../../../API/axios';
function ModalFormCourse({ openForm, onChangeClickOpen, dataCourse, onSuccess }) {
  const handleCreateCourse = (values) => {
    createCourse(values).then((res) => {
      if (res.data?.success === true) {
        onSuccess();
        message.success('Tạo khóa mới thành công');
      }
    });
  };
  const handleUpdateCourse = (id, values) => {
    updateCourse(id, values).then((res) => {
      if (res.data?.success === true) {
        onSuccess();
        message.success('Sửa thông tin khóa thành công');
      }
    });
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
            backgroundColor: '#fff',
            color: '#000',
          },
          cancelText: 'Hủy',
        }}
        open={openForm}
        onFinish={(value) => {
          if (dataCourse.id) {
            handleUpdateCourse(dataCourse.id, value);
          } else {
            handleCreateCourse(value);
          }
        }}
        onOpenChange={onChangeClickOpen}
      >
        <ProForm.Group>
          <ProFormText
            rules={[
              { required: true, message: 'Vui lòng nhập đầy đủ Thông tin' },
              { pattern: '^K[0-9]+', message: 'Mã khóa bắt đầu bằng chữ K viết hoa' },
              {
                min: 1,
                max: 5,
                message: 'Vượt quá số kí tự',
              },
            ]}
            width='md'
            name='courseId'
            label='Mã khóa'
            placeholder='Nhập mã khóa học, ví dụ: K65'
          />
        </ProForm.Group>
      </ModalForm>
    </div>
  );
}

export default ModalFormCourse;
