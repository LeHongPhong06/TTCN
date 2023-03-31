import { Column } from '@ant-design/plots';
import { PageContainer } from '@ant-design/pro-components';
import React from 'react';

function Major(props) {
  const data = [
    // Năm 2019
    {
      time: 'Năm 2019',
      major: 'Công nghệ thông tin',
      value: 450,
    },
    {
      time: 'Năm 2019',
      major: 'Công nghệ phần mềm',
      value: 400,
    },
    {
      time: 'Năm 2019',
      major: 'Hệ thống thông tin',
      value: 100,
    },
    {
      time: 'Năm 2019',
      major: 'An toàn thông tin',
      value: 200,
    },
    {
      time: 'Năm 2019',
      major: 'Mạng máy tính',
      value: 50,
    },
    {
      time: 'Năm 2019',
      major: 'Truyền thông',
      value: 50,
    },
    {
      time: 'Năm 2019',
      major: 'Khoa học dữ liệu và Trí tuệ nhân tạo',
      value: 50,
    },

    // Năm 2020
    {
      time: 'Năm 2020',
      major: 'Công nghệ thông tin',
      value: 450,
    },
    {
      time: 'Năm 2020',
      major: 'Công nghệ phần mềm',
      value: 400,
    },
    {
      time: 'Năm 2020',
      major: 'Hệ thống thông tin',
      value: 100,
    },
    {
      time: 'Năm 2020',
      major: 'An toàn thông tin',
      value: 200,
    },
    {
      time: 'Năm 2020',
      major: 'Mạng máy tính',
      value: 50,
    },
    {
      time: 'Năm 2020',
      major: 'Truyền thông',
      value: 50,
    },
    {
      time: 'Năm 2020',
      major: 'Khoa học dữ liệu và Trí tuệ nhân tạo',
      value: 50,
    },
    // Năm 2021
    {
      time: 'Năm 2021',
      major: 'Công nghệ thông tin',
      value: 450,
    },
    {
      time: 'Năm 2021',
      major: 'Công nghệ phần mềm',
      value: 400,
    },
    {
      time: 'Năm 2021',
      major: 'Hệ thống thông tin',
      value: 100,
    },
    {
      time: 'Năm 2021',
      major: 'An toàn thông tin',
      value: 200,
    },
    {
      time: 'Năm 2021',
      major: 'Mạng máy tính',
      value: 50,
    },
    {
      time: 'Năm 2021',
      major: 'Truyền thông',
      value: 50,
    },
    {
      time: 'Năm 2021',
      major: 'Khoa học dữ liệu và Trí tuệ nhân tạo',
      value: 50,
    },
    // Năm 2022
    {
      time: 'Năm 2022',
      major: 'Công nghệ thông tin',
      value: 450,
    },
    {
      time: 'Năm 2022',
      major: 'Công nghệ phần mềm',
      value: 400,
    },
    {
      time: 'Năm 2022',
      major: 'Hệ thống thông tin',
      value: 100,
    },
    {
      time: 'Năm 2022',
      major: 'An toàn thông tin',
      value: 200,
    },
    {
      time: 'Năm 2022',
      major: 'Mạng máy tính',
      value: 50,
    },
    {
      time: 'Năm 2022',
      major: 'Truyền thông',
      value: 50,
    },
    {
      time: 'Năm 2022',
      major: 'Khoa học dữ liệu và Trí tuệ nhân tạo',
      value: 50,
    },
  ];
  const config = {
    data,
    xField: 'time',
    yField: 'value',
    seriesField: 'major',
    isGroup: 'true',
    legend: {
      position: 'right-top',
      offsetX: 8,
      title: {
        text: 'Trung bình số lương sinh viên từ năm 2019 - 2022',
        spacing: 8,
      },
      itemValue: {
        formatter: (text, item) => {
          const items = data.filter((d) => d.major === item.value);
          return items.length ? items.reduce((a, b) => a + b.value, 0) / items.length : '-';
        },
        style: {
          opacity: 0.65,
        },
      },
    },
  };
  return (
    <div>
      <PageContainer title='Thống kê số lượng sinh viên khoa theo năm'>
        <Column autoFit={true} className='pt-12' {...config} />
      </PageContainer>
    </div>
  );
}

export default Major;
