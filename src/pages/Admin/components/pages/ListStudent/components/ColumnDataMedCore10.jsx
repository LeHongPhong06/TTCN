import { Column } from '@ant-design/plots';
import { Spin, Typography } from 'antd';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getDataMedCore10 } from '../../../../../../API/axios';

function ColumnDataMedCore10({ dataStudent }) {
  const studentId = dataStudent?.id;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { Text } = Typography;
  useEffect(() => {
    getDataMedCore10(studentId)
      .then((res) => {
        setLoading(true);
        if (res.data.success === true) {
          setData(res.data?.data?.items);
          setLoading(false);
        }
      })
      .finally(() => setLoading(false));
  }, [studentId]);
  const config = {
    data,
    xField: 'termId',
    yField: 'medScore10',
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
        alias: 'Kì học',
      },
      value: {
        alias: 'Điểm',
      },
    },
  };
  return (
    <Spin spinning={loading}>
      <Column {...config} />
      <Text style={{ display: 'block', textAlign: 'center', opacity: 0.5, marginTop: '10px' }} italic>
        Biểu đồ điểm trung bình học tập theo từng kì học
      </Text>
    </Spin>
  );
}

export default ColumnDataMedCore10;
