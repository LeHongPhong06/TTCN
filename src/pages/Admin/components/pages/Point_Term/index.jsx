import { DeleteOutlined, EditOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { Button, Popconfirm, Space, Table, Tooltip, Typography } from 'antd';
import React, { useState } from 'react';
import ModalFormPoint from './components/ModalFormPoint';

function AdminPointTermPage(props) {
  const [openModalFormMajor, setOpenModalFormMajor] = useState(false);
  const [dataMajor, setDataMajor] = useState({});
  const handleConfirmDeleteMajor = () => {};
  const { Title } = Typography;
  const dataSource = [
    {
      key: '1',
      studentId: '654661',
      termId: '20201',
      DTBhe10: 9.0,
      DTBhe4: 3.6,
      DRL: 92,
      TCTL: 17,
      TBTLhe10: 9.0,
      TBTLhe4: 3.6,
    },
    {
      key: '2',
      studentId: '654661',
      termId: '20202',
      DTBhe10: 8.0,
      DTBhe4: 3.0,
      DRL: 80,
      TCTL: 20,
      TBTLhe10: 8.5,
      TBTLhe4: 3.4,
    },
  ];
  const columns = [
    {
      title: 'Mã sinh viên',
      dataIndex: 'studentId',
      align: 'center',
      key: 'studentId',
    },
    {
      title: 'Mã học kì',
      dataIndex: 'termId',
      align: 'center',
      key: 'termId',
    },
    {
      title: 'Điểm trung bình (hệ 10)',
      dataIndex: 'DTBhe10',
      align: 'center',
      key: 'DTBhe10',
    },
    {
      title: 'Điểm trung bình (hệ 4)',
      dataIndex: 'DTBhe4',
      align: 'center',
      key: 'DTBhe4',
    },
    {
      title: 'Điểm rèn luyện',
      dataIndex: 'DRL',
      align: 'center',
      key: 'DRL',
    },
    {
      title: 'Điểm trung bình tích lũy (hệ 10)',
      dataIndex: 'TBTLhe10',
      align: 'center',
      key: 'TBTLhe10',
    },
    {
      title: 'Điểm trung bình tích lũy (hệ 4)',
      dataIndex: 'TBTLhe4',
      align: 'center',
      key: 'TBTLhe4',
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
        Thêm điểm
      </Button>
      <Title style={{ textAlign: 'center', textTransform: 'uppercase' }} level={2}>
        Danh sách điểm
      </Title>
      <Table dataSource={dataSource} columns={columns} />
      <ModalFormPoint
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

export default AdminPointTermPage;
