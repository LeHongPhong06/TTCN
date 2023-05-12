import React from 'react';
import { Card, Typography } from 'antd';
import { Link } from 'react-router-dom';
function News(props) {
  const { Title } = Typography;
  return (
    <div className='grid grid-cols-3 justify-between gap-x-8'>
      <div className='p-6 bg-gray-200 rounded'>
        <Link
          to='https://vnua.edu.vn/tin-tuc-su-kien/dao-tao/thong-bao-tuyen-sinh-dai-hoc-he-chinh-quy-nam-2023-53425'
          target='_blank'
        >
          <Card
            hoverable
            cover={
              <img
                className='w-full h-[180px] object-cover'
                alt='example'
                src='https://file.vnua.edu.vn/data/0/images/2023/02/14/host/331c2079-1783-4dc8-a698-9cd5cbc45273.jpeg?dpi=150&quality=100&w=319'
              />
            }
          >
            <Title level={5} style={{ height: 130 }}>
              Thông báo tuyển sinh đại học hệ chính quy năm 2023
            </Title>
          </Card>
        </Link>
      </div>
      <div className='p-6 bg-gray-200 rounded'>
        <Link
          to='https://vnua.edu.vn/tin-tuc-su-kien/nghien-cuu-khoa-hoc/vien-nghien-cuu-va-phat-trien-cay-trong-co-nhieu-hoat-dong-chao-mung-ngay-khoa-hoc-va-cong-nghe-viet-nam-lan-thu-10-53762'
          target='_blank'
        >
          <Card
            hoverable
            cover={
              <img
                className='w-full h-[180px] object-cover'
                alt='example'
                src='https://file.vnua.edu.vn/data/0/images/2023/05/11/host/h2.jpg?w=680'
              />
            }
          >
            <Title level={5} style={{ height: 130 }}>
              Viện Nghiên cứu và Phát triển cây trồng có nhiều hoạt động chào mừng Ngày Khoa học và Công nghệ Việt Nam
              lần thứ 10
            </Title>
          </Card>
        </Link>
      </div>
      <div className='p-6 bg-gray-200 rounded'>
        <Link
          to='https://vnua.edu.vn/tin-tuc-su-kien/tin-sinh-vien/hoc-vien-nong-nghiep-viet-nam-tap-doan-dau-khi-viet-nam-trao-tang-xe-dap-yeu-thuong-va-hoc-bong-uom-mam-tai-nang-cho-hoc-sinh-truong-thpt-phan-huy-chu-thach-that-ha-noi-53760'
          target='_blank'
        >
          <Card
            hoverable
            cover={
              <img
                className='w-full h-[180px] object-cover'
                alt='example'
                src='https://file.vnua.edu.vn/data/0/images/2023/05/11/host/2023-1105-006.jpg?w=680'
              />
            }
          >
            <Title level={5} style={{ height: 130 }}>
              Học viện Nông nghiệp Việt Nam, Tập đoàn Dầu khí Việt Nam trao tặng “Xe đạp yêu thương” và “Học bổng ươm
              mầm tài năng” cho học sinh Trường THPT Phan Huy Chú
            </Title>
          </Card>
        </Link>
      </div>
    </div>
  );
}

export default News;
