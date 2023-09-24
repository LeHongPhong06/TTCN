import { ModalForm, ProForm, ProFormText, ProFormUploadButton } from '@ant-design/pro-components';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Space } from 'antd';
import React from 'react';
import { adminStatusApi } from '../../../../API/admin/adminStatusApi';
import { ButtonCustom } from '../../../../components/Button';
import { CKEditorComponent } from '../../../../components/CKEditor';
import { notificationError, notificationSuccess } from '../../../../components/Notification';

export function ModalFormNews({ dataNews, openForm, onChangeClickOpen }) {
  const queryClient = useQueryClient();
  const handleClickSubmit = (props) => {
    props.submit();
  };
  const handleClickCancel = () => {
    onChangeClickOpen(false);
  };
  // handle create class
  const handleCreateStatus = useMutation({
    mutationKey: ['createStatus'],
    mutationFn: async (values) => {
      if (values) {
        try {
          const res = await adminStatusApi.createStatus(values);
          if (res) return res;
        } catch (error) {}
      }
    },
    onSuccess: (res) => {
      if (res && res.success === true) {
        queryClient.invalidateQueries({
          queryKey: ['listStatus'],
        });
        notificationSuccess('Tạo tiêu đề thành công');
        onChangeClickOpen(false);
      }
    },
    onError: (error) => {
      notificationError(error?.data);
    },
  });

  // handle update class
  const handleUpdateStatus = useMutation({
    mutationKey: ['updateStatus'],
    mutationFn: async (id, values) => {
      if (values) {
        try {
          const res = await adminStatusApi.createStatus(id, values);
          if (res) return res;
        } catch (error) {}
      }
    },
    onSuccess: (res) => {
      if (res && res.success === true) {
        queryClient.invalidateQueries({
          queryKey: ['listStatus'],
        });
        notificationSuccess('Cập nhật tiêu đề thành công');
        onChangeClickOpen(false);
      }
    },
    onError: (error) => {
      notificationError(error?.data);
    },
  });
  return (
    <div>
      <ModalForm
        width={1150}
        title={'Tin tức'}
        modalProps={{
          destroyOnClose: true,
          maskClosable: false,
        }}
        submitter={{
          render: (props) => [
            <Space>
              <ButtonCustom type='primary' handleClick={() => handleClickSubmit(props)} title={'Tạo mới'} />
              <ButtonCustom title='Hủy' handleClick={handleClickCancel} />
            </Space>,
          ],
        }}
        open={openForm}
        onFinish={(values) => {
          //   if (dataStatus.id) {
          //     handleUpdateStatus.mutate(dataStatus.id, values);
          //   } else {
          //     handleCreateStatus.mutate(values);
          //   }
        }}
        onOpenChange={onChangeClickOpen}
      >
        <ProForm.Group>
          <ProFormText
            rules={[{ required: true, message: 'Không thể để trống' }]}
            width='md'
            name='name'
            label='Tên tiêu đề'
            placeholder='Nhập tên tiêu đề'
          />
          <ProFormUploadButton
            name='upload'
            fieldProps={{
              multiple: false,
              showUploadList: false,
            }}
            getValueProps={(e) => {}}
            label='Ảnh tiêu đề'
            title='Chọn ảnh tải lên'
            action=''
            className='flex items-center justify-center'
          />
        </ProForm.Group>
        <ProForm.Group>
          <ProForm.Item label='Nội dung bài viết' name='content'>
            <CKEditorComponent />
          </ProForm.Item>
        </ProForm.Group>
      </ModalForm>
    </div>
  );
}
