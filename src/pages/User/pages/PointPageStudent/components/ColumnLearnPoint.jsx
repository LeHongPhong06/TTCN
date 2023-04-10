import { Column } from '@ant-design/plots';
import { PageContainer } from '@ant-design/pro-components';
import { Typography } from 'antd';
import React from 'react';

function ColumnLearnPoint(props) {
  const { Text } = Typography;
  const data = [
    {
      name: 'Điểm trung bình hệ 10',
      time: 'Kì 1',
      value: 7,
    },
    {
      name: 'Điểm trung bình hệ 10',
      time: 'Kì 2',
      value: 8,
    },
    {
      name: 'Điểm trung bình hệ 10',
      time: 'Kì 3',
      value: 7.5,
    },
    {
      name: 'Điểm trung bình hệ 10',
      time: 'Kì 4',
      value: 6.5,
    },
    {
      name: 'Điểm trung bình hệ 10',
      time: 'Kì 5',
      value: 7,
    },
    {
      name: 'Điểm trung bình hệ 10',
      time: 'Kì 6',
      value: 8.6,
    },
    {
      name: 'Điểm trung bình hệ 10',
      time: 'Kì 7',
      value: 7.3,
    },
    {
      name: 'Điểm trung bình hệ 10',
      time: 'Kì 8',
      value: 8.3,
    },
    {
      name: 'Điểm trung bình hệ 4',
      time: 'Kì 1',
      value: 2.5,
    },
    {
      name: 'Điểm trung bình hệ 4',
      time: 'Kì 2',
      value: 2.3,
    },
    {
      name: 'Điểm trung bình hệ 4',
      time: 'Kì 3',
      value: 2.7,
    },
    {
      name: 'Điểm trung bình hệ 4',
      time: 'Kì 4',
      value: 2.4,
    },
    {
      name: 'Điểm trung bình hệ 4',
      time: 'Kì 5',
      value: 2.5,
    },
    {
      name: 'Điểm trung bình hệ 4',
      time: 'Kì 6',
      value: 3.2,
    },
    {
      name: 'Điểm trung bình hệ 4',
      time: 'Kì 7',
      value: 2.6,
    },
    {
      name: 'Điểm trung bình hệ 4',
      time: 'Kì 8',
      value: 3.3,
    },
  ];
  const config = {
    data,
    isGroup: true,
    xField: 'time',
    yField: 'value',
    seriesField: 'name',
    label: {
      position: 'middle',
      layout: [
        {
          type: 'interval-adjust-position',
        },
        {
          type: 'interval-hide-overlap',
        },
        {
          type: 'adjust-color',
        },
      ],
    },
  };
  return (
    <div>
      <PageContainer title='Điểm trung bình học tập'>
        <Column {...config} />
        <Text style={{ display: 'block', textAlign: 'center', opacity: 0.5, marginTop: '10px' }} italic>
          Biểu đồ điểm trung bình học tập theo từng kì học
        </Text>
      </PageContainer>
    </div>
  );
}

export default ColumnLearnPoint;
