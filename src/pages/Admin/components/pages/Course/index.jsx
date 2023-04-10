import { DeleteOutlined, EditOutlined, PlusCircleOutlined, SolutionOutlined } from '@ant-design/icons';
import { Button, Drawer, Popconfirm, Space, Table, Tooltip, Typography } from 'antd';
import React, { useState } from 'react';
import ModalFormCourse from './components/ModalFormCourse';
import PieDataCourse from './components/PieDataCourse';
import ColumnDataCourse from './components/ColumnDataCourse';

function AdminCoursePage(props) {
  const [openModalFormCourse, setOpenModalFormCourse] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [dataSource, setDataCourse] = useState({});
  const { Title } = Typography;
  const handleConfirmDeleteCourse = () => {};
  const data = [
    { key: '1', courseId: 'K63', courseName: 'Khóa 63', quantity: 100 },
    {
      key: '2',
      courseId: 'K64',
      courseName: 'Khóa 64',
      quantity: 150,
    },
    {
      key: '3',
      courseId: 'K65',
      courseName: 'Khóa 65',
      quantity: 200,
    },
    {
      key: '4',
      courseId: 'K66',
      courseName: 'Khóa 66',
      quantity: 240,
    },
    {
      key: '5',
      courseId: 'K67',
      courseName: 'Khóa 67',
      quantity: 300,
    },
  ];

  const columns = [
    {
      title: 'Mã khóa',
      dataIndex: 'courseId',
      align: 'center',
      key: 'courseId',
    },
    {
      title: 'Tên khóa',
      dataIndex: 'courseName',
      align: 'center',
      key: 'courseName',
    },
    {
      title: 'Tổng số sinh viên',
      dataIndex: 'quantity',
      align: 'center',
      key: 'quantity',
    },
    {
      title: 'Tùy chọn',
      align: 'center',
      render: (e, record, index) => (
        <Space size={8} key={index}>
          <Tooltip title='Chỉnh sửa'>
            <Button
              className='flex justify-center items-center text-md shadow-md'
              icon={<EditOutlined />}
              onClick={() => {
                setOpenModalFormCourse(true);
                setDataCourse(record);
              }}
            ></Button>
          </Tooltip>
          <Tooltip title='Xóa'>
            <Popconfirm
              title={`Bạn có chắc chắn muốn xóa ${record.courseName} ?`}
              icon={<DeleteOutlined />}
              okText='Xóa'
              okType='danger'
              onConfirm={handleConfirmDeleteCourse}
            >
              <Button className='flex justify-center items-center text-md shadow-md' icon={<DeleteOutlined />}></Button>
            </Popconfirm>
          </Tooltip>
          <Tooltip title='Xem chi tiết'>
            <Button
              className='flex justify-center items-center text-md shadow-md'
              icon={<SolutionOutlined />}
              onClick={() => {
                setDataCourse(record);
                setOpenDrawer(true);
              }}
            ></Button>
          </Tooltip>
        </Space>
      ),
    },
  ];
  return (
    <div>
      <Button
        onClick={() => setOpenModalFormCourse(true)}
        className='flex justify-center items-center bg-white shadow-lg font-medium absolute'
        icon={<PlusCircleOutlined />}
      >
        Thêm khóa
      </Button>
      <Title style={{ textAlign: 'center', textTransform: 'uppercase' }} level={3}>
        Quản lí khóa
      </Title>
      <Table key={'id'} dataSource={data} columns={columns} />
      <ModalFormCourse
        onSuccess={() => {
          setOpenModalFormCourse(false);
        }}
        dataCourse={dataSource}
        openForm={openModalFormCourse}
        onChangeClickOpen={(open) => {
          if (!open) {
            setDataCourse({});
            setOpenModalFormCourse(false);
          }
        }}
      />
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)} placement='right' size='large'>
        <PieDataCourse dataCourse={dataSource} />
        <ColumnDataCourse dataCourse={dataSource} />
      </Drawer>
    </div>
  );
}

export default AdminCoursePage;
