import {
  FundOutlined,
  HomeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ReadOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-components';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

function Admin(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const { Header, Sider, Content } = Layout;
  const [collapsed, setCollapsed] = useState(false);

  return (
    <PageContainer>
      <Layout className='min-h-[95vh]'>
        <Sider trigger={null} collapsible collapsed={collapsed} width={240} className='rounded-md'>
          <div className='mb-3'>
            <img
              className='h-[100px] w-full object-cover rounded-t-md'
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
                  navigate('/admin');
                },
                key: '1',
                icon: <HomeOutlined className='text-lg' />,
                label: 'Trang chủ',
              },
              {
                onClick: () => {
                  navigate('/admin/students');
                },
                key: '2',
                icon: <TeamOutlined className='text-lg' />,
                label: 'Quản lí sinh viên',
              },
              {
                onClick: () => {
                  navigate('/admin/news');
                },
                key: '3',
                icon: <ReadOutlined className='text-lg' />,
                label: 'Quản lí tin tức',
              },
              {
                onClick: () => {
                  navigate('/admin/trainingpoints');
                },
                key: '4',
                icon: <FundOutlined style={{ fontSize: 16 }} />,
                label: 'Quản lí điểm rèn luyện',
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
