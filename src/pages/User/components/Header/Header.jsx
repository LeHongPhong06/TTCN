import { LogoutOutlined } from '@ant-design/icons';
import { Button, Image, Popconfirm, Space, Typography } from 'antd';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../../../../assets/img/Logo/Logo.png';
function HeaderTop(props) {
  // Handle stundent click btn Logout
  const handleClickConfirmLogOutStudent = () => {};
  
  const { Title, Text } = Typography;
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname.includes('student');
  return (
    <div className='bg-green-600 border-b-2 border-lime-300'>
      <div className='max-w-[1100px] mx-auto px-10 pt-4 pb-6 flex justify-between  '>
        <Image
          preview={false}
          width={150}
          className='cursor-pointer'
          src={logo}
          alt='logo_page'
          onClick={() => {
            navigate('/');
          }}
        />
        <div>
          <Title
            style={{
              color: '#fff',
              marginButtom: 0,
              marginTop: 20,
              width: 500,
              textTransform: 'uppercase',
              textAlign: 'center',
              fontFamily: 'Times New Roman',
            }}
            level={3}
          >
            học viện nông nghiệp việt nam khoa công nghệ thông tin
          </Title>
          <div className='relative'>
            <Button
              size='small'
              className={path ? 'hidden' : 'flex justify-center items-center absolute right-0 top-10'}
              style={{
                backgroundColor: '#fff',
                borderRadius: '999px',
                padding: '8px 16px',
              }}
            >
              Quên mật khẩu
            </Button>
            <div className={path ? 'absolute top-10 right-0 w-[650px]' : 'hidden'}>
              <div className='flex justify-between'>
                <Text italic style={{ fontSize: '16px', color: '#fff' }} level={4}>
                  Xin chào: Anh/chị:...
                </Text>
                <Space>
                  <Button type='link' size='small' onClick={() => navigate('')} style={{ color: '#fff' }}>
                    Đổi mật khẩu
                  </Button>
                  <Popconfirm
                    icon={<LogoutOutlined />}
                    placement='right'
                    title='Bạn muốn đăng xuất ?'
                    onConfirm={handleClickConfirmLogOutStudent}
                    okText='Đăng xuất'
                    okType='default'
                    cancelText='Hủy'
                  >
                    <Button
                      size='small'
                      style={{
                        backgroundColor: '#fff',
                        borderRadius: '999px',
                        padding: '8px 16px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      Đăng xuất
                    </Button>
                  </Popconfirm>
                </Space>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderTop;
