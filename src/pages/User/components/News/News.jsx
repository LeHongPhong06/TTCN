import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
function News(props) {
  return (
    <div className='grid grid-cols-3 justify-between gap-x-8'>
      <div className='p-6 bg-gray-200 rounded'>
        <Link
          to='https://vnua.edu.vn/thong-bao/lich-thu-tien-hoc-phi-dot-1-hoc-ki-ii-nam-hoc-2022-2023-thong-bao-nhac-lai-lich-thu-tien-53531'
          target='_blank'
        >
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
        </Link>
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

export default News;
