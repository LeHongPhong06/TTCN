import { Column } from '@ant-design/plots';
import { PageContainer } from '@ant-design/pro-components';
import React from 'react';
function LineChartPointStudent(props) {
  const data = [
    // Kì 1
    {
      time: 'Kì 1',
      type: 'Điểm trung bình hệ 10/100',
      value: 8.25,
    },
    {
      time: 'Kì 1',
      type: 'Điểm trung bình hệ 4',
      value: 3.01,
    },
    {
      time: 'Kì 1',
      type: 'Điểm trung bình tích lũy',
      value: 3.01,
    },
    {
      time: 'Kì 1',
      type: 'Điểm trung bình tích lũy ( hệ 4 )',
      value: 3.01,
    },
    // Kì 2
    {
      time: 'Kì 2',
      type: 'Điểm trung bình hệ 10/100',
      value: 8.25,
    },
    {
      time: 'Kì 2',
      type: 'Điểm trung bình hệ 4',
      value: 3.01,
    },
    {
      time: 'Kì 2',
      type: 'Điểm trung bình tích lũy',
      value: 3.01,
    },
    {
      time: 'Kì 2',
      type: 'Điểm trung bình tích lũy ( hệ 4 )',
      value: 3.01,
    },
    // Kì 3
    {
      time: 'Kì 3',
      type: 'Điểm trung bình hệ 10/100',
      value: 8.0,
    },
    {
      time: 'Kì 3',
      type: 'Điểm trung bình hệ 4',
      value: 3.0,
    },
    {
      time: 'Kì 3',
      type: 'Điểm trung bình tích lũy',
      value: 3.01,
    },
    {
      time: 'Kì 3',
      type: 'Điểm trung bình tích lũy ( hệ 4 )',
      value: 2.98,
    },
    // Kì 4
    {
      time: 'Kì 4',
      type: 'Điểm trung bình hệ 10/100',
      value: 7.75,
    },
    {
      time: 'Kì 4',
      type: 'Điểm trung bình hệ 4',
      value: 2.87,
    },
    {
      time: 'Kì 4',
      type: 'Điểm trung bình tích lũy',
      value: 3.01,
    },
    {
      time: 'Kì 4',
      type: 'Điểm trung bình tích lũy ( hệ 4 )',
      value: 2.89,
    },
    // kì 5
    {
      time: 'Kì 5',
      type: 'Điểm trung bình hệ 10/100',
      value: 8.25,
    },
    {
      time: 'Kì 5',
      type: 'Điểm trung bình hệ 4',
      value: 3.01,
    },
    {
      time: 'Kì 5',
      type: 'Điểm trung bình tích lũy',
      value: 3.01,
    },
    {
      time: 'Kì 5',
      type: 'Điểm trung bình tích lũy ( hệ 4 )',
      value: 3.01,
    },
    // Kì 6
    {
      time: 'Kì 6',
      type: 'Điểm trung bình hệ 10/100',
      value: 8.25,
    },
    {
      time: 'Kì 6',
      type: 'Điểm trung bình hệ 4',
      value: 3.01,
    },
    {
      time: 'Kì 6',
      type: 'Điểm trung bình tích lũy',
      value: 3.01,
    },
    {
      time: 'Kì 6',
      type: 'Điểm trung bình tích lũy ( hệ 4 )',
      value: 3.01,
    },
    // Kì 7
    {
      time: 'Kì 7',
      type: 'Điểm trung bình hệ 10/100',
      value: 8.25,
    },
    {
      time: 'Kì 7',
      type: 'Điểm trung bình hệ 4',
      value: 3.01,
    },
    {
      time: 'Kì 7',
      type: 'Điểm trung bình tích lũy',
      value: 3.01,
    },
    {
      time: 'Kì 7',
      type: 'Điểm trung bình tích lũy ( hệ 4 )',
      value: 3.01,
    },
    // Kì 8
    {
      time: 'Kì 8',
      type: 'Điểm trung bình hệ 10/100',
      value: 8.25,
    },
    {
      time: 'Kì 8',
      type: 'Điểm trung bình hệ 4',
      value: 3.01,
    },
    {
      time: 'Kì 8',
      type: 'Điểm trung bình tích lũy',
      value: 3.01,
    },
    {
      time: 'Kì 8',
      type: 'Điểm trung bình tích lũy ( hệ 4 )',
      value: 3.01,
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
        茶叶: false,
      },
    },
  };
  return (
    <div className='mt-10'>
      <PageContainer title='Điểm trung bình kì'>
        <Column {...config} />
      </PageContainer>
    </div>
  );
}

export default LineChartPointStudent;
