import {
  BarChartOutlined,
  BellOutlined,
  FundOutlined,
  PoweroffOutlined,
  SettingOutlined,
  TeamOutlined,
  UnlockOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { Avatar, Badge, Button, Layout, Menu, Space, Tooltip, Typography } from 'antd';
import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

function Admin(props) {
  const navigate = useNavigate();
  const { Title } = Typography;
  const { Header, Sider, Content } = Layout;
  const items = [
    {
      key: '1',
      onClick: () => {
        navigate('/admin/students');
      },
      icon: <TeamOutlined className='text-lg' />,
      label: 'Danh sách sinh viên',
    },
    {
      key: '2',
      onClick: () => {
        navigate('/admin/classes');
      },
      icon: <BarChartOutlined className='text-lg' />,
      label: 'Quản lí lớp',
    },
    {
      key: '3',
      onClick: () => {
        navigate('/admin/semesters');
      },
      icon: <FundOutlined className='text-lg' />,
      label: 'Quản lí học kì',
    },
    {
      key: '4',
      onClick: () => {
        navigate('/admin/courses');
      },
      icon: <UnlockOutlined className='text-lg' />,
      label: 'Quản lí khóa',
    },
    {
      key: '5',
      onClick: () => {
        navigate('/admin/authorization');
      },
      icon: <UnlockOutlined className='text-lg' />,
      label: 'Phân quyền',
    },
    {
      key: '6',
      onClick: () => {
        navigate('/admin/changepassword');
      },
      icon: <UnlockOutlined className='text-lg' />,
      label: 'Đổi mật khẩu',
    },
    {
      key: '7',
      onClick: () => {
        navigate('/admin/major');
      },
      icon: <UnlockOutlined className='text-lg' />,
      label: 'Quản lí chuyên ngành',
    },
    {
      key: '8',
      onClick: () => {
        navigate('/admin/points');
      },
      icon: <UnlockOutlined className='text-lg' />,
      label: 'Quản lí điểm',
    },
  ];
  return (
    <PageContainer className=''>
      <Layout className='min-h-[95vh]'>
        <Sider style={{ borderRadius: '6px' }} width={250}>
          <div className='py-3 px-6 flex justify-center items-center border-b-2 border-stone-50'>
            <Title
              onClick={() => navigate('/admin')}
              style={{ color: '#fff', marginBottom: 0, cursor: 'pointer' }}
              level={4}
            >
              Xin chào Admin
            </Title>
          </div>
          <Menu
            onClick={(i) => {
              console.log(i);
            }}
            className='rounded-md mt-1'
            theme='dark'
            mode='inline'
            // defaultSelectedKeys={['1']}
            items={items}
          />
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
              <Button
                className='flex justify-center items-center text-white text-xl border-none'
                shape='circle'
                icon={<SettingOutlined />}
              ></Button>
              <Avatar shape='circle' size={40} icon={<UserOutlined className='text-2xl' />} />
              <Tooltip title='Đăng xuất'>
                <Button
                  className='flex justify-center items-center text-white text-xl border-none'
                  shape='circle'
                  icon={<PoweroffOutlined />}
                  onClick={() => navigate('/auth/admin')}
                ></Button>
              </Tooltip>
            </Space>
          </Header>
          <Content className='mt-2 p-6 pb-0 h-[280px] bg-slate-200 rounded-md overflow-y-auto'>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </PageContainer>
  );
}

export default Admin;
