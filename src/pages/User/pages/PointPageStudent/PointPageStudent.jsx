import { PageContainer } from '@ant-design/pro-components';
import { Descriptions } from 'antd';
import React from 'react';
import ColumnCreditsStudent from '../../components/ColumnChart/ColumnCreditsStudent';
function PointPageStudent(props) {
  return (
    <div className='px-10 py-12'>
      <PageContainer className='border-2 border-black rounded-2xl'>
        <Descriptions layout='horizontal' column={1}>
          <Descriptions.Item
            span={1}
            label='Sinh viên'
            labelStyle={{ fontSize: '16px', marginBottom: '12px' }}
            contentStyle={{ fontSize: '16px' }}
          >
            Nguyễn Văn A
          </Descriptions.Item>
          <Descriptions.Item
            span={1}
            label='Mã sinh viên'
            labelStyle={{ fontSize: '16px', marginBottom: '12px' }}
            contentStyle={{ fontSize: '16px' }}
          >
            888888
          </Descriptions.Item>
          <Descriptions.Item
            span={1}
            label='Lớp'
            labelStyle={{ fontSize: '16px', marginBottom: '12px' }}
            contentStyle={{ fontSize: '16px' }}
          >
            K65CNTTA
          </Descriptions.Item>
          <Descriptions.Item
            span={1}
            label='Chuyên ngành'
            labelStyle={{ fontSize: '16px', marginBottom: '12px' }}
            contentStyle={{ fontSize: '16px' }}
          >
            CNTT
          </Descriptions.Item>
          <Descriptions.Item
            span={1}
            label='Tình trạng sinh viên'
            labelStyle={{ fontSize: '16px' }}
            contentStyle={{ fontSize: '16px' }}
          >
            Chưa tốt nghiệp
          </Descriptions.Item>
        </Descriptions>
        <ColumnCreditsStudent />
      </PageContainer>
    </div>
  );
}

export default PointPageStudent;
