import { Button, Col, Form, Input, Row, Select, Space } from 'antd';
import React, { useEffect, useState } from 'react';
import { getMajorList } from '../../../../../../API/axios';
function ContentPopover({ setValuesFilter, setPageCurrent }) {
  const [form] = Form.useForm();
  const [majorList, setMajorList] = useState([]);

  const handleMajorList = () => {
    getMajorList({ page: 1, size: 10 }).then((res) => {
      if (res.data?.success) {
        setMajorList(res.data?.data?.items);
      }
    });
  };
  useEffect(() => handleMajorList(), []);

  const onFinish = (values) => {
    setValuesFilter(values);
  };

  const handleReset = () => {
    form.setFieldsValue({
      majorId: null,
      courseId: '',
      classId: '',
      status: null,
    });
    setValuesFilter({});
    setPageCurrent(1);
  };

  return (
    <div className='w-[400px]'>
      <Form
        form={form}
        layout='vertical'
        style={{
          width: 400,
        }}
        onFinish={onFinish}
      >
        <Row gutter={[24]}>
          <Col span={12}>
            <Form.Item label='Chuyên ngành' name='majorId'>
              <Select placeholder='Chọn chuyên ngành'>
                {majorList?.map((e) => (
                  <Select.Option key={e.id} value={e.id}>
                    {e.name}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label='Khóa'
              name='courseId'
              rules={[
                {
                  min: 1,
                  max: 10,
                  message: 'Mã khóa quá lớn',
                },
                {
                  pattern: '^[0-9]+$',
                  message: 'Không đúng định dạng',
                },
              ]}
            >
              <Input placeholder='VD: 65' />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label='Lớp'
              name='classId'
              rules={[
                {
                  min: 1,
                  max: 20,
                  message: 'Mã lớp quá dài',
                },
                {
                  pattern: '^K|k\\d+[a-zA-Z]+$',
                  message: 'Không đúng định dạng',
                },
              ]}
            >
              <Input placeholder='VD: K65CNTTA' />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label='Tình trạng' name='status'>
              <Select placeholder='Chọn tình trạng'>
                <Select.Option value='Còn đi học'>Còn đi học</Select.Option>
                <Select.Option value='Đã tốt nghiệp'>Đã tốt nghiệp</Select.Option>
                <Select.Option value='Đã bỏ học'>Đã bỏ học</Select.Option>
                <Select.Option value='Bị buộc thôi học'>Bị buộc thôi học</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={15}>
            <Form.Item label='Diện cảnh cáo' name='warning'>
              <Select placeholder='Chọn diện cảnh cáo'>
                <Select.Option value={true}>Có trong diện cảnh cáo</Select.Option>
                <Select.Option value={false}>Không có trong diện cảnh cáo</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={24} className='flex justify-end'>
            <Space>
              <Button type='default' onClick={handleReset} className='flex justify-center items-center'>
                Reset
              </Button>
              <Button type='primary' htmlType='submit' className='flex justify-center items-center'>
                Lọc
              </Button>
            </Space>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default ContentPopover;
