import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

function Admin(props) {
  const navigate = useNavigate();
  const { Header, Sider, Content } = Layout;
  const [collapsed, setCollapsed] = useState(false);

  return (
    <PageContainer>
      <Layout className='h-[90vh]'>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className='mb-3'>
            <img
              className='h-[100px] w-[200px] object-cover'
              src='https://images.unsplash.com/photo-1496200186974-4293800e2c20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bG9nb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
              alt='avt'
            />
          </div>
          <Menu
            className='rounded-md'
            theme='dark'
            mode='inline'
            defaultSelectedKeys={['1']}
            items={[
              {
                onClick: () => {
                  navigate('/admin/home');
                },
                key: '1',
                icon: <UserOutlined />,
                label: 'Trang chủ',
              },
              {
                onClick: () => {
                  navigate('/admin/liststudents');
                },
                key: '2',
                icon: <VideoCameraOutlined />,
                label: 'Danh sách sinh viên',
              },
              {
                onClick: () => {
                  navigate('/admin/listnews');
                },
                key: '3',
                icon: <UploadOutlined />,
                label: 'Danh sách tin tức',
              },
            ]}
          />
        </Sider>
        <Layout className='site-layout ml-2'>
          <Header className='p-0 bg-dark rounded-md'>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger mx-4 text-white text-lg',
              onClick: () => setCollapsed(!collapsed),
            })}
          </Header>
          <Content className='mt-4 p-8 min-h-[280px] bg-slate-200 rounded-md'>
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </PageContainer>
  );
}

export default Admin;
