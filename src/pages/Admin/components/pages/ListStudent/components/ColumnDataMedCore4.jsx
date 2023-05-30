import { Column } from '@ant-design/plots';
import { Spin, Typography, message } from 'antd';
import React from 'react';
import { getDataMedCore4 } from '../../../../../../API/axios';
import { useEffect } from 'react';
import { useState } from 'react';

function ColumnDataMedCore4({ dataStudent }) {
  const studentId = dataStudent?.id;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { Text } = Typography;

  const getDataMedCoreStudent4 = () => {
    if (studentId !== undefined) {
      getDataMedCore4(studentId)
        .then((res) => {
          setLoading(true);
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
export default ColumnDataMedCore4;
