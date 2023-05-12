import { Descriptions } from 'antd';
import React from 'react';

function DescriptionInfoStudent({ dataStudent }) {
  return (
    <div>
      <Descriptions bordered={true} layout='vertical'>
        <Descriptions.Item label='Mã sinh viên'>{dataStudent?.id ? dataStudent?.id : '[ Không có dữ liệu ]'}</Descriptions.Item>
        <Descriptions.Item label='Họ và tên'>{dataStudent?.name ? dataStudent?.name : '[ Không có dữ liệu ]'}</Descriptions.Item>
        <Descriptions.Item label='Khóa'>{dataStudent?.course?.id ? dataStudent?.course?.id : '[ Không có dữ liệu ]'}</Descriptions.Item>
        <Descriptions.Item label='Chuyên ngành'>
          {dataStudent?.major?.id ? dataStudent?.major?.id : '[ Không có dữ liệu ]'}
        </Descriptions.Item>
        <Descriptions.Item label='Lớp'>{dataStudent?.classes?.id ? dataStudent?.classes?.id : '[ Không có dữ liệu ]'}</Descriptions.Item>
        <Descriptions.Item label='Ngày sinh'>{dataStudent?.dob ? dataStudent?.dob : '[ Không có dữ liệu ]'}</Descriptions.Item>
        <Descriptions.Item label='Giới tính'>{dataStudent?.gender ? dataStudent?.gender : '[ Không có dữ liệu ]'}</Descriptions.Item>
        <Descriptions.Item label='Số điện thoại'>
          {dataStudent?.phoneNumber ? dataStudent?.phoneNumber : '[ Không có dữ liệu ]'}
        </Descriptions.Item>
        <Descriptions.Item label='Email'>{dataStudent?.email ? dataStudent?.email : '[ Không có dữ liệu ]'}</Descriptions.Item>
        <Descriptions.Item label='Quê quán'>{dataStudent?.homeTown ? dataStudent?.homeTown : '[ Không có dữ liệu ]'}</Descriptions.Item>
        <Descriptions.Item label='Nơi ở hiện tại'>
          {dataStudent?.residence ? dataStudent?.residence : '[ Không có dữ liệu ]'}
        </Descriptions.Item>
        <Descriptions.Item label='Họ và tên bố'>
          {dataStudent?.fatherName ? dataStudent?.fatherName : '[ Không có dữ liệu ]'}
        </Descriptions.Item>
        <Descriptions.Item label='Số điện thoại bố'>
          {dataStudent?.fatherPhoneNumber ? dataStudent?.fatherPhoneNumber : '[ Không có dữ liệu ]'}
        </Descriptions.Item>
        <Descriptions.Item label='Họ và tên mẹ'>
          {dataStudent?.motherName ? dataStudent?.motherName : '[ Không có dữ liệu ]'}
        </Descriptions.Item>
        <Descriptions.Item label='Số điện thoại mẹ'>
          {dataStudent?.motherPhoneNumber ? dataStudent?.motherPhoneNumber : '[ Không có dữ liệu ]'}
        </Descriptions.Item>
        <Descriptions.Item label='Tình trạng'>{dataStudent?.status ? dataStudent?.status : '[ Không có dữ liệu ]'}</Descriptions.Item>
        <Descriptions.Item label='Thời gian'>
          {dataStudent?.statusDate ? dataStudent?.statusDate : '[ Không có dữ liệu ]'}
        </Descriptions.Item>
      </Descriptions>
    </div>
  );
}

export default DescriptionInfoStudent;
