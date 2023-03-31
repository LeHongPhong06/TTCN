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
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

function Admin(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const { Title } = Typography;
  const { Header, Sider, Content } = Layout;

  const newArr = location.pathname.split('/');
  const pathAdd = newArr[newArr.length - 1];
  const addIcon = () => {
    if (pathAdd === 'students') {
      return '1';
    } else if (pathAdd === 'classes') {
      return '2';
    } else if (pathAdd === 'semesters') {
      return '3';
    } else if (pathAdd === 'classification') {
      return '4';
    } else if (pathAdd === 'authorization') {
      return '5';
    } else return '6';
  };
  const items = [
    {
      key: '1',
      onClick: () => {
        navigate('/admin/students');
      },
      icon: <TeamOutlined className='text-lg' />,
      label: 'Quản lí thông tin sinh viên',
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
        navigate('/admin/classification');
      },
      icon: <UnlockOutlined className='text-lg' />,
      label: 'Quản lí xếp loại sinh viên',
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
  ];
  return (
    <PageContainer className=''>
      <Layout className='min-h-[95vh]'>
        <Sider style={{ borderRadius: '6px' }} width={250}>
          <div className='py-3 px-6 flex justify-center items-center border-b-2 border-stone-50'>
            <Title style={{ color: '#fff', marginBottom: 0 }} level={4}>
              Xin chào Admin
            </Title>
          </div>
          <Menu
            className='rounded-md mt-1'
            theme='dark'
            mode='inline'
            defaultSelectedKeys={[addIcon()]}
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
                  onClick={() => navigate('login')}
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
