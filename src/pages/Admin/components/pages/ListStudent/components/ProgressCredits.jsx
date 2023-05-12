import { Liquid } from '@ant-design/plots';
import { Descriptions, Spin, message } from 'antd';
import React, { useEffect, useState } from 'react';
import { getDataAccumulation } from '../../../../../../API/axios';
function ProgressCredits({ dataStudent }) {
  const studentId = dataStudent?.id;
  const [data, setData] = useState({});
  const [loadingChart, setLoadingChart] = useState(false);

  const handleGetDataAccumulation = () => {
    setLoadingChart(true);
    if (studentId !== undefined) {
      getDataAccumulation(studentId)
        .then((res) => {
          if (res.data.success === true) {
            setData(res.data?.data);
            setLoadingChart(false);
          } else return message.error(res.data?.error.message);
        })
        .finally(() => setLoadingChart(false));
    }
  };
  useEffect(() => {
    handleGetDataAccumulation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [studentId]);
  const number = data ? data?.creditsAccumulated / data?.totalCredits : 0;
  const config = {
    percent: number,
    outline: {
      border: 4,
      distance: 4,
    },
    wave: {
      length: 128,
    },
  };
  return (
    <div>
      <Spin spinning={loadingChart}>
        <div className='flex justify-between items-center h-[200px]'>
          <Liquid width={200} height={280} {...config} />
          <Descriptions labelStyle={{ width: '200px' }} bordered={true} layout='horizontal' column={1}>
            <Descriptions.Item span={1} label='Số tín chỉ tích lũy'>
              {data?.creditsAccumulated}
            </Descriptions.Item>
            <Descriptions.Item span={1} label='Tổng số tín chỉ của chương trình đào tạo'>
              {data?.totalCredits}
            </Descriptions.Item>
          </Descriptions>
        </div>
      </Spin>
    </div>
  );
}

export default ProgressCredits;
