import { Card, Typography } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

function Propose(props) {
  const { Title } = Typography;
  return (
    <div className='grid grid-cols-3 justify-between gap-x-8'>
      <div className='p-6 bg-gray-200 rounded'>
        <Link
          to='https://vnua.edu.vn/thong-bao/thu-tien-hoc-phi-dot-2-hoc-ki-ii-nam-hoc-2022-2023-53732'
          target='_blank'
        >
          <Card
            hoverable
            cover={
              <img
                className='w-full h-[180px] object-cover'
                alt='example'
                src='https://ctsv.vnua.edu.vn/assets/media/images/news/0208/quyet-dinh-vv-cap-hoc-bong-khuyen-khich-hoc-tap-hoc-ky-1-nam-hoc-2020-20210_1627872994.png'
              />
            }
          >
            <Title level={5} style={{ height: 100 }}>
              Thu tiền học phí Đợt 2, học kì II, năm học 2022 - 2023
            </Title>
          </Card>
        </Link>
      </div>
      <div className='p-6 bg-gray-200 rounded'>
        <Link
          to='https://fita.vnua.edu.vn/mang-may-tinh-truyen-thong-du-lieu-nganh-hoc-tiem-nang-duoc-danh-gia-cao/'
          target='_blank'
        >
          <Card
            hoverable
            cover={
              <img
                className='w-full h-[180px] object-cover'
                alt='example'
                src='https://fita.vnua.edu.vn/wp-content/uploads/2023/05/anh-dang.jpg'
              />
            }
          >
            <Title level={5} style={{ height: 100 }}>
              Mạng máy tính & Truyền thông dữ liệu – Ngành học tiềm năng được đánh giá cao
            </Title>
          </Card>
        </Link>
      </div>
      <div className='p-6 bg-gray-200 rounded'>
        <Link
          to='https://vnua.edu.vn/tin-tuc-su-kien/tin-sinh-vien/ngay-hoi-hien-mau-nong-nghiep-mot-trai-tim-hong-nam-2023-thu-hut-hon-1.500-nguoi-tham-gia-53758'
          target='_blank'
        >
          <Card
            hoverable
            cover={
              <img
                className='w-full h-[180px] object-cover'
                alt='example'
                src='https://file.vnua.edu.vn/data/0/images/2023/05/10/host/2023-1005-hien-mau001.jpg?w=680'
              />
            }
          >
            <Title level={5} style={{ height: 100 }}>
              Ngày hội hiến máu “Nông nghiệp một trái tim hồng” năm 2023 thu hút hơn 1.500 người tham gia
            </Title>
          </Card>
        </Link>
      </div>
    </div>
  );
}

export default Propose;
