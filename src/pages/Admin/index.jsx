import { BellOutlined, PoweroffOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Badge, Button, Layout, Menu, Space, Tooltip, Typography } from 'antd';
import React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

function DefaultLayoutAdmin(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const identify = location.pathname.split('/')[1];
  const { Title } = Typography;
  const { Header, Sider, Content } = Layout;
  const checkPathName = () => {
    if (location.pathname.includes('/manage/students')) {
      return '1';
    }
    if (location.pathname.includes('/manage/points')) {
      return '2';
    }
    if (location.pathname.includes('/manage/classes')) {
      return '3';
    }
    if (location.pathname.includes('/manage/semesters')) {
      return '4';
    }
    if (location.pathname.includes('/manage/courses')) {
      return '5';
    }
    if (location.pathname.includes('/manage/majors')) {
      return '6';
    }
    if (location.pathname.includes('/manage/authorization')) {
      return '7';
    }
    if (location.pathname.includes('/manage/changepassword')) {
      return '8';
    }
    if (location.pathname.includes('/manage/class-classification')) {
      return '9';
    }
    if (location.pathname.includes('/manage/major-classification')) {
      return '10';
    }
  };
  const items = [
    {
      key: '1',
      label: 'Danh sách sinh viên',
      onClick: () => {
        navigate(`/${identify}/manage/students`);
      },
    },
    {
      key: '3',
      label: 'Quản lí lớp',
      onClick: () => {
        navigate(`/${identify}/manage/classes`);
      },
    },
    {
      key: '6',
      label: 'Quản lí chuyên ngành',
      onClick: () => {
        navigate(`/${identify}/manage/majors`);
      },
    },
    {
      key: '5',
      label: 'Quản lí khóa',
      onClick: () => {
        navigate(`/${identify}/manage/courses`);
      },
    },
    {
      key: '2',
      label: 'Quản lí điểm',
      onClick: () => {
        navigate(`/${identify}/manage/points`);
      },
    },
    {
      label: 'Quản lí xếp loại',
      children: [
        {
          key: '9',
          label: 'Xếp loại theo lớp',
          onClick: () => {
            navigate(`/${identify}/manage/class-classification`);
          },
        },
        {
          key: '10',
          label: 'Xếp loại theo khóa',
          onClick: () => {
            navigate(`/${identify}/manage/major-classification`);
          },
        },
      ],
    },
    {
      key: '4',
      label: 'Quản lí học kì',
      onClick: () => {
        navigate(`/${identify}/manage/semesters`);
      },
    },
    {
      key: '7',
      label: 'Phân quyền',
      onClick: () => {
        navigate(`/${identify}/manage/authorization`);
      },
    },
    {
      key: '8',
      label: 'Đổi mật khẩu',
      onClick: () => {
        navigate(`/${identify}/manage/changepassword`);
      },
    },
  ];
  return (
    <div className='p-1'>
      <Layout className='min-h-[99vh]'>
        <Sider style={{ borderRadius: '6px' }} width={250}>
          <div className='py-3 px-6 flex justify-center items-center border-b-2 border-stone-50'>
            <Title style={{ color: '#fff', marginBottom: 0 }} level={4}>
              Xin chào Admin
            </Title>
          </div>
          <Menu className='rounded-md mt-1' theme='dark' mode='inline' defaultSelectedKeys={[checkPathName()]} items={items} />
        </Sider>
        <Layout className='site-layout ml-2'>
          <Header theme='dark' className='rounded-md flex justify-between items-center p-8 '>
            <Title style={{ color: '#fff', marginBottom: 0, textTransform: 'uppercase' }} level={3}>
              khoa công nghệ thông tin
            </Title>
            <Space size={24}>
              <Badge count={10} size='small'>
                <Button
                  shape='circle'
                  className='flex justify-center items-center text-white border-none text-xl'
                  icon={<BellOutlined />}
                ></Button>
              </Badge>
              <Avatar shape='circle' size={40} icon={<UserOutlined className='text-2xl' />} />
              <Tooltip title='Đăng xuất'>
                <Button
                  className='flex justify-center items-center text-white text-xl border-none'
                  shape='circle'
                  icon={<PoweroffOutlined />}
                  onClick={() => navigate('/')}
                ></Button>
              </Tooltip>
            </Space>
          </Header>
          <Content className='mt-2 p-6 pb-0 h-[280px] bg-slate-200 rounded-md overflow-y-auto'>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default DefaultLayoutAdmin;
