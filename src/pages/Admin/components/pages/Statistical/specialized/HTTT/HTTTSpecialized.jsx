import { Column } from '@ant-design/plots';
import React from 'react';

function HTTTSpecialized(props) {
  const data = [
    {
      name: 'Tổng số lượng sinh viên',
      time: 'Năm 2019',
      value: 18.9,
    },
    {
      name: 'Tổng số lượng sinh viên',
      time: 'Năm 2020',
      value: 28.8,
    },
    {
      name: 'Tổng số lượng sinh viên',
      time: 'Năm 2021',
      value: 39.3,
    },
    {
      name: 'Tổng số lượng sinh viên',
      time: 'Năm 2022',
      value: 81.4,
    },
    {
      name: 'Tổng số lượng sinh viên',
      time: 'Năm 2023',
      value: 47,
    },
    {
      name: 'Số lượng sinh viên nhập học',
      time: 'Năm 2019',
      value: 12.4,
    },
    {
      name: 'Số lượng sinh viên nhập học',
      time: 'Năm 2020',
      value: 23.2,
    },
    {
      name: 'Số lượng sinh viên nhập học',
      time: 'Năm 2021',
      value: 34.5,
    },
    {
      name: 'Số lượng sinh viên nhập học',
      time: 'Năm 2022',
      value: 99.7,
    },
    {
      name: 'Số lượng sinh viên nhập học',
      time: 'Năm 2023',
      value: 99.7,
    },
  ];
  const config = {
    data,
    isGroup: true,
    xField: 'time',
    yField: 'value',
    seriesField: 'name',
    legend: {
      position: 'right-top',
    },
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
      <Column {...config} />
    </div>
  );
}

export default HTTTSpecialized;
