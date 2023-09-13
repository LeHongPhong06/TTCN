import { Collapse } from 'antd';
import React from 'react';
import { ColumnDataMedCore10, ColumnDataMedCore4, ColumnPointTraining, ProgressCredits } from '../Chart';
import DescriptionInfoStudent from '../Description/DescriptionInfoStudent';

export function CollapsePointStudent({ dataStudent }) {
  const { Panel } = Collapse;
  return (
    <div>
      <Collapse>
        <Panel header='Thông tin sinh viên' key='1'>
          <DescriptionInfoStudent dataStudent={dataStudent} />
        </Panel>
        <Panel header='Điểm học tập' key='2'>
          <Collapse>
            <Panel header='Hệ 10' key='3'>
              <ColumnDataMedCore10 dataStudent={dataStudent} />
            </Panel>
            <Panel header='Hệ 4' key='4'>
              <ColumnDataMedCore4 dataStudent={dataStudent} />
            </Panel>
          </Collapse>
        </Panel>
        <Panel header='Điểm rèn luyện' key='5'>
          <ColumnPointTraining dataStudent={dataStudent} />
        </Panel>
        <Panel header='Quá trình học tập' key='6'>
          <ProgressCredits dataStudent={dataStudent} />
        </Panel>
      </Collapse>
    </div>
  );
}
