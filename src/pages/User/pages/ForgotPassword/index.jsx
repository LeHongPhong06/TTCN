import React from 'react';
import HeaderTop from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Button, Form, Input, Result, Typography } from 'antd';
import { useState } from 'react';

function ForgotPasswordPage(props) {
  const [onSubmit, setOnSubmit] = useState(true);
  const { Text } = Typography;
  const onFinish = () => {
    setOnSubmit(false);
  };
  return (
    <div>
      <div>
        <HeaderTop />
      </div>
      <div className='bg-slate-200 '>
        <div className='max-w-[1100px] mx-auto bg-slate-100 pb-8 min-h-[80vh] justify-center flex'>
          <div className='p-4 mt-20'>
            {onSubmit ? (
              <div>
                <Form
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
                  autoComplete='off'
                >
                  <Form.Item
                    label={<Text style={{ marginRight: 50 }}>Tên đăng nhập:</Text>}
                    name='username'
                    rules={[
                      {
                        required: true,
                        message: 'Nhập đầy đủ thông tin',
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    label={<Text>Email</Text>}
                    name='email'
                    rules={[
                      {
                        required: true,
                        message: 'Nhập đầy đủ thông tin',
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    wrapperCol={{
                      offset: 8,
                      span: 16,
                    }}
                  >
                    <Button type='primary' htmlType='submit'>
                      Gửi email
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            ) : (
              <Result status='success' title='Vui lòng kiểm tra email để đổi mật khẩu đăng nhập' />
            )}
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default ForgotPasswordPage;
