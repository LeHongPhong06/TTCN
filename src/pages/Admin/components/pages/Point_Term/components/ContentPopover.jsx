import { Button, Col, Form, Radio, Row, Space } from 'antd';
import React from 'react';

function ContentPopover({ setValueFilters }) {
  const onFinish = (values) => {
    setValueFilters(values);
  };
  return (
    <div className='w-[800px]'>
      <Form
        layout='vertical'
        style={{
          width: 800,
        }}
        onFinish={onFinish}
      >
        <Row gutter={[24]}>
          <Col span={8}>
            <Form.Item label='Điểm trung bình học tập ( học kì hệ 4 )' name='point'>
              <Radio.Group>
                <Space direction='vertical'>
                  <Radio value={{ min: 3.6, max: 4.0 }}>{'Từ 3.6 đến 4.0 ( Xuất sắc )'}</Radio>
                  <Radio value={{ min: 3.2, max: 3.6 }}>{'Từ 3.2 đến cận 3.6 ( Giỏi )'}</Radio>
                  <Radio value={{ min: 2.5, max: 3.2 }}>{'Từ 2.5 đến cận 3.2 ( Khá )'}</Radio>
                  <Radio value={{ min: 2.5, max: 4.0 }}>{'Trên 2.5'}</Radio>
                  <Radio value={{ min: 2.0, max: 2.5 }}>{'Từ 2.0 đến cận 2.5 ( Trung bình )'}</Radio>
                  <Radio value={{ min: 1.0, max: 2.0 }}>{'Từ 1.0 đến cận 2.0 ( Yếu )'}</Radio>
                  <Radio value={{ min: 0, max: 1.0 }}>{'Dưới 1.0 ( Kém )'}</Radio>
                </Space>
              </Radio.Group>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='Điểm trung bình học tập ( tích lũy hệ 4 )' name='accPoint'>
              <Radio.Group>
                <Space direction='vertical'>
                  <Radio value={{ min: 3.6, max: 4.0 }}>{'Từ 3.6 đến 4.0 ( Xuất sắc )'}</Radio>
                  <Radio value={{ min: 3.2, max: 3.6 }}>{'Từ 3.2 đến cận 3.6 ( Giỏi )'}</Radio>
                  <Radio value={{ min: 2.5, max: 3.2 }}>{'Từ 2.5 đến cận 3.2 ( Khá )'}</Radio>
                  <Radio value={{ min: 2.0, max: 2.5 }}>{'Từ 2.0 đến cận 2.5 ( Trung bình )'}</Radio>
                  <Radio value={{ min: 0, max: 2.0 }}>{'Dưới 2.0'}</Radio>
                  <Radio value={{ min: 1.0, max: 2.0 }}>{'Từ 1.0 đến cận 2.0 ( Yếu )'}</Radio>
                  <Radio value={{ min: 0, max: 1.0 }}>{'Dưới 1.0 ( Kém )'}</Radio>
                </Space>
              </Radio.Group>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label='Điểm rèn luyện' name='trainingPoint'>
              <Radio.Group>
                <Space direction='vertical'>
                  <Radio value={{ min: 90, max: 100 }}>{'Từ 90 - 100 ( Xuất sắc )'}</Radio>
                  <Radio value={{ min: 80, max: 89 }}>{'Từ 80 - 89 ( Tốt )'}</Radio>
                  <Radio value={{ min: 80, max: 100 }}>{'Trên 80'}</Radio>
                  <Radio value={{ min: 65, max: 79 }}>{'Từ 65 - 79 ( Khá )'}</Radio>
                  <Radio value={{ min: 50, max: 64 }}>{'Từ 50 - 64 ( Trung bình )'}</Radio>
                  <Radio value={{ min: 35, max: 49 }}>{'Từ 35 - 49 ( Yếu )'}</Radio>
                  <Radio value={{ min: 0, max: 35 }}>{'Dưới 35 ( Kém )'}</Radio>
                </Space>
              </Radio.Group>
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
                onClick={() => setValueFilters({})}
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
