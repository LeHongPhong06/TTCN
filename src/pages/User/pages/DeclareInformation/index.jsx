import { Button, Col, Form, Input, Row, Typography, notification } from 'antd';
import React, { useState } from 'react';

function DeclareInformationPage(props) {
  const [loadingBtn, setLoadingBtn] = useState(false);
  const { Text } = Typography;
  const [api, contextHolder] = notification.useNotification();
  const openNotification = () => {
    api.success({
      message: 'Thành công',
      description: 'Bạn đã cập nhật thông tin thành công !',
    });
  };
  const onFinish = (values) => {
    setLoadingBtn(true);
    openNotification();
    console.log('Success:', values);
  };
  const data = {
    id: 3,
    name: 'Cam Trọng Hiếu',
    studentId: '655203',
    phoneNumber: '0987654321',
    gender: 'Nam',
    dateOfBirth: '1990-01-01',
    email: 'hzdkv@example.com',
    className: 'K65CNTTB',
    majorName: 'CNTT',
    placeOfOrigin: 'HaNoi',
    accommodation: 'HaNoi',
    parentName: 'Le Van A',
    parentNumberPhone: '0983231321',
    status: 'Chưa tốt nghiệp',
  };

  return (
    <div className='pt-20'>
      <div className='flex flex-col justify-center items-center bg-orange-300 rounded-xl pb-10'>
        <div className='my-12 flex flex-col'>
          <Text italic style={{ marginBottom: 10, fontSize: 18, fontWeight: 500 }}>
            Họ và tên: {'Nguyễn Văn A'}
          </Text>
          <Text italic style={{ fontSize: 18, fontWeight: 500 }}>
            Mã sinh viên: {'655789'}
          </Text>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <Form
            title='Cập nhật thông tin'
            layout='vertical'
            name='basic'
            labelCol={{ span: 12 }}
            style={{
              width: 800,
            }}
            initialValues={data}
            onFinish={onFinish}
            autoComplete='off'
          >
            <Row gutter={[48, 24]}>
              <Col span={12}>
                <Form.Item
                  label={<Text style={{ fontSize: 16, fontWeight: 500 }}>Số điện thoại</Text>}
                  name='phoneNumber'
                  rules={[
                    {
                      required: true,
                      message: 'Không thể để trống số điện thoại',
                    },
                  ]}
                >
                  <Input size='large' />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label={<Text style={{ fontSize: 16, fontWeight: 500 }}>Email</Text>}
                  name='email'
                  rules={[
                    {
                      required: true,
                      message: 'Không thể để trống địa chỉ email',
                    },
                  ]}
                >
                  <Input size='large' />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label={<Text style={{ fontSize: 16, fontWeight: 500 }}>Địa chỉ nơi ở hiện tại</Text>}
                  name='placeOfOrigin'
                >
                  <Input size='large' />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label={<Text style={{ fontSize: 16, fontWeight: 500 }}>Địa chỉ quê quán</Text>}
                  name='accommodation'
                  rules={[
                    {
                      required: true,
                      message: 'Không thể để trống địa chỉ quê quán',
                    },
                  ]}
                >
                  <Input size='large' />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label={<Text style={{ fontSize: 16, fontWeight: 500 }}>{`Họ và tên bố ( mẹ )`}</Text>}
                  name='parentName'
                >
                  <Input size='large' />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label={<Text style={{ fontSize: 16, fontWeight: 500 }}>{`Số điện thoại bố ( mẹ )`}</Text>}
                  name='parentNumberPhone'
                >
                  <Input size='large' />
                </Form.Item>
              </Col>
              <Col span={24} className='flex justify-center'>
                {contextHolder}
                <Button
                  loading={loadingBtn}
                  type='default'
                  htmlType='submit'
                  className='flex justify-center items-center px-8 py-4 bg-white font-medium'
                >
                  Lưu
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default DeclareInformationPage;
