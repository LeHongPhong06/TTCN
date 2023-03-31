import { FormOutlined, HomeOutlined, InfoCircleOutlined, SolutionOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import AlertBanner from '../../components/Header/AlertBanner';
import HeaderTop from '../../components/Header/Header';

function LayoutPageStudent(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const newArr = location.pathname.split('/');
  const pathAdd = newArr[newArr.length - 1];
  const addIcon = () => {
    if (pathAdd === 'infor') {
      return '2';
    } else if (pathAdd === 'points') {
      return '3';
    } else if (pathAdd === 'declare') {
      return '4';
    } else return '1';
  };
  const items = [
    {
      onClick: () => {
        navigate('/student');
      },
      key: '1',
      icon: <HomeOutlined style={{ fontSize: '16px' }} />,
      label: 'Trang chủ',
    },
    {
      onClick: () => {
        navigate('/student/infor');
      },
      key: '2',
      icon: <SolutionOutlined style={{ fontSize: '16px' }} />,
      label: 'Thông tin cá nhân',
    },
    {
      onClick: () => {
        navigate('/student/points');
      },
      key: '3',
      icon: <InfoCircleOutlined style={{ fontSize: '16px' }} />,
      label: 'Điểm',
    },
    {
      onClick: () => {
        navigate('/student/declare');
      },
      key: '4',
      icon: <FormOutlined style={{ fontSize: '16px' }} />,
      label: 'Khai báo thông tin',
    },
  ];
  return (
    <div>
      <div>
        <HeaderTop />
        <div className='bg-orange-400 h-[46px]'>
          <div className='w-[1100px] mx-auto'>
            <Menu
              triggerSubMenuAction={'click'}
              style={{ fontSize: '18px', textTransform: 'uppercase', color: 'white' }}
              mode='horizontal'
              defaultSelectedKeys={[addIcon()]}
              items={items}
              className='bg-orange-400 flex justify-around'
            />
          </div>
        </div>
      </div>
      <div className='bg-slate-200 '>
        {location.pathname === '/student' && <AlertBanner />}
        <div className='max-w-[1100px] mx-auto bg-slate-100 pb-8 min-h-[90vh]'>
          <Outlet />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default LayoutPageStudent;
