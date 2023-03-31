import { Alert } from 'antd';
import React from 'react';
import Marquee from 'react-fast-marquee';
function AlertBanner(props) {
  return (
    <div style={{ backgroundColor: '#20DFF9' }}>
      <div className='max-w-[1120px] mx-auto'>
        <Alert
          style={{ backgroundColor: '#20DFF9', border: '#20DFF9' }}
          showIcon={false}
          message={
            <Marquee
              gradientColor='none'
              style={{
                border: 'none',
                textShadow: '0px 5px 20px #000000',
                textTransform: 'capitalize',
                fontStyle: 'italic',
                fontFamily: 'PT Sans',
                fontWeight: '600',
                height: '20px',
                color: '#0812FE',
                fontSize: '20px',
                backgroundColor: '#20DFF9',
                overflow: 'hidden',
              }}
            >
              Học viện Nông Nghiệp Việt Nam - Khoa Công Nghệ Thông Tin
            </Marquee>
          }
        />
      </div>
    </div>
  );
}

export default AlertBanner;
