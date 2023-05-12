import { LoadingOutlined } from '@ant-design/icons';
import { Liquid } from '@ant-design/plots';
import { Descriptions, Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getDataStudentAccumulation } from '../../../../../API/axios';

function ProgressCreditsUser(props) {
  const [data, setData] = useState({});
  const location = useLocation();
  const studentId = location.pathname.split('/')[2];
  const [loadingPage, setLoadingPage] = useState();
  const handleGetDataAcc = () => {
    setLoadingPage(true);
    getDataStudentAccumulation(studentId)
      .then((res) => {
        if (res.data?.success === true) {
          setData(res.data?.data);
          setLoadingPage(false);
        }
      })
      .finally(() => setLoadingPage(false));
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => handleGetDataAcc(studentId), [studentId]);
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
      <div className='flex justify-around items-center h-[200px]'>
        <Liquid width={200} height={280} {...config} />
        <Descriptions labelStyle={{ width: '300px' }} bordered={true} layout='horizontal' column={1}>
          <Descriptions.Item span={1} label='Số tín chỉ tích lũy'>
            {data?.creditsAccumulated}
          </Descriptions.Item>
          <Descriptions.Item label='Tổng số tín chỉ của chương trình đào tạo' span={1}>
            {data?.totalCredits}
          </Descriptions.Item>
          <Descriptions.Item span={1} label='Điểm trung bình tích lũy ( hệ 4 )'>
            {data?.scoreAccumulated4}
          </Descriptions.Item>
        </Descriptions>
      </div>
    </Spin>
  );
}

export default ProgressCreditsUser;
