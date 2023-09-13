import { FileImageOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Space, Upload } from 'antd';
import Cookies from 'js-cookie';
import React, { useState } from 'react';
import { ButtonCustom } from '../../../components/Button';
import { notificationError } from '../../../components/Notification';
import { FormInfoUser } from '../components/Form/FormInfoUser';
import { DefaultLayoutPage } from '../components/Layout/DefaultLayoutPage';
import { ModalEditPhoneNumber } from '../components/ModalForm';

function PersonalInfoUser() {
  const [openModalFormPhoneNumber, setOpenModalFormPhoneNumber] = useState(false);
  const token = Cookies.get('access_token');
  const props = {
    name: 'file',
    multiple: false,
    action: `${process.env.BASE_URL_API}/admin/student/import`,
    showUploadList: false,
    headers: {
      Authorization: token ? `Bearer ${token}` : undefined,
    },
    beforeUpload: (file) => {
      const isSize = file.size / 1024 / 1024 < 2;
      const isPNG = file.type === 'image/png';
      if (!isPNG) {
        notificationError(`${file.name} không phải định dạng ảnh`);
        return false;
      }
      if (!isSize) {
        notificationError(`${file.name} không phải định dạng ảnh`);
        return false;
      }
      return true;
    },
  };
  const handleOpenChange = (open) => {
    if (!open) {
      setOpenModalFormPhoneNumber(false);
    }
  };
  const handleClickUpdatePhoneNumber = () => {
    setOpenModalFormPhoneNumber(true);
  };
  return (
    <>
      <DefaultLayoutPage>
        <section className='p-4 bg-white'>
          <h1 className='lg:ml-10 xl:ml-20 pl-6 xl:pl-8 xl:mb-12 border-l-8 border-rootGreen uppercase text-rootGreen font-semibold text:xl lg:text-3xl xl:text-4xl mb-4'>
            Thông tin cá nhân
          </h1>
          <div className='py-8'>
            <div className='flex flex-col md:flex-row items-center gap-10'>
              <div className='w-[30%] flex flex-col items-center h-[300px] lg:h-[600px] gap-9 pb-8 md:pb-0 border-b-2 border-rootGreen md:border-r-2 md:border-b-0'>
                <Avatar
                  size={{
                    xs: 150,
                    sm: 150,
                    md: 150,
                    lg: 150,
                    xl: 170,
                    xxl: 200,
                  }}
                  icon={<UserOutlined />}
                />
                <Space direction='vertical' size={20}>
                  <Upload {...props}>
                    <ButtonCustom title='Đổi ảnh đại diện' icon={<FileImageOutlined />} />
                  </Upload>
                  <ButtonCustom title='Cập nhật số điện thoại' handleClick={handleClickUpdatePhoneNumber} />
                </Space>
              </div>
              <div className='w-[70%] flex justify-center lg:px-16'>
                <FormInfoUser />
              </div>
            </div>
          </div>
        </section>
        <ModalEditPhoneNumber open={openModalFormPhoneNumber} onOpenChange={handleOpenChange} />
      </DefaultLayoutPage>
    </>
  );
}

export default PersonalInfoUser;
