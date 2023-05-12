import { Column } from '@ant-design/plots';
import { Typography } from 'antd';
import React from 'react';

function ColumnDataCourse({ dataCourse }) {
  const { Text } = Typography;
  const data = [
    {
      time: 'Năm 2018',
      value: 38,
    },
    {
      time: 'Năm 2019',
      value: 52,
    },
    {
      time: 'Năm 2020',
      value: 61,
    },
    {
      time: 'Năm 2021',
      value: 145,
    },
    {
      time: 'Năm 2022',
      value: 48,
    },
    {
      time: 'Năm 2023',
      value: 38,
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
        alias: 'time',
      },
      value: {
        alias: 'Số lượng sinh viên',
      },
    },
  };
  return (
    <div>
      <Column {...config} />
      <Text style={{ display: 'block', translate: '35%', marginTop: '10px', opacity: 0.5 }} italic>
        {`Biểu đồ số lượng sinh viên theo năm ${dataCourse?.courseName}`}
      </Text>
    </div>
  );
}

export default ColumnDataCourse;
