import { Button, Modal, Space, Table, Tooltip, Typography } from 'antd';
import React, { useState } from 'react';
import { DeleteOutlined, EditOutlined, PieChartOutlined, PlusCircleOutlined } from '@ant-design/icons';
import PieData from './components/PieData';
import ModalFormTerm from './components/ModalFormTerm';

function AdminSemestersPage(props) {
  const [dataPie, setDataPie] = useState();
  const [openModal, setOpenModal] = useState(false);
  const [openModalTerm, setOpenModalTerm] = useState(false);
  const [dataTerm, setDataTerm] = useState({});
  const { Title } = Typography;
  const dataSource = [
    {
      termId: '20201',
      termName: 'Kì 1 - Năm 2020',
      numOfStu: 1400,
      excellent: 50,
      good: 160,
      fair: 800,
      medium: 350,
      weak: 35,
      worst: 5,
    },
    {
      termId: '20202',
      termName: 'Kì 2 - Năm 2020',
      numOfStu: 1400,
      excellent: 50,
      good: 160,
      fair: 800,
      medium: 350,
      weak: 35,
      worst: 5,
    },
    {
      termId: '20211',
      termName: 'Kì 1 - Năm 2021',
      numOfStu: 1400,
      excellent: 50,
      good: 160,
      fair: 800,
      medium: 350,
      weak: 35,
      worst: 5,
    },
    {
      termId: '20221',
      termName: 'Kì 1 - Năm 2022',
      numOfStu: 1400,
      excellent: 50,
      good: 160,
      fair: 800,
      medium: 350,
      weak: 35,
      worst: 5,
    },
    {
      termId: '20222',
      termName: 'Kì 2 - Năm 2022',
      numOfStu: 1400,
      excellent: 50,
      good: 160,
      fair: 800,
      medium: 350,
      weak: 35,
      worst: 5,
    },
    {
      termId: '20231',
      termName: 'Kì 1 - Năm 2023',
      numOfStu: 1400,
      excellent: 50,
      good: 160,
      fair: 800,
      medium: 350,
      weak: 35,
      worst: 5,
    },
    {
      termId: '20232',
      termName: 'Kì 2 - Năm 2023',
      numOfStu: 1400,
      excellent: 50,
      good: 160,
      fair: 800,
      medium: 350,
      weak: 35,
      worst: 5,
    },
  ];

  const columns = [
    {
      title: 'Mã học kì',
      align: 'center',
      dataIndex: 'termId',
    },
    {
      title: 'Tên học kì',
      dataIndex: 'termName',
      key: 'termName',
    },
    {
      title: 'Tổng số sinh tên trong khoa',
      align: 'center',
      dataIndex: 'numOfStu',
      key: 'numOfStu',
    },
    {
      title: 'Hạnh kiểm xuất sắc',
      align: 'center',
      dataIndex: 'excellent',
      key: 'excellent',
    },
    {
      title: 'Hạnh kiểm tốt',
      align: 'center',
      dataIndex: 'good',
      key: 'good',
    },
    {
      title: 'Hhạnh kiểm khá',
      align: 'center',
      dataIndex: 'fair',
      key: 'fair',
    },
    {
      title: 'Hạnh kiểm trung bình',
      align: 'center',
      dataIndex: 'medium',
      key: 'medium',
    },
    {
      title: 'Hạnh kiểm yếu',
      align: 'center',
      dataIndex: 'weak',
      key: 'weak',
    },
    {
      title: 'Hạnh kiểm kém',
      align: 'center',
      dataIndex: 'worst',
      key: 'worst',
    },
    {
      title: 'Tùy chọn',
      align: 'center',
      render: (e, record, idx) => (
        <Space key={idx}>
          <Tooltip title='Chỉnh sửa'>
            <Button
              onClick={() => {
                setOpenModalTerm(true);
                setDataTerm(record);
              }}
              icon={<EditOutlined />}
              className='flex justify-center items-center shadow-xl'
            ></Button>
          </Tooltip>
          <Tooltip title='Xóa'>
            <Button icon={<DeleteOutlined />} className='flex justify-center items-center shadow-xl'></Button>
          </Tooltip>
          <Tooltip title='Xem dưới dạng biểu đồ'>
            <Button
              onClick={() => {
                setOpenModal(true);
                setDataPie(record);
              }}
              icon={<PieChartOutlined />}
              className='flex justify-center items-center shadow-xl'
            ></Button>
          </Tooltip>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <div>
        <Button
          onClick={() => setOpenModalTerm(true)}
          icon={<PlusCircleOutlined />}
          className='absolute flex justify-center items-center bg-white font-medium shadow-lg'
        >
          Thêm học kì
        </Button>
        <Title style={{ textTransform: 'uppercase', textAlign: 'center' }} level={2}>
          Danh sách
        </Title>
      </div>
      <Table dataSource={dataSource} columns={columns} />
      <Modal
        width={800}
        title='Thống kê xếp loại theo kì'
        open={openModal}
        cancelText='Ok'
        onCancel={() => setOpenModal(false)}
        size='large'
        okButtonProps={{
          style: { display: 'none' },
        }}
      >
        <PieData dataPie={dataPie} />
      </Modal>
      <ModalFormTerm
        onSuccess={() => setOpenModalTerm(false)}
        openForm={openModalTerm}
        dataTerm={dataTerm}
        onChangeClickOpen={(open) => {
          if (!open) {
            setDataTerm({});
            setOpenModalTerm(false);
          }
        }}
      />
    </div>
  );
}

export default AdminSemestersPage;
