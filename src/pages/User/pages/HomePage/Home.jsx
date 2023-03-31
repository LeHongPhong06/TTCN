import { PageContainer } from '@ant-design/pro-components';
import { Button, Form, Input, InputNumber } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import AlertBanner from '../../components/Header/AlertBanner';
import HeaderTop from '../../components/Header/Header';
import News from '../../components/News/News';
import Propose from '../../components/Propose/Propose';
import ThumnailSlider from '../../components/Slider/ThumnailSlider';
function HomePage(props) {
  const navigate = useNavigate();
  const [loadingBtnLogin, setLoadingBtnLogin] = useState(false);
  const [form] = Form.useForm();
  const onFinish = (values) => {
    setLoadingBtnLogin(true);
    navigate('/student');
    setLoadingBtnLogin(false);
  };
  return (
    <div className='min-h-[100vh]'>
      <div>
        <HeaderTop />
        <div className='bg-orange-400'>
          <div className='max-w-[1100px] mx-auto h-[36px] flex items-center justify-end'>
            <Form form={form} name='horizontal_login' size='small' layout='inline' onFinish={onFinish}>
              <Form.Item
                name='username'
                label='Tên đăng nhập'
                rules={[
                  {
                    required: false,
                    message: 'Vui lòng nhập mã sinh viên !',
                  },
                ]}
              >
                <InputNumber style={{ width: '100px' }} keyboards={false} controls={false} type='number' />
              </Form.Item>
              <Form.Item
                label='Mật khẩu'
                name='password'
                rules={[
                  {
                    required: false,
                    message: 'Vui lòng nhập đầy đủ thông tin !',
                  },
                ]}
              >
                <Input laber='Mật khẩu' type='password' />
              </Form.Item>
              <Form.Item shouldUpdate>
                {() => (
                  <Button
                    loading={loadingBtnLogin}
                    style={{
                      border: '1px solid black',
                      color: 'black',
                    }}
                    htmlType='submit'
                  >
                    Đăng nhập
                  </Button>
                )}
              </Form.Item>
            </Form>
          </div>
        </div>
        <AlertBanner />
      </div>
      <div className='bg-slate-200 '>
        <div className='max-w-[1100px] mx-auto bg-slate-100 pb-8'>
          <ThumnailSlider />
          <PageContainer title='Tin tức'>
            <News />
          </PageContainer>
          <PageContainer title='Đề xuất cho bạn'>
            <Propose />
          </PageContainer>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
