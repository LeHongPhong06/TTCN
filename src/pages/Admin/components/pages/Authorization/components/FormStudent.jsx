import React, { useState } from 'react';
import { Button, Col, Form, Row, Switch, message } from 'antd';

function FormStudent(props) {
  const [loadingBtn, setLoadingBtn] = useState(false);
  const onFinish = (values) => {
    setLoadingBtn(true);
    message.success('Cập nhật quyền SUPERADMIN thành công');
    console.log(values);
  };
  return (
    <div>
      <Form
        style={{
          width: 800,
          marginLeft: 10,
        }}
        onFinish={onFinish}
      >
        <Row gutter={[8]}>
          <Col span={12}>
            <Form.Item label='Lấy thông tin sinh viên' valuePropName='checked' name='GET_STUDENT_DETAIL'>
              <Switch />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label='Lấy bảng điểm cá nhân' valuePropName='checked' name='GET_POINT_DETAIL'>
              <Switch />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label='Lấy bảng điểm tích lũy' valuePropName='checked' name='GET_ACCUMULATION_DETAIL'>
              <Switch />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label='Cập nhật thông tin cá nhân' valuePropName='checked' name='UPDATE_STUDENT_DETAIL'>
              <Switch />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Button
              type='primary'
              loading={loadingBtn}
              htmlType='submit'
              className='rounded-full px-7 py-4 flex justify-center items-center'
            >
              Lưu
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default FormStudent;
