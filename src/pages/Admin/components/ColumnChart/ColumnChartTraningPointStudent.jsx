import { Column } from '@ant-design/plots';
import { PageContainer } from '@ant-design/pro-components';
import React from 'react';

function LineChartTraningPointStudent(props) {
  const data = [
    {
      time: 'Kì 1',
      value: 70,
    },
    {
      time: 'Kì 2',
      value: 75,
    },
    {
      time: 'Kì 3',
      value: 80,
    },
    {
      time: 'Kì 4',
      value: 85,
    },
    {
      time: 'Kì 5',
      value: 90,
    },
    {
      time: 'Kì 6',
      value: 80,
    },
    {
      time: 'Kì 7',
      value: 80,
    },
    {
      time: 'Kì 8',
      value: 75,
    },
  ];
  const config = {
    data,
    xField: 'time',
    yField: 'value',
    label: {
      position: 'middle',
      style: {
        fill: '#FFFFFF',
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      time: {
        alias: 'Học kì',
      },
      value: {
        alias: 'Điểm rèn luyện',
      },
    },
  };
  return (
    <div>
      <PageContainer title='Điểm rèn luyện'>
        <Column {...config} />
      </PageContainer>
    </div>
  );
}

export default LineChartTraningPointStudent;
