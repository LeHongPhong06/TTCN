import { DeleteOutlined, EditOutlined, PlusOutlined, SolutionOutlined } from '@ant-design/icons';
import { Button, Drawer, Popconfirm, Space, Table, Tooltip, Typography } from 'antd';
import React, { useState } from 'react';
import ModalFormClass from './components/ModalForm';
import PieDataClass from './components/PieDataClass';
import ColumnDataClass from './components/ColumnDataClass';

function AdminClassesPage(props) {
  const { Title } = Typography;
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openModalForm, setOpenModalForm] = useState(false);
  const [dataClass, setDataClass] = useState({});
  const dataSource = [
    {
      classId: 'K65CNTTA',
      className: 'Khóa 65 - Chuyên ngành Công Nghệ Thông Tin - Lớp A',
      quantity: '60',
    },
    {
      classId: 'K64CNPMB',
      className: 'Khóa 64 - Chuyên ngành Công Nghệ Phần Mềm - Lớp B',
      quantity: '60',
    },
    {
      classId: 'K63ATTT',
      className: 'Khóa 63 - Chuyên ngành An Toàn Thông Tin',
      quantity: '60',
    },
  ];
  const columns = [
    {
      title: 'Tên lớp',
      dataIndex: 'className',
    },
    {
      title: 'Mã lớp',
      dataIndex: 'classId',
    },
    {
      title: 'Số lượng sinh viên',
      align: 'center',
      dataIndex: 'quantity',
    },
    {
      title: 'Tùy chọn',
      align: 'center',
      render: (e, record, index) => (
        <Space size={16} key={index}>
          <Tooltip title='Chỉnh sửa'>
            <Button
              className='flex justify-center items-center text-md shadow-md'
              icon={<EditOutlined />}
              onClick={() => {
                setOpenModalForm(true);
                setDataClass(record);
              }}
            ></Button>
          </Tooltip>
          <Tooltip title='Xóa'>
            <Popconfirm
              title='Bạn có chắc chắn muốn xóa lớp này ?'
              icon={<DeleteOutlined />}
              okText='Xóa'
              okType='danger'
              // onConfirm={handleConfirmDeleteStudent}
            >
              <Button className='flex justify-center items-center text-md shadow-md' icon={<DeleteOutlined />}></Button>
            </Popconfirm>
          </Tooltip>
          <Tooltip title='Xem chi tiết'>
            <Button
              className='flex justify-center items-center text-md shadow-md'
              icon={<SolutionOutlined />}
              onClick={() => {
                setDataClass(record);
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
        icon={<PlusOutlined />}
        type='primary'
        className='bg-white text-black absolute right-16 shadow-xl font-medium flex justify-center items-center'
        onClick={() => setOpenModalForm(true)}
      >
        Thêm lớp
      </Button>
      <Title
        level={3}
        style={{
          textTransform: 'uppercase',
          fontWeight: 600,
          marginLeft: '12px',
          display: 'block',
          textAlign: 'center',
        }}
      >
        Danh sách các lớp trong khoa
      </Title>
      <Table rowKey='id' columns={columns} dataSource={dataSource} />
      <ModalFormClass
        onSuccess={() => {
          setOpenModalForm(false);
        }}
        dataClass={dataClass}
        openModalForm={openModalForm}
        onChangeClickOpen={(open) => {
          if (!open) {
            setDataClass({});
            setOpenModalForm(false);
          }
        }}
      />
      <Drawer size='large' open={openDrawer} onClose={() => setOpenDrawer(false)} placement='right'>
        <PieDataClass dataClass={dataClass} />
        <ColumnDataClass dataClass={dataClass} />
      </Drawer>
    </div>
  );
}

export default AdminClassesPage;
