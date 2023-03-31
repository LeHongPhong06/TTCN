import { PageContainer } from '@ant-design/pro-components';
import { Select } from 'antd';
import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Major from './major/Major';
function AdminStatisticalPage(props) {
  const navigate = useNavigate();
  const handleChange = (value) => {
    console.log(value);
    switch (value) {
      case 'CNTT':
        navigate(`/admin/statistical/${value}/chart/1`);
        break;
      case 'CNPM':
        navigate(`/admin/statistical/${value}/chart/2`);
        break;
      case 'HTTT':
        navigate(`/admin/statistical/${value}/chart/3`);
        break;
      case 'ATTT':
        navigate(`/admin/statistical/${value}/chart/4`);
        break;
      case 'MMT':
        navigate(`/admin/statistical/${value}/chart/5`);
        break;
      case 'TT':
        navigate(`/admin/statistical/${value}/chart/6`);
        break;
      case 'KHDL&TTNT':
        navigate(`/admin/statistical/${value}/chart/7`);
        break;
      default:
        throw new Error('Không tồn tại !!!');
    }
  };
  const options = [
    {
      value: 'CNTT',
      label: 'Công nghệ thông tin',
    },
    {
      value: 'CNPM',
      label: 'Công nghệ phần mềm',
    },
    {
      value: 'HTTT',
      label: 'Hệ thống thông tin',
    },
    {
      value: 'ATTT',
      label: 'An toàn thông tin',
    },
    {
      value: 'MMT',
      label: 'Mạng máy tính',
    },
    {
      value: 'TT',
      label: 'Truyền thông',
    },
    {
      value: 'KHDL&TTNT',
      label: 'Khoa học dữ liệu và Trí tuệ nhân tạo',
    },
  ];
  return (
    <div>
      {/* Khoa */}
      <Major />
      {/* Chuyên ngành */}
      <PageContainer title='Thống kê số lượng sinh viên theo chuyên ngành' className='min-h-[500px]'>
        <Select
          className='mb-8'
          defaultValue='--- Chọn chuyên ngành ---'
          style={{
            width: '20%',
          }}
          onChange={handleChange}
          options={options}
        />
        <Outlet />
      </PageContainer>
    </div>
  );
}

export default AdminStatisticalPage;
