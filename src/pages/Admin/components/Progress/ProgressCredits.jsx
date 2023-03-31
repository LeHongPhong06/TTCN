import React from 'react';
import { Liquid } from '@ant-design/plots';
import { PageContainer } from '@ant-design/pro-components';
function ProgressCredits(props) {
  const config = {
    percent: 0.75,
    outline: {
      border: 4,
      distance: 5,
    },
    wave: {
      length: 128,
    },
  };
  return (
    <div>
      <PageContainer title='Tiến độ hoàn thành chương trình học tập'>
        <Liquid width={250} height={250} {...config} />
      </PageContainer>
    </div>
  );
}

export default ProgressCredits;
