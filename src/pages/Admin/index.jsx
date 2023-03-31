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
      return '2';
    } else if (pathAdd === 'statistical') {
      return '3';
    } else if (pathAdd === 'trainingpoints') {
      return '4';
    } else if (pathAdd === 'changepassword') {
      return '5';
    } else return '0';
  };
  const items = [
    {
      onClick: () => {
        navigate('/admin/students');
      },
      key: '2',
      icon: <TeamOutlined className='text-lg' />,
      label: 'Danh sách sinh viên',
    },
    {
      onClick: () => {
        navigate('/admin/statistical');
      },
      key: '3',
      icon: <BarChartOutlined className='text-lg' />,
      label: 'Thống kê và báo cáo',
    },
    {
      onClick: () => {
        navigate('/admin/trainingpoints');
      },
      key: '4',
      icon: <FundOutlined className='text-lg' />,
      label: 'Quản lí điểm',
    },
    {
      onClick: () => {
        navigate('/admin/changepassword');
      },
      key: '5',
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
