import { Collapse } from 'antd';
import React from 'react';
import FormSuperAdmin from './FormSuperAdmin';
import FormAdmin from './FormAdmin';
import FormSuperMod from './FormSuperMod';
import FormMod from './FormMod';
import FormStudent from './FormStudent';

function ContentPopover(props) {
  const { Panel } = Collapse;
  return (
    <div>
      <Collapse
        accordion
        style={{
          width: 850,
        }}
      >
        <Panel header='ADMIN' key='2'>
          <FormAdmin />
        </Panel>
        <Panel header='SUPERMOD' key='3'>
          <FormSuperMod />
        </Panel>
        <Panel header='MOD' key='4'>
          <FormMod />
        </Panel>
        <Panel header='STUDENT' key='5'>
          <FormStudent />
        </Panel>
      </Collapse>
    </div>
  );
}

export default ContentPopover;
