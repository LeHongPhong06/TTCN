import { PageContainer } from '@ant-design/pro-components';
import React from 'react';
import News from '../../components/News/News';
import Propose from '../../components/Propose/Propose';
import ThumnailSlider from '../../components/Slider/ThumnailSlider';

function HomePageStudent(props) {
  return (
    <div>
      <ThumnailSlider />
      <PageContainer title='Tin tức'>
        <News />
      </PageContainer>
      <PageContainer title='Đề xuất cho bạn'>
        <Propose />
      </PageContainer>
    </div>
  );
}
export default HomePageStudent;
