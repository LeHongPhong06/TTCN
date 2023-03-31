import { ModalForm, ProForm, ProFormDateRangePicker, ProFormText } from '@ant-design/pro-components';
import { message } from 'antd';
import React from 'react';
function ModalFormUser({ openForm, onChangeClickOpen, dataStudent }) {
  const handleCreateStudent = () => {
    message.success('Tạo sinh viên thành công');
  };
  const handleUpdateStudent = () => {
    message.success('Sửa thông tin sinh viên thành công');
  };
  return (
    <div>
      <ModalForm
        title={dataStudent.id ? 'Sửa thông tin sinh viên' : 'Thêm sinh viên'}
        open={openForm}
        onFinish={() => {
          if (dataStudent.id) {
            handleUpdateStudent();
          } else {
            handleCreateStudent();
          }
        }}
        onOpenChange={onChangeClickOpen}
      >
        <ProForm.Group>
          <ProFormText width='md' name='name' label='签约客户名称' tooltip='最长为 24 位' placeholder='请输入名称' />
          <ProFormText width='md' name='company' label='我方公司名称' placeholder='请输入名称' />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormText width='md' name='contract' label='合同名称' placeholder='请输入名称' />
          <ProFormDateRangePicker name='contractTime' label='合同生效时间' />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormText width='md' name='contract' label='合同名称' placeholder='请输入名称' />
          <ProFormDateRangePicker name='contractTime' label='合同生效时间' />
        </ProForm.Group>
        <ProForm.Group>
          <ProFormText width='md' name='contract' label='合同名称' placeholder='请输入名称' />
          <ProFormDateRangePicker name='contractTime' label='合同生效时间' />
        </ProForm.Group>
      </ModalForm>
    </div>
  );
}

export default ModalFormUser;
