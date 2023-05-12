import { Pie } from '@ant-design/plots';
import { Button, Input, Typography } from 'antd';
import React from 'react';
import { useState } from 'react';

function PieDataCourse(props) {
  const { Text } = Typography;
  const [valueInput, setValueInput] = useState('');
  const handleSearch = (value) => {};
  const data = [
    {
      type: 'Tốt',
      value: 40,
    },
    {
      type: 'Khá',
      value: 15,
    },
    {
      type: 'Trung Bình',
      value: 3,
    },
    {
      type: 'Yếu',
      value: 2,
    },
    {
      type: 'Kém',
      value: 1,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    label: {
      type: 'outer',
      content: '{percentage}',
    },
    legend: {
      position: 'right',
    },
    interactions: [
      {
        type: 'pie-legend-active',
      },
      {
        type: 'element-active',
      },
    ],
  };

  return (
    <div>
      <Input
        value={valueInput}
        onChange={(e) => setValueInput(e.target.value)}
        placeholder='Chọn kì học'
        style={{
          width: 220,
        }}
      />
      <Button type='primary' onClick={() => handleSearch(valueInput)}>
        Tra cứu
      </Button>
      <Pie {...config} />
      <Text style={{ display: 'block', translate: '30%', marginTop: '-35px', opacity: 0.5 }} italic>
        Biểu đồ xếp loại hạnh kiểm
      </Text>
    </div>
  );
}

export default PieDataCourse;
