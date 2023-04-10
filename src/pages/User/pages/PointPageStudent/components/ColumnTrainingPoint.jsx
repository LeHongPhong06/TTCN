import { Column } from '@ant-design/plots';
import { PageContainer } from '@ant-design/pro-components';
import React from 'react';
import { Typography } from 'antd';

function ColumnTrainingPoint(props) {
  const { Text } = Typography;
  const data = [
    {
      time: 'Kì 1',
      value: 78,
    },
    {
      time: 'Kì 2',
      value: 85,
    },
    {
      time: 'Kì 3',
      value: 70,
    },
    {
      time: 'Kì 4',
      value: 90,
    },
    {
      time: 'Kì 5',
      value: 80,
    },
    {
      time: 'Kì 6',
      value: 85,
    },
    {
      time: 'Kì 7',
      value: 80,
    },
    {
      time: 'Kì 8',
      value: 80,
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
        alias: 'Kì',
      },
      value: {
        alias: 'Điểm rèn luyện',
      },
    },
  };
  return (
    <div className='mt-12'>
      <PageContainer title='Điểm rèn luyện'>
        <Column {...config} />
        <Text style={{ display: 'block', textAlign: 'center', opacity: 0.5, marginTop: '10px' }} italic>
          Biểu đồ điểm rèn luyện theo từng kì học
        </Text>
      </PageContainer>
    </div>
  );
}

export default ColumnTrainingPoint;
