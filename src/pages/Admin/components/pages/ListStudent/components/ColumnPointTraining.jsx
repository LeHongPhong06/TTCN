import { Column } from '@ant-design/plots';
import { Spin, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { getDataTraningPoint } from '../../../../../../API/axios';

function ColumnPointTraining({ dataStudent }) {
  const studentId = dataStudent?.id;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { Text } = Typography;
  useEffect(() => {
    getDataTraningPoint(studentId).then((res) => {
      setLoading(true);
      if (res.data.success === true) {
        setData(res.data?.data?.items);
        setLoading(false);
      }
    });
  }, [studentId]);

  const config = {
    data,
    xField: 'termId',
    yField: 'trainingPoint',
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
        alias: 'Kì',
      },
      value: {
        alias: 'Điểm rèn luyện',
      },
    },
  };
  return (
    <Spin spinning={loading}>
      <div className='mt-12'>
        <Column {...config} />
        <Text style={{ display: 'block', textAlign: 'center', opacity: 0.5, marginTop: '10px' }} italic>
          Biểu đồ điểm rèn luyện theo từng kì học
        </Text>
      </div>
    </Spin>
  );
}

export default ColumnPointTraining;
