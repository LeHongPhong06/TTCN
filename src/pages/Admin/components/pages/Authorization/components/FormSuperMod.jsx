import React, { useState } from 'react';
import { Button, Col, Form, Row, Switch, message } from 'antd';

function FormSuperMod(props) {
  const [loadingBtn, setLoadingBtn] = useState(false);
  const onFinish = (values) => {
    setLoadingBtn(true);
    message.success('Cập nhật quyền SUPERMOD thành công');
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
            <Form.Item
              label='Thêm xếp loại của sinh viên mỗi lớp theo kì'
              valuePropName='checked'
              name='CREATE_CLASS_CLASSIFICATION'
            >
              <Switch />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label='Sửa xếp loại của sinh viên mỗi lớp theo kì'
              valuePropName='checked'
              name='UPDATE_CLASS_CLASSIFICATION'
            >
              <Switch />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label='Xóa xếp loại của sinh viên mỗi lớp theo kì'
              valuePropName='checked'
              name='DELETE_CLASS_CLASSIFICATION'
            >
              <Switch />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label='Thêm xếp loại sinh viên mỗi khóa theo kì'
              valuePropName='checked'
              name='CREATE_COURSE_CLASSIFICATION'
            >
              <Switch />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label='Sửa xếp loại sinh viên mỗi khóa theo kì'
              valuePropName='checked'
              name='UPDATE_COURSE_CLASSIFICATION'
            >
              <Switch />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label='Xóa xếp loại sinh viên mỗi khóa theo kì'
              valuePropName='checked'
              name='DELETE_COURSE_CLASSIFICATION'
            >
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

export default FormSuperMod;
