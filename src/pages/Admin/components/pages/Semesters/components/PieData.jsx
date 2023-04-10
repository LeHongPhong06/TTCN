import { Pie } from '@ant-design/plots';
import { Typography } from 'antd';
import React from 'react';

function PieData({ dataPie }) {
  const { Text } = Typography;
  const data = [
    {
      name: 'Xuất sắc',
      value: dataPie?.excellent,
    },
    {
      name: 'Tốt',
      value: dataPie?.good,
    },
    {
      name: 'Khá',
      value: dataPie?.fair,
    },
    {
      name: 'Trung bình',
      value: dataPie?.medium,
    },
    {
      name: 'Kém',
      value: dataPie?.weak,
    },
    {
      name: 'Yếu',
      value: dataPie?.worst,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'name',
    radius: 0.75,
    label: {
      type: 'spider',
      labelHeight: 28,
      content: '{percentage}',
    },
    interactions: [
      {
        type: 'element-selected',
      },
      {
        type: 'element-active',
      },
    ],
  };
  return (
    <div>
      <Pie {...config} />
      <Text style={{ display: 'block', translate: '32%', marginTop: '-25px', opacity: 0.5 }} italic>
        Biểu đồ xếp loại hạnh kiểm
      </Text>
    </div>
  );
}

export default PieData;
