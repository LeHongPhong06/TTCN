import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
function AdminLoginPage(props) {
  const [loadingBtn, setLoadingBtn] = useState(false);
  const navigate = useNavigate();
  const onSubmitFormSuccess = (values) => {
    setLoadingBtn(true);
    navigate('/admin');
  };
  return (
    <div className='h-[100vh] flex justify-center items-center flex-col bg-gradient-to-tr from-neutral-900 via-black to-indigo-900'>
      <Avatar className='border-2 border-white' size={120} icon={<UserOutlined />} />
      <div className='backdrop-blur bg-transparent p-16 pt-12 rounded-3xl mt-8 border-2 border-white'>
        <div className='flex justify-center'>
          <h1 className='mb-12 text-white text-3xl'>Login</h1>
        </div>
        <Form
          size='large'
          name='normal_login'
          className='w-[400px] '
          initialValues={{
            remember: false,
          }}
          onFinish={onSubmitFormSuccess}
        >
          <Form.Item
            name='username'
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập đầy đủ thông tin !',
              },
            ]}
          >
            <Input prefix={<UserOutlined className='site-form-item-icon' />} placeholder='Username' />
          </Form.Item>
          <Form.Item
            name='password'
            rules={[
              {
                required: true,
                message: 'Vui lòng nhập đầy đủ thông tin !',
              },
            ]}
          >
            <Input prefix={<LockOutlined className='site-form-item-icon' />} type='password' placeholder='Password' />
          </Form.Item>
          <Form.Item>
            <Form.Item name='remember' valuePropName='checked' noStyle>
              <Checkbox className='text-white text-2xl'>Remember me</Checkbox>
            </Form.Item>
          </Form.Item>
          <Form.Item>
            <Button loading={loadingBtn} htmlType='submit' className='w-full text-white uppercase mt-8'>
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default AdminLoginPage;
