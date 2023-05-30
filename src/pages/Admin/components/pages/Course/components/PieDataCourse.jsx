import { Pie } from '@ant-design/plots';
import { Button, Input, Space, Spin, Typography, message } from 'antd';
import React, { useRef, useState } from 'react';
import { getDataPieCourse } from '../../../../../../API/axios';

function PieDataCourse({ dataCourse }) {
  const { Text } = Typography;
  const ref = useRef();
  const [dataInit, setDataInit] = useState([]);
  const [loading, setLoading] = useState(false);
  const [valueInputTermId, setValueInputTermId] = useState('');

  // Handle get Data Pie
  const courseId = dataCourse?.id;
  const handleGetDataPieCourse = () => {
    if (courseId !== undefined && valueInputTermId !== '') {
      setValueInputTermId('');
      ref.current.focus();
      setLoading(true);
      getDataPieCourse({ courseId: courseId, termId: valueInputTermId })
        .then((res) => {
          if (res.data?.success === true) {
            setDataInit(res.data?.data);
            setLoading(false);
          } else return message.error(res.data?.error?.message);
        })
        .finally(() => setLoading(false));
    }
  };

  const data = [
    {
      type: 'Xuất xắc',
      value: dataInit?.excellent,
    },
    {
      type: 'Tốt',
      value: dataInit?.good,
    },
    {
      type: 'Khá',
      value: dataInit?.fair,
    },
    {
      type: 'Trung bình',
      value: dataInit?.medium,
    },
    {
      type: 'Yếu',
      value: dataInit?.weak,
    },
    {
      type: 'Kém',
      value: dataInit?.worst,
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
      <Space>
        <Input
          value={valueInputTermId}
          onChange={(e) => setValueInputTermId(e.target.value)}
          placeholder='Nhập mã kì học'
          style={{
            width: 250,
          }}
          ref={ref}
        />
        <Button
          type='primary'
          disabled={valueInputTermId !== '' ? false : true}
          onClick={() => {
            handleGetDataPieCourse();
          }}
        >
          Tra cứu
        </Button>
      </Space>
      <Spin spinning={loading}>
        {dataInit && (
          <div className='ml-20'>
            <Pie {...config} />
            <Text style={{ display: 'block', translate: '27%', marginTop: '-35px', opacity: 0.5 }} italic>
              Biểu đồ xếp loại hạnh kiểm
            </Text>
          </div>
        )}
      </Spin>
    </div>
  );
}

export default PieDataCourse;
