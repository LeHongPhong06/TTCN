import { Segmented } from 'antd';
import { useState } from 'react';
import { ClassStatistical, MajorStatistical, StudentStatistical } from '../components/ContentSegmented';

function ManagerStatisticalPage(props) {
  const [valueSegmented, setValueSegmented] = useState('student');
  const handleChangeValue = (e) => {
    setValueSegmented(e);
  };
  const options = [
    {
      label: <h1 className='px-3 py-2 font-medium'>Sinh viên</h1>,
      value: 'student',
    },
    {
      label: <h1 className='px-3 py-2 font-medium'>Lớp</h1>,
      value: 'class',
    },
    {
      label: <h1 className='px-3 py-2 font-medium'>Khóa học</h1>,
      value: 'major',
    },
    {
      label: <h1 className='px-3 py-2 font-medium'>Chuyên ngành</h1>,
      value: 'course',
    },
    {
      label: <h1 className='px-3 py-2 font-medium'>Khoa</h1>,
      value: 'a',
    },
  ];
  return (
    <section>
      <Segmented
        options={options}
        size='large'
        onChange={handleChangeValue}
        defaultValue={'student'}
        className='mb-6'
      />
      {valueSegmented === 'student' && <StudentStatistical />}
      {valueSegmented === 'class' && <ClassStatistical />}
      {valueSegmented === 'major' && <MajorStatistical />}
      {valueSegmented === 'course' && <StudentStatistical />}
    </section>
  );
}

export default ManagerStatisticalPage;
