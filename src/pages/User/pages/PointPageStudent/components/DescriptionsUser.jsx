import { PageContainer } from '@ant-design/pro-components';
import { Descriptions } from 'antd';
import React from 'react';

function DescriptionsUser(props) {
  return (
    <div>
      <PageContainer>
        <Descriptions
          layout='horizontal'
          column={1}
          labelStyle={{ fontSize: '16px', marginBottom: '12px' }}
          contentStyle={{ fontSize: '16px' }}
        >
          <Descriptions.Item span={1} label='Sinh viên'>
            Nguyễn Văn A
          </Descriptions.Item>
          <Descriptions.Item span={1} label='Mã sinh viên'>
            888888
          </Descriptions.Item>
          <Descriptions.Item span={1} label='Lớp'>
            K65CNTTA
          </Descriptions.Item>
          <Descriptions.Item span={1} label='Chuyên ngành'>
            CNTT
          </Descriptions.Item>
          <Descriptions.Item span={1} label='Tình trạng sinh viên'>
            Chưa tốt nghiệp
          </Descriptions.Item>
        </Descriptions>
      </PageContainer>
    </div>
  );
}

export default DescriptionsUser;
