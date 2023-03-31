import { Button, Form, Input, message } from 'antd';
import React from 'react';

function AdminChangePasswordPage(props) {
  const onFinish = (values) => {
    message.success('Đổi mật khẩu thành công');
  };
  const onFinishFailed = (errorInfo) => {
    message.error('Đổi mật khẩu thất bại');
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
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete='off'
          >
            <Form.Item
              label='Mật khẩu hiện tại'
              name='password1'
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
              name='password2'
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
              label='Xác nhận mật khẩu mới'
              name='password3'
              rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập mật khẩu mới của bạn !',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
          </Form>
        </div>
        <div className='mt-8'>
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button className='text-white' htmlType='submit'>
              Submit
            </Button>
          </Form.Item>
        </div>
      </div>
    </div>
  );
}

export default AdminChangePasswordPage;
