import { SmileOutlined } from '@ant-design/icons';
import { Button, Result } from 'antd';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
function Home(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const identify = location.pathname.split('/')[1];
  return (
    <div className='flex justify-center items-center'>
      <Result
        icon={<SmileOutlined />}
        title='Đăng nhập thành công'
        extra={
          <Button onClick={() => navigate(`/${identify}/manage/students`)} type='primary'>
            Tiếp tục
          </Button>
        }
      />
    </div>
  );
}

export default Home;
