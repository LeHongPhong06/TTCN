import { Column } from '@ant-design/plots';
import { Spin, Typography, message } from 'antd';
import React from 'react';
import { getDataMedCore4 } from '../../../../API/axios';
import { useEffect } from 'react';
import { useState } from 'react';

export function ColumnDataMedCore4({ dataStudent }) {
  const { Text } = Typography;
  const studentId = dataStudent?.id;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getDataMedCoreStudent4 = () => {
    setLoading(true);
    if (studentId !== undefined) {
      getDataMedCore4(studentId)
        .then((res) => {
          if (res.data.success === true) {
            setData(res.data?.data?.items);
            setLoading(false);
          } else return message.error(res.data?.error?.message);
        })
        .finally(() => setLoading(false));
    }
  };
  useEffect(() => {
    getDataMedCoreStudent4();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [studentId]);

  const config = {
    data,
    xField: 'termId',
    yField: 'medScore4',
    label: {
      position: 'middle',
      style: {
        fill: '#FFFFFF',
        opacity: 0.6,
      },
    },
    columnStyle: {
      fill: 'red',
      fillOpacity: 0.5,
      stroke: 'black',
      lineWidth: 1,
      shadowColor: 'black',
      shadowBlur: 10,
      shadowOffsetX: 5,
      shadowOffsetY: 5,
      cursor: 'pointer',
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
      {data && (
        <>
          <Column {...config} />
          <Text style={{ display: 'block', textAlign: 'center', opacity: 0.5, marginTop: '10px' }} italic>
            Biểu đồ điểm trung bình học tập theo từng kì học
          </Text>
        </>
      )}
    </Spin>
  );
}
