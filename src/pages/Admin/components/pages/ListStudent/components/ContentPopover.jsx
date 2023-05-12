import { Button, Col, Form, Input, Row, Select, Space } from 'antd';
import React from 'react';
function ContentPopover({ setValuesFilter }) {
  const onFinish = (values) => {
    setValuesFilter(values);
  };
  return (
    <div className='w-[450px]'>
      <Form
        layout='vertical'
        style={{
          width: 450,
        }}
        onFinish={onFinish}
      >
        <Row gutter={[16, 8]}>
          <Col span={12}>
            <Form.Item label='Chuyên ngành' name='majorId'>
              <Select placeholder='Chọn chuyên ngành'>
                <Select.Option value='CNTT'>Công nghệ thông tin</Select.Option>
                <Select.Option value='CNPM'>Công nghệ phần mềm</Select.Option>
                <Select.Option value='ATTT'>An toàn thông tin</Select.Option>
                <Select.Option value='MMT'>Mạng máy tính</Select.Option>
                <Select.Option value='HTTT'>Hệ thống thông tin</Select.Option>
                <Select.Option value='TT'>Truyền thông</Select.Option>
                <Select.Option value='TTNT'>Trí tuệ nhân tạo</Select.Option>
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
                  message: 'Số khóa quá lớn',
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
                <Select.Option value='Chưa tốt nghiệp'>Chưa tốt nghiệp</Select.Option>
                <Select.Option value='Đã tốt nghiệp'>Đã tốt nghiệp</Select.Option>
                <Select.Option value='Đã bỏ học'>Đã bỏ học</Select.Option>
                <Select.Option value='Bị buộc thôi học'>Bị buộc thôi học</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={24} className='flex justify-end'>
            <Space>
              <Button
                type='primary'
                htmlType='submit'
                className='flex justify-center items-center px-8 py-3 rounded-full'
              >
                Lọc
              </Button>
              <Button
                type='default'
                onClick={() => setValuesFilter({})}
                className='flex justify-center items-center px-8 py-3 rounded-full'
              >
                Reset
              </Button>
            </Space>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default ContentPopover;
