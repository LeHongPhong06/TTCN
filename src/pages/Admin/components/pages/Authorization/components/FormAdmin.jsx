import { Button, Col, Form, Row, Switch, message } from 'antd';
import React, { useState } from 'react';
import { getAuthorizationAdmin, getPermisstionList, updateAuthorizationAdmin } from '../../../../../../API/axios';
import { useEffect } from 'react';

function FormAdmin(props) {
  const [loadingBtn, setLoadingBtn] = useState(false);
  const [valueFinal, setValueFinal] = useState([]);
  const [initValues, setInitialValues] = useState([]);
  console.log(initValues);
  const id = 'ADMIN';
  // handle get Authorization Admin
  const handleGetAuthorization = (id) => {
    getAuthorizationAdmin(id).then((res) => {
      if (res.data?.success === true) {
        setInitialValues(res.data?.data?.permissions);
        const arrNew = initValues.map((e) => e.id);
        console.log(arrNew);
      }
    });
  };

  const data = [{ id: 'POST' }, { id: 'PUT' }, { id: 'DELETE' }, { id: 'CREATE' }];
  const arr = data.map((e) => {
    let a = e.id;
    return { [a]: true };
  });
  const initValue = {};
  const arrNew = arr.reduce((a, b) => a + b, initValue);
  console.log(arrNew);

  useEffect(() => {
    handleGetAuthorization(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const updateAuthorization = () => {
    setLoadingBtn(true);
    updateAuthorizationAdmin({ id: id, name: 'Quản trị viên', permissionIds: valueFinal })
      .then((res) => {
        if (res.data?.success === true) {
          handleGetAuthorization();
          message.success('Cập nhật thành công');
          setLoadingBtn(false);
        } else return message.error(res.data?.error.message);
      })
      .finally(() => setLoadingBtn(false));
  };
  return (
    <div>
      <Form
        style={{
          width: 800,
          marginLeft: 10,
        }}
        onFieldsChange={(a, b) => {
          const arrValue = b.filter((e) => e.value === true);
          const value = arrValue.map((e) => e.name[0]);
          setValueFinal(value);
        }}
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
              onClick={updateAuthorization}
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
