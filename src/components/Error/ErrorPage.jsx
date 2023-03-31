import { Result } from 'antd';
import React from 'react';

function ErrorPage(props) {
  return (
    <div className='mt-[10%]'>
      <Result
        status='error'
        title='Submission Failed'
        subTitle='Please check and modify the following information before resubmitting.'
      ></Result>
    </div>
  );
}

export default ErrorPage;
