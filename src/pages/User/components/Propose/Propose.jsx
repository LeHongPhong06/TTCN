import { Card } from 'antd';
import React from 'react';

function Propose(props) {
  return (
    <div className='grid grid-cols-3 justify-between gap-x-8'>
      <div className='p-6 bg-gray-200 rounded'>
        <Card
          hoverable
          cover={
            <img
              className='w-full h-[180px] object-cover'
              alt='example'
              src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
            />
          }
        >
          <h2 className='text-medium'>Europe Street beat Europe Street beat Europe Street beat Europe Street beat</h2>
        </Card>
      </div>
      <div className='p-6 bg-gray-200 rounded'>
        <Card
          hoverable
          cover={
            <img
              className='w-full h-[180px] object-cover'
              alt='example'
              src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
            />
          }
        >
          <h2>Europe Street beat Europe Street beat Europe Street beat Europe Street beat</h2>
        </Card>
      </div>
      <div className='p-6 bg-gray-200 rounded'>
        <Card
          hoverable
          cover={
            <img
              className='w-full h-[180px] object-cover'
              alt='example'
              src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
            />
          }
        >
          <h2>Europe Street beat Europe Street beat Europe Street beat Europe Street beat</h2>
        </Card>
      </div>
    </div>
  );
}

export default Propose;
