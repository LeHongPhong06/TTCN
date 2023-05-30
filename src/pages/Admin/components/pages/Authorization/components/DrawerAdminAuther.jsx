import { Collapse } from 'antd';
import React from 'react';
import FormAuthAdmin from './FormAuthAdmin';
import FormAuthSuperMod from './FormAuthSuperMod';
import FormAuthMod from './FormAuthMod';
import FormAuthStudent from './FormAuthStudent';

function DrawerAdminAuther(props) {
  const { Panel } = Collapse;

  return (
    <div>
      <Collapse
        accordion
        style={{
          width: '100%',
        }}
      >
        <Panel header='ADMIN' key='1'>
          <FormAuthAdmin />
        </Panel>
        <Panel header='SUPERMOD' key='2'>
          <FormAuthSuperMod />
        </Panel>
        <Panel header='MOD' key='3'>
          <FormAuthMod />
        </Panel>
        <Panel header='STUDENT' key='4'>
          <FormAuthStudent />
        </Panel>
      </Collapse>
    </div>
  );
}

export default DrawerAdminAuther;
