import { Liquid } from '@ant-design/plots';
import { Descriptions, Spin, message } from 'antd';
import React, { useEffect, useState } from 'react';
import { getDataAccumulation } from '../../../../API/axios';
export function ProgressCredits({ dataStudent }) {
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
          } else if (res.data?.error?.code === 2) {
            // eslint-disable-next-line no-lone-blocks
            {
              res.data?.error?.errorDetailList.forEach((e) => message.error(e.message));
            }
          } else if (res.data?.error?.code === 500) {
            message.error(res.data?.error?.message);
          }
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
        {data && (
          <div className='flex justify-between items-center h-[250px]'>
            <Liquid width={200} height={280} {...config} />
            <Descriptions labelStyle={{ width: 300 }} bordered={true} layout='horizontal' column={1}>
              {/* <Descriptions.Item span={1} label={'Số tín chỉ môn học bắt buộc'}>
                {'81 / 119'}
              </Descriptions.Item>
              <Descriptions.Item span={1} label={'Số tín chỉ môn học tự chọn'}>
                {'8 / 12'}
              </Descriptions.Item> */}
              <Descriptions.Item span={1} label='Tổng số tín chỉ đã hoàn thành'>
                {`${data?.creditsAccumulated} / ${data?.totalCredits}`}
              </Descriptions.Item>
              <Descriptions.Item span={1} label='Điểm trung bình tích lũy ( hệ 4 )'>
                {data?.scoreAccumulated4}
              </Descriptions.Item>
            </Descriptions>
          </div>
        )}
      </Spin>
    </div>
  );
}
