import { Button, Col, Form, Row, Select, Space } from 'antd';
import React from 'react';

function ContentPopover({ setValueFilters, setPage }) {
  const onFinish = (values) => {
    setValueFilters(values);
  };
  return (
    <div className='w-[580px]'>
      <Form
        layout='vertical'
        style={{
          width: 700,
        }}
        onFinish={onFinish}
      >
        <Row gutter={[20, 8]}>
          <Col span={10}>
            <Form.Item label='Điểm trung bình học tập ( học kì hệ 4 )' name='point'>
              <Select placeholder='Chọn khoảng điểm'>
                <Select.Option value={1}>{'Từ 3.6 đến 4.0 ( Xuất sắc )'}</Select.Option>
                <Select.Option value={2}>{'Từ 3.2 đến cận 3.6 ( Giỏi )'}</Select.Option>
                <Select.Option value={3}>{'Từ 2.5 đến cận 3.2 ( Khá )'}</Select.Option>
                <Select.Option value={4}>{'Trên 2.5'}</Select.Option>
                <Select.Option value={5}>{'Từ 2.0 đến cận 2.5 ( Trung bình )'}</Select.Option>
                <Select.Option value={6}>{'Từ 1.0 đến cận 2.0 ( Yếu )'}</Select.Option>
                <Select.Option value={7}>{'Dưới 1.0 ( Kém )'}</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item label='Điểm trung bình học tập ( tích lũy hệ 4 )' name='accPoint'>
              <Select placeholder='Chọn khoảng điểm'>
                <Select.Option value={1}>{'Từ 3.6 đến 4.0 ( Xuất sắc )'}</Select.Option>
                <Select.Option value={2}>{'Từ 3.2 đến cận 3.6 ( Giỏi )'}</Select.Option>
                <Select.Option value={3}>{'Từ 2.5 đến cận 3.2 ( Khá )'}</Select.Option>
                <Select.Option value={4}>{'Từ 2.0 đến cận 2.5 ( Trung bình )'}</Select.Option>
                <Select.Option value={5}>{'Dưới 2.0'}</Select.Option>
                <Select.Option value={6}>{'Từ 1.0 đến cận 2.0 ( Yếu )'}</Select.Option>
                <Select.Option value={7}>{'Dưới 1.0 ( Kém )'}</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item label='Điểm rèn luyện' name='trainingPoint'>
              <Select placeholder='Chọn khoảng điểm'>
                <Select.Option value={1}>{'Từ 90 - 100 ( Xuất sắc )'}</Select.Option>
                <Select.Option value={2}>{'Từ 80 - 89 ( Tốt )'}</Select.Option>
                <Select.Option value={3}>{'Trên 80'}</Select.Option>
                <Select.Option value={4}>{'Từ 65 - 79 ( Khá )'}</Select.Option>
                <Select.Option value={5}>{'Từ 50 - 64 ( Trung bình )'}</Select.Option>
                <Select.Option value={6}>{'Từ 35 - 49 ( Yếu )'}</Select.Option>
                <Select.Option value={7}>{'Dưới 35 ( Kém )'}</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={20} className='flex justify-end'>
            <Space>
              <Button type='primary' htmlType='submit' className='flex justify-center items-center px-8 py-3 rounded-full'>
                Lọc
              </Button>
              <Button
                type='default'
                onClick={() => {
                  setValueFilters({});
                  setPage(1);
                }}
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
