import { Button, Popconfirm, Space, Table, Tooltip, Typography } from 'antd';
import React, { useState } from 'react';
import { DeleteOutlined, EditOutlined, PlusCircleOutlined } from '@ant-design/icons';
import ModalFormMajor from './components/ModalFormMajor';

function AdminMajorPage(props) {
  const [openModalFormMajor, setOpenModalFormMajor] = useState(false);
  const [dataMajor, setDataMajor] = useState({});
  const handleConfirmDeleteMajor = () => {};
  const { Title } = Typography;
  const dataSource = [
    {
      key: '1',
      majorId: 'CNTT',
      majorName: 'Công nghệ thông tin',
      quantity: 230,
    },
    {
      key: '2',
      majorId: 'CNPM',
      majorName: 'Công nghệ phần mềm',
      quantity: 200,
    },
    {
      key: '3',
      majorId: 'HTTT',
      majorName: 'Hệ thống thông tin',
      quantity: 60,
    },
    {
      key: '4',
      majorId: 'ATTT',
      majorName: 'An toàn thông tin',
      quantity: 50,
    },
  ];

  const columns = [
    {
      title: 'Mã chuyên ngành',
      dataIndex: 'majorId',
      key: 'majorId',
    },
    {
      title: 'Tên chuyên ngành',
      dataIndex: 'majorName',
      key: 'majorName',
    },
    {
      title: 'Số lượng sinh viên',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Tùy chọn',
      align: 'center',
      render: (e, record, idx) => (
        <Space key={idx}>
          <Tooltip title='Chỉnh sửa'>
            <Button
              onClick={() => {
                setOpenModalFormMajor(true);
                setDataMajor(record);
              }}
              icon={<EditOutlined />}
              className='flex justify-center items-center shadow-xl'
            ></Button>
          </Tooltip>
          <Tooltip title='Xóa'>
            <Popconfirm
              title={`Bạn có chắc chắn muốn xóa chuyên ngành ${record.majorName}`}
              icon={<DeleteOutlined />}
              okText='Xóa'
              okType='danger'
              onConfirm={handleConfirmDeleteMajor}
            >
              <Button className='flex justify-center items-center text-md shadow-md' icon={<DeleteOutlined />}></Button>
            </Popconfirm>
          </Tooltip>
        </Space>
      ),
    },
  ];
  return (
    <div>
      <Button
        icon={<PlusCircleOutlined />}
        onClick={() => {
          setOpenModalFormMajor(true);
        }}
        className='flex justify-center items-center absolute bg-white shadow-lg font-medium'
      >
        Thêm chuyên ngành
      </Button>
      <Title style={{ textAlign: 'center', textTransform: 'uppercase' }} level={2}>
        Danh sách chuyên ngành
      </Title>
      <Table dataSource={dataSource} columns={columns} />
      <ModalFormMajor
        onSuccess={() => {
          setOpenModalFormMajor(false);
        }}
        openForm={openModalFormMajor}
        dataMajor={dataMajor}
        onChangeClickOpen={(open) => {
          if (!open) {
            setDataMajor({});
            setOpenModalFormMajor(false);
          }
        }}
      />
    </div>
  );
}

export default AdminMajorPage;
