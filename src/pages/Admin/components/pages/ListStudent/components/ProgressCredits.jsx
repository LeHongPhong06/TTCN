import React from 'react';
import { Liquid } from '@ant-design/plots';
import { PageContainer } from '@ant-design/pro-components';
import { Descriptions } from 'antd';
function ProgressCredits(props) {
  const number = 78 / 131;
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
      <PageContainer title='Tiến độ hoàn thành chương trình học tập'>
        <div className='flex justify-between items-center h-[200px]'>
          <Liquid width={200} height={280} {...config} />
          <Descriptions labelStyle={{ width: '200px' }} bordered={true} layout='horizontal' column={1}>
            <Descriptions.Item span={1} label='Số tín chỉ tích lũy'>
              78
            </Descriptions.Item>
            <Descriptions.Item span={1} label='Tổng số tín chỉ của chương trình đào tạo'>
              131
            </Descriptions.Item>
            <Descriptions.Item span={1} label='Tiến độ'>
              Trung bình
            </Descriptions.Item>
          </Descriptions>
        </div>
      </PageContainer>
    </div>
  );
}

export default ProgressCredits;
