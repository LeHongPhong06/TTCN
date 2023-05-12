import React, { useState } from 'react';
import { Button, Col, Form, Row, Switch, message } from 'antd';

function FormMod(props) {
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
          <Col span={16}>
            <Form.Item
              label='Lấy danh sách xếp loại sinh viên mỗi lớp theo kỳ'
              valuePropName='checked'
              name='GET_CLASS_CLASSIFICATION'
            >
              <Switch />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='Xóa điểm' valuePropName='checked' name='DELETE_POINT'>
              <Switch />
            </Form.Item>
          </Col>
          <Col span={16}>
            <Form.Item
              label='Lấy danh sách xếp loại sinh viên mỗi khóa theo kỳ'
              valuePropName='checked'
              name='GET_COURSE_CLASSIFICATION'
            >
              <Switch />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='Thêm điểm' valuePropName='checked' name='CREATE_POINT'>
              <Switch />
            </Form.Item>
          </Col>
          <Col span={16}>
            <Form.Item label='Lấy danh sách điểm' valuePropName='checked' name='GET_POINT_LIST'>
              <Switch />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='Sửa điểm' valuePropName='checked' name='UPDATE_POINT'>
              <Switch />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Button
              loading={loadingBtn}
              type='primary'
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

export default FormMod;
