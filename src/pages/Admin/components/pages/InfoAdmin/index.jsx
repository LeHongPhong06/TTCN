import { PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Space, Typography, Upload, notification } from 'antd';
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getInfoAdmin, updateInfoAdmin } from '../../../../../API/axios';
import { baseUrl } from '../../../../../API/request';
import ModalChangePassword from './ModalChangePassword';

function AdminChangeInfomation() {
  const { roleId } = useParams();
  const [form] = Form.useForm();
  const { Title } = Typography;
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const jwt = Cookies.get('jwt');

  const onFinish = (values) => {
    setLoading(true);
    if (roleId !== undefined) {
      setLoading(true);
      updateInfoAdmin({ id: roleId, info: values })
        .then((res) => {
          if (res.data?.success === true) {
            notification.success({
              message: 'Thành công',
              description: 'Cập nhật thành công',
              duration: 3,
            });
            setLoading(false);
          }
        })
        .finally(() => setLoading(false));
    }
  };

  const handleGetInfoAdmin = () => {
    getInfoAdmin(roleId).then((res) => {
      if (res.data?.success === true) {
        form.setFieldsValue(res.data?.data);
      }
    });
  };
  useEffect(() => {
    handleGetInfoAdmin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roleId]);
  const props = {
    action: `${baseUrl}/admin/admin/avatar/${roleId}`,
    headers: {
      Authorization: jwt ? `Bearer ${jwt}` : undefined,
    },
    onChange: (file) => {
      const { response } = file.file;
      if (response && response?.success === true) {
        notification.success({
          message: 'Thành công',
          description: 'Ảnh đại diện đã được cập nhật',
          duration: 3,
        });
        sessionStorage.setItem('avatarUser', response?.data?.avatar);
      }
    },
    beforeUpload: (file) => {
      const { size, type } = file;
      const isSize = size / 1024 / 1024 < 2;
      const isType = type === 'image/jpeg' || file.type === 'image/png';
      if (!isType) {
        notification.error({
          message: 'Thất bại',
          description: `${file.name} phải là một file ảnh`,
          duration: 3,
          placement: 'topRight',
        });
        return false;
      }
      if (!isSize) {
        notification.error({
          message: 'Thất bại',
          description: `Ảnh tải lên không được quá 2MB`,
          duration: 3,
          placement: 'topRight',
        });
        return false;
      }
      return true;
    },
  };
  return (
    <div className='flex justify-center items-center flex-col'>
      <Title
        level={2}
        style={{
          textTransform: 'uppercase',
        }}
      >
        Thông tin cá nhân
      </Title>
      <div className='px-44 pt-16 pb-8 bg-slate-600 rounded-lg flex flex-col items-center max-w-[80%]'>
        <div className='bg-slate-50 px-16 py-8 rounded-lg'>
          <Form
            form={form}
            style={{
              width: 500,
              maxWidth: 700,
            }}
            onFinish={onFinish}
            autoComplete='off'
          >
            <Form.Item label='Tên người dùng' name='name'>
              <Input />
            </Form.Item>
            <Form.Item label='Email' name='email'>
              <Input />
            </Form.Item>
            <Form.Item label='Ảnh đại diện' valuePropName='fileList'>
              <Upload {...props} listType='picture-card'>
                <Space direction='vertical'>
                  <div>
                    <PlusOutlined />
                    <div
                      style={{
                        marginTop: 8,
                      }}
                    >
                      Upload
                    </div>
                  </div>
                </Space>
              </Upload>
            </Form.Item>
            <Button type='link' onClick={() => setOpenModal(true)} className='pl-0'>
              Đổi mật khẩu
            </Button>
            <Form.Item className='flex justify-center items-center'>
              <Button
                type='primary'
                htmlType='submit'
                loading={loading}
                className='mb-0 w-[150px] flex justify-center items-center'
              >
                Cập nhật
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
      <ModalChangePassword
        openModal={openModal}
        onOpenChange={(open) => {
          if (!open) {
            setOpenModal(false);
          }
        }}
        onSuccess={() => setOpenModal(false)}
      />
    </div>
  );
}

export default AdminChangeInfomation;
