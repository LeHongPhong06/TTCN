import { Button, Form, Input, message } from 'antd';
import React from 'react';
import { changePassword } from '../../../../../API/axios';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

function AdminChangePasswordPage(props) {
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const identify = location.pathname.split('/')[1];

  const onFinish = (values) => {
    setLoading(true);
    changePassword({ id: identify, values: values })
      .then((res) => {
        if (res.data?.success === true) {
          setLoading(true);
          message.success('Đổi mật khẩu thành công');
        } else if (res.data?.success === false) {
          message.error(res.data?.error.message);
        }
      })
      .finally(() => setLoading(false));
  };
  return (
    <div className='flex justify-center items-center flex-col'>
      <h1 className='text-4xl py-16 font-medium'>Đổi mật khẩu</h1>
      <div className='px-44 pt-16 pb-8 bg-slate-600 rounded-lg flex flex-col items-center max-w-[80%]'>
        <div className='bg-slate-50 px-16 py-8 rounded-lg'>
          <Form
            className='w-[700px] max-w-[75vh]'
            name='basic'
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
            }}
            onFinish={onFinish}
            autoComplete='off'
          >
            <Form.Item
              label='Mật khẩu hiện tại'
              name='currentPassword'
              rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập mật khẩu !',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              label='Nhập mật khẩu mới'
              name='newPassword'
              rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập mật khẩu mới của bạn !',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              hasFeedback
              label='Xác nhận mật khẩu mới'
              name='confirmPassword'
              rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập mật khẩu mới của bạn !',
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('newPassword') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('Mật khẩu không trùng khớp !'));
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item className='flex justify-center items-center'>
              <Button type='primary' htmlType='submit' loading={loading} className='ml-15 w-[150px] flex justify-center items-center'>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default AdminChangePasswordPage;
