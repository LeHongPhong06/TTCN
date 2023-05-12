import { PageContainer } from '@ant-design/pro-components';
import { Button, Form, Input, message } from 'antd';
import Cookies from 'js-cookie';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../../../API/axios';
import Footer from '../../components/Footer/Footer';
import AlertBanner from '../../components/Header/AlertBanner';
import HeaderTop from '../../components/Header/Header';
import News from '../../components/News/News';
import Propose from '../../components/Propose/Propose';
import ThumnailSlider from '../../components/Slider/ThumnailSlider';
function HomePage(props) {
  const navigate = useNavigate();
  const [loadingBtnLogin, setLoadingBtnLogin] = useState(false);
  const onFinish = (values) => {
    setLoadingBtnLogin(true);
    login(values)
      .then((res) => {
        if (res.data?.success === true) {
          Cookies.set('jwt', res.data?.data?.jwt);
          setLoadingBtnLogin(false);
          if (res.data?.data?.roleId === 'STUDENT') {
            navigate(`/student/${res.data?.data?.id}`);
          } else {
            navigate(`${res.data?.data?.id}/manage`);
          }
        } else if (res.data?.error?.code === 500) {
          message.error(res.data.error.message);
        }
      })
      .finally(() => setLoadingBtnLogin(false));
  };
  return (
    <div className='min-h-[100vh]'>
      <div>
        <HeaderTop />
        <div className='bg-orange-400'>
          <div className='max-w-[1100px] mx-auto h-[36px] flex items-center justify-end'>
            <Form name='horizontal_login' size='small' layout='inline' onFinish={onFinish}>
              <Form.Item
                name='id'
                label='Tên đăng nhập'
                rules={[
                  {
                    required: false,
                    message: 'Vui lòng nhập mã sinh viên !',
                  },
                ]}
              >
                <Input laber='Tên đăng nhập' />
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
