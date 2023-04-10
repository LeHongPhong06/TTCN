import React from 'react';
import ColumnLearnPoint from './components/ColumnLearnPoint';
import ColumnTrainingPoint from './components/ColumnTrainingPoint';
import DescriptionsUser from './components/DescriptionsUser';
import ProgressCreditsUser from './components/ProgressCreditsUser';
function PointPageStudent(props) {
  return (
    <div className='px-10 py-8'>
      <div className='border-2 border-gray-300 rounded-2xl pb-8'>
        <DescriptionsUser />
        <ColumnLearnPoint />
        <ColumnTrainingPoint />
        <ProgressCreditsUser />
      </div>
    </div>
  );
}

export default PointPageStudent;
