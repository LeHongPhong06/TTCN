import { Collapse } from 'antd';
import React from 'react';
import { ColumnDataMedCore10, ColumnPointTraining, ChartLiquid } from '../Chart';
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
          </Collapse>
        </Panel>
        <Panel header='Điểm rèn luyện' key='5'>
          <ColumnPointTraining dataStudent={dataStudent} />
        </Panel>
        <Panel header='Quá trình học tập' key='6'>
          <ChartLiquid dataStudent={dataStudent} />
        </Panel>
      </Collapse>
    </div>
  );
}
