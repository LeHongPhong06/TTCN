import { Button, Col, Form, Row, Switch, message } from 'antd';
import React, { useState } from 'react';

function FormSuperAdmin(props) {
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
          <Col span={8}>
            <Form.Item label='Lấy danh sách quản trị viên' valuePropName='checked' name='GET_ADMIN_LIST'>
              <Switch />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='Thêm quản trị viên' valuePropName='checked' name='CREATE_ADMIN'>
              <Switch />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='Cập nhật quản trị viên' valuePropName='checked' name='UPDATE_ADMIN'>
              <Switch />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='Xóa quản trị viên' valuePropName='checked' name='DELETE_ADMIN'>
              <Switch />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='Lấy danh sách quyền' valuePropName='checked' name='GET_PERMISSION_LIST'>
              <Switch />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='Thêm quyền' valuePropName='checked' name='CREATE_PERMISSION'>
              <Switch />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='Sửa quyền' valuePropName='checked' name='UPDATE_PERMISSION'>
              <Switch />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='Xóa quyền' valuePropName='checked' name='DELETE_PERMISSION'>
              <Switch />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='Lấy danh sách vai trò' valuePropName='checked' name='GET_ROLE_LIST'>
              <Switch />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='Thêm vai trò' valuePropName='checked' name='CREATE_ROLE'>
              <Switch />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='Sửa vai trò' valuePropName='checked' name='UPDATE_ROLE'>
              <Switch />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='Xóa vai trò' valuePropName='checked' name='DELETE_ROLE'>
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

export default FormSuperAdmin;
