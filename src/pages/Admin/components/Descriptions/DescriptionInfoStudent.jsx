import { Descriptions } from 'antd';
import React from 'react';

function DescriptionInfoStudent({ dataStudent }) {
  return (
    <div>
      <Descriptions bordered={true} layout='vertical' title='Thông tin sinh viên'>
        <Descriptions.Item label='Họ và tên'>{dataStudent.name}</Descriptions.Item>
        <Descriptions.Item label='Mã sinh viên'>{dataStudent.studentId}</Descriptions.Item>
        <Descriptions.Item label='Số điện thoại'>{dataStudent.phoneNumber}</Descriptions.Item>
        <Descriptions.Item label='Giới tính'>{dataStudent.gender}</Descriptions.Item>
        <Descriptions.Item label='Ngày sinh'>{dataStudent.dateOfBirth}</Descriptions.Item>
        <Descriptions.Item label='Email'>{dataStudent.email}</Descriptions.Item>
        <Descriptions.Item label='Lớp'>{dataStudent.className}</Descriptions.Item>
        <Descriptions.Item label='Chuyên ngành'>{dataStudent.majorName}</Descriptions.Item>
        <Descriptions.Item label='Nơi ở hiện tại'>{dataStudent.placeOfOrigin}</Descriptions.Item>
        <Descriptions.Item label='Quê quán'>{dataStudent.accommodation}</Descriptions.Item>
        <Descriptions.Item label='Họ và tên bố (mẹ)'>{dataStudent.parentName}</Descriptions.Item>
        <Descriptions.Item label='Số điện thoại bố (mẹ)'>{dataStudent.parentNumberPhone}</Descriptions.Item>
        <Descriptions.Item label='Tình trạng'>{dataStudent.status}</Descriptions.Item>
      </Descriptions>
    </div>
  );
}

export default DescriptionInfoStudent;
