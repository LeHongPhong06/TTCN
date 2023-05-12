import { Button, Col, Form, Row, Switch, message } from 'antd';
import React, { useState } from 'react';

function FormAdmin(props) {
  const [loadingBtn, setLoadingBtn] = useState(false);
  const onFinish = (values) => {
    setLoadingBtn(true);
    message.success('Cập nhật quyền ADMIN thành công');
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
            <Form.Item label='Lấy danh sách lớp' valuePropName='checked' name='GET_CLASS_LIST'>
              <Switch />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='Thêm lớp' valuePropName='checked' name='CREATE_CLASS'>
              <Switch />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='Sửa lớp' valuePropName='checked' name='UPDATE_CLASS'>
              <Switch />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='Xóa lớp' valuePropName='checked' name='DELETE_CLASS'>
              <Switch />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='Lấy danh sách khóa' valuePropName='checked' name='GET_COURSE_LIST'>
              <Switch />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='Thêm khóa' valuePropName='checked' name='CREATE_COURSE'>
              <Switch />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='Sửa khóa' valuePropName='checked' name='UPDATE_COURSE'>
              <Switch />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='Xóa khóa' valuePropName='checked' name='DELETE_COURSE'>
              <Switch />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='Lấy danh sách chuyên ngành' valuePropName='checked' name='GET_MAJOR_LIST'>
              <Switch />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='Thêm chuyên ngành' valuePropName='checked' name='CREATE_MAJOR'>
              <Switch />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='Sửa chuyên ngành' valuePropName='checked' name='UPDATE_MAJOR'>
              <Switch />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='Xóa chuyên ngành' valuePropName='checked' name='DELETE_MAJOR'>
              <Switch />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='Lấy danh sách sinh viên' valuePropName='checked' name='GET_STUDENT_LIST'>
              <Switch />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='Lấy thông tin sinh viên' valuePropName='checked' name='GET_STUDENT_DETAIL'>
              <Switch />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='Thêm sinh viên' valuePropName='checked' name='CREATE_STUDENT'>
              <Switch />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='Sửa sinh viên' valuePropName='checked' name='UPDATE_STUDENT'>
              <Switch />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='Xóa sinh viên' valuePropName='checked' name='DELETE_STUDENT'>
              <Switch />
            </Form.Item>
          </Col>

          <Col span={8}>
            <Form.Item label='Lấy danh sách học kì' valuePropName='checked' name='GET_TERM_LIST'>
              <Switch />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='Thêm học kì' valuePropName='checked' name='CREATE_TERM'>
              <Switch />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='Sửa học kì' valuePropName='checked' name='UPDATE_TERM'>
              <Switch />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='Xóa học kì' valuePropName='checked' name='DELETE_TERM'>
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

export default FormAdmin;
