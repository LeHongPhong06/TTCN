import { Descriptions } from 'antd';
import React from 'react';
function PersonalInformationStudent(props) {
  return (
    <div className='px-10 py-24'>
      <div className='border-2 border-black rounded-3xl p-12'>
        <Descriptions column={7}>
          <Descriptions.Item
            span={4}
            labelStyle={{ fontSize: '16px', marginBottom: '32px' }}
            contentStyle={{ fontSize: '16px' }}
            label='Họ và tên'
          >
            Nguyễn Văn A
          </Descriptions.Item>
          <Descriptions.Item
            span={3}
            labelStyle={{ fontSize: '16px', marginBottom: '32px' }}
            contentStyle={{ fontSize: '16px' }}
            label='Số điện thoại'
          >
            0987654321
          </Descriptions.Item>
          <Descriptions.Item
            span={4}
            labelStyle={{ fontSize: '16px', marginBottom: '32px' }}
            contentStyle={{ fontSize: '16px' }}
            label='Email'
          >
            example@gmail.com
          </Descriptions.Item>
          <Descriptions.Item
            span={3}
            labelStyle={{ fontSize: '16px', marginBottom: '32px' }}
            contentStyle={{ fontSize: '16px' }}
            label='Giới tính'
          >
            Nam
          </Descriptions.Item>
          <Descriptions.Item
            span={4}
            labelStyle={{ fontSize: '16px', marginBottom: '32px' }}
            contentStyle={{ fontSize: '16px' }}
            label='Ngày sinh'
          >
            2001-04-24
          </Descriptions.Item>
          <Descriptions.Item
            span={3}
            labelStyle={{ fontSize: '16px', marginBottom: '32px' }}
            contentStyle={{ fontSize: '16px' }}
            label='Mã sinh viên'
          >
            652323
          </Descriptions.Item>
          <Descriptions.Item
            span={4}
            labelStyle={{ fontSize: '16px', marginBottom: '32px' }}
            contentStyle={{ fontSize: '16px' }}
            label='Lớp'
          >
            K64CNPM
          </Descriptions.Item>
          <Descriptions.Item
            span={3}
            labelStyle={{ fontSize: '16px', marginBottom: '32px' }}
            contentStyle={{ fontSize: '16px' }}
            label='Chuyên ngành'
          >
            Công nghệ phần mềm
          </Descriptions.Item>
          <Descriptions.Item
            span={4}
            labelStyle={{ fontSize: '16px', marginBottom: '32px' }}
            contentStyle={{ fontSize: '16px' }}
            label='Nơi ở hiện tại'
          >
            Hà Nội
          </Descriptions.Item>
          <Descriptions.Item
            span={3}
            labelStyle={{ fontSize: '16px', marginBottom: '32px' }}
            contentStyle={{ fontSize: '16px' }}
            label='Quên quán'
          >
            Hải Phòng
          </Descriptions.Item>
          <Descriptions.Item
            span={4}
            labelStyle={{ fontSize: '16px', marginBottom: '32px' }}
            contentStyle={{ fontSize: '16px' }}
            label='Họ và tên bố ( mẹ )'
          >
            Ông: Nguyễn Văn B
          </Descriptions.Item>
          <Descriptions.Item
            span={3}
            labelStyle={{ fontSize: '16px', marginBottom: '32px' }}
            contentStyle={{ fontSize: '16px' }}
            label='Thông tin liên hệ bố ( mẹ )'
          >
            0234567790
          </Descriptions.Item>
          <Descriptions.Item
            span={7}
            labelStyle={{ fontSize: '16px' }}
            contentStyle={{ fontSize: '16px' }}
            label='Tình trạng'
          >
            Chưa tốt nghiệp
          </Descriptions.Item>
        </Descriptions>
      </div>
    </div>
  );
}

export default PersonalInformationStudent;
