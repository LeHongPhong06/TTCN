import { LoadingOutlined } from '@ant-design/icons';
import { Column } from '@ant-design/plots';
import { Spin, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getDataStudentPoint10 } from '../../../../../API/axios';

function ColumnMedCore10(props) {
  const { Text } = Typography;
  const location = useLocation();
  const [data, setData] = useState([]);
  const [loadingPage, setLoadingPage] = useState(false);

  // handle get data points
  const studentId = location.pathname.split('/')[2];
  const handleGetDataTrainingPoints = (studentId) => {
    setLoadingPage(true);
    if (studentId !== undefined) {
      getDataStudentPoint10(studentId)
        .then((res) => {
          if (res.data?.success === true) {
            setData(res.data?.data?.items);
            setLoadingPage(false);
          }
        })
        .finally(() => setLoadingPage(false));
    }
  };
  useEffect(() => {
    handleGetDataTrainingPoints(studentId);
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
        alias: 'Kì',
      },
      value: {
        alias: 'Điểm trung bình học tập ( hệ 10 )',
      },
    },
  };
  return (
    <div>
      <div className='mt-12'>
        <Spin
          spinning={loadingPage}
          indicator={
            <LoadingOutlined
              style={{
                color: 'orange',
                fontSize: 24,
              }}
              spin
            />
          }
        >
          <Column {...config} />
          <Text style={{ display: 'block', textAlign: 'center', opacity: 0.5, marginTop: '10px' }} italic>
            Biểu đồ điểm trung bình học tập theo từng kì học
          </Text>
        </Spin>
      </div>
    </div>
  );
}

export default ColumnMedCore10;