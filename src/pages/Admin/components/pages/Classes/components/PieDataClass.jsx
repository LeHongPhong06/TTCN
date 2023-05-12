import { Pie } from '@ant-design/plots';
import { Button, Select, Space, Typography } from 'antd';
import React, { useState } from 'react';

function PieDataClass(props) {
  const { Text } = Typography;
  const [loadingBtnSearch, setLoadingBtnSearch] = useState(false);
  const [loadingChart, setLoadingChart] = useState(false);
  const [valueSelectYear, setValueSelectYear] = useState('');
  const [valueSelectTerms, setValueSelectTerms] = useState('');

  // Handle get data Pie
  const handleGetDataPie = (valueSelectYear, valueSelectTerms) => {
    setLoadingBtnSearch(true);
    setLoadingChart(true);
  };

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
  const optionsYears = [
    {
      value: '2019',
      label: '2019',
    },
    {
      value: '2020',
      label: '2020',
    },
    {
      value: '2021',
      label: '2021',
    },
    {
      value: '2022',
      label: '2022',
    },
    {
      value: '2023',
      label: '2023',
    },
  ];
  const optionsTerms = [
    {
      value: '1',
      label: 'Kì 1',
    },
    {
      value: '2',
      label: 'Kì 2',
    },
  ];
  return (
    <div>
      <Space>
        <Select
          placeholder='Chọn năm học'
          style={{
            width: 200,
          }}
          onChange={(value) => setValueSelectYear(value)}
          options={optionsYears}
        />
        <Select
          placeholder='Chọn kì học'
          style={{
            width: 200,
          }}
          onChange={(value) => setValueSelectTerms(value)}
          options={optionsTerms}
        />
        <Button
          type='primary'
          loading={loadingBtnSearch}
          onClick={() => handleGetDataPie(valueSelectYear, valueSelectTerms)}
        >
          Tra cứu
        </Button>
      </Space>
      <Pie {...config} loading={loadingChart} />
      <Text style={{ display: 'block', translate: '30%', marginTop: '-40px', opacity: 0.5 }} italic>
        Biểu đồ xếp loại hạnh kiểm
      </Text>
    </div>
  );
}

export default PieDataClass;
