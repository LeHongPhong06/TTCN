import { Column } from '@ant-design/plots';
import Title from 'antd/es/typography/Title';
import React from 'react';

function ColumnCreditsStudent(props) {
  const data = [
    // Kì 1
    {
      time: 'Kì 1',
      type: 'Số tín chỉ đăng kí',
      value: 17,
    },
    {
      time: 'Kì 1',
      type: 'Số tín chỉ đạt',
      value: 17,
    },
    {
      time: 'Kì 1',
      type: 'Số tín chỉ tích lũy',
      value: 17,
    },
    // Kì 2
    {
      time: 'Kì 2',
      type: 'Số tín chỉ đăng kí',
      value: 19,
    },
    {
      time: 'Kì 2',
      type: 'Số tín chỉ đạt',
      value: 19,
    },
    {
      time: 'Kì 2',
      type: 'Số tín chỉ tích lũy',
      value: 36,
    },
    // Kì 3
    {
      time: 'Kì 3',
      type: 'Số tín chỉ đăng kí',
      value: 23,
    },
    {
      time: 'Kì 3',
      type: 'Số tín chỉ đạt',
      value: 17,
    },
    {
      time: 'Kì 3',
      type: 'Số tín chỉ tích lũy',
      value: 53,
    },
    // Kì 4
    {
      time: 'Kì 4',
      type: 'Số tín chỉ đăng kí',
      value: 25,
    },
    {
      time: 'Kì 4',
      type: 'Số tín chỉ đạt',
      value: 25,
    },
    {
      time: 'Kì 4',
      type: 'Số tín chỉ tích lũy',
      value: 25,
    },
    // Kì 5
    {
      time: 'Kì 5',
      type: 'Số tín chỉ đăng kí',
      value: 25,
    },
    {
      time: 'Kì 5',
      type: 'Số tín chỉ đạt',
      value: 25,
    },
    {
      time: 'Kì 5',
      type: 'Số tín chỉ tích lũy',
      value: 25,
    },
    // Kì 6
    {
      time: 'Kì 6',
      type: 'Số tín chỉ đăng kí',
      value: 25,
    },
    {
      time: 'Kì 6',
      type: 'Số tín chỉ đạt',
      value: 25,
    },
    {
      time: 'Kì 6',
      type: 'Số tín chỉ tích lũy',
      value: 25,
    },
    // Kì 7
    {
      time: 'Kì 7',
      type: 'Số tín chỉ đăng kí',
      value: 25,
    },
    {
      time: 'Kì 7',
      type: 'Số tín chỉ đạt',
      value: 25,
    },
    {
      time: 'Kì 7',
      type: 'Số tín chỉ tích lũy',
      value: 25,
    },
    // Kì 8
    {
      time: 'Kì 8',
      type: 'Số tín chỉ đăng kí',
      value: 25,
    },
    {
      time: 'Kì 8',
      type: 'Số tín chỉ đạt',
      value: 25,
    },
    {
      time: 'Kì 8',
      type: 'Số tín chỉ tích lũy',
      value: 25,
    },
  ];
  const config = {
    data,
    xField: 'time',
    yField: 'value',
    seriesField: 'type',
    isGroup: 'true',
    legend: {
      selected: {
        // 默认置灰
        // 茶叶: false,
      },
    },
  };
  return (
    <div className='mt-8'>
      <Title level={4}>Điểm trung bình theo từng kì</Title>
      <Column {...config} />
    </div>
  );
}

export default ColumnCreditsStudent;
