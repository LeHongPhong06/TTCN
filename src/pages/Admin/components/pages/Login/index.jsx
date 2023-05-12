import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Form, Input, message } from 'antd';
import Cookies from 'js-cookie';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../../../../API/axios';
function AdminLoginPage(props) {
  const navigate = useNavigate();
  const [loadingBtn, setLoadingBtn] = useState(false);
  const onSubmitFormSuccess = async (values) => {
    setLoadingBtn(true);
    login(values)
      .then((res) => {
        if (res.data?.success === true) {
          Cookies.set('jwt', res.data?.data?.jwt);
          navigate(`/admin/${res.data?.data?.id}`);
          setLoadingBtn(false);
        } else if (res.data?.error?.code === 500) {
          message.error(res.data.error.message);
        }
      })
      .finally(() => setLoadingBtn(false));
  };
  return (
    <div className='h-[100vh] flex justify-center items-center flex-col bg-gradient-to-tr from-neutral-900 via-black to-indigo-900'>
      <Avatar className='border-2 border-white' size={120} icon={<UserOutlined />} />
      <div className='backdrop-blur bg-transparent p-16 pt-12 rounded-3xl mt-8 border-2 border-white'>
        <div className='flex justify-center'>
          <h1 className='mb-12 text-white text-3xl'>Login</h1>
        </div>
        <Form size='large' className='w-[400px]' onFinish={onSubmitFormSuccess}>
          <Form.Item
            name='id'
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
