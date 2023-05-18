import { DeleteOutlined, EditOutlined, PieChartOutlined, PlusCircleOutlined, SearchOutlined } from '@ant-design/icons';
import { Button, Input, Modal, Popconfirm, Space, Table, Tooltip, Typography, message } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import { deleteSemester, getDataSemesters } from '../../../../../API/axios';
import ModalFormTerm from './components/ModalFormTerm';
import PieData from './components/PieData';

function AdminSemestersPage(props) {
  const { Title } = Typography;
  const [openModal, setOpenModal] = useState(false);
  const [openModalTerm, setOpenModalTerm] = useState(false);
  const [loadingTable, setLoadingTable] = useState(false);
  const [valueSearchTerm, setValueSearchTerm] = useState('');
  const [dataPie, setDataPie] = useState({});
  const [dataTerm, setDataTerm] = useState({});
  const [dataSource, setDataSource] = useState([]);
  const [pageCurrent, setPageCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalTerm, setTotalTerm] = useState(0);
  const debunceValue = useDebounce(valueSearchTerm, 750);

  // handle get data terms
  const termId = debunceValue[0];
  const handleGetDataSemester = () => {
    setLoadingTable(true);
    getDataSemesters({ id: termId, page: pageCurrent, size: pageSize })
      .then((res) => {
        if (res.data.success === true) {
          setDataSource(res.data?.data?.items);
          setTotalTerm(res.data?.data?.total);
          setLoadingTable(false);
        } else if (res.data?.error?.message === 'Access is denied') {
          message.warning('Bạn không có quyền truy cập');
        } else return message.error(res.data?.error?.message);
      })
      .finally(() => setLoadingTable(false));
  };
  useEffect(() => {
    handleGetDataSemester();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [termId, pageCurrent, pageSize]);

  // hande  confirm delete term
  const handleConfirmDeleteSemesters = (id) => {
    setLoadingTable(true);
    deleteSemester(id)
      .then((res) => {
        if (res.data?.success === true) {
          handleGetDataSemester();
          message.success('Xóa thành công');
        } else return message.error(res.data?.error?.message);
      })
      .finally(() => setLoadingTable(false));
  };

  const columns = [
    {
      title: 'Mã học kì',
      align: 'center',
      dataIndex: 'id',
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
      title: 'Hạnh kiểm khá',
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
            <Popconfirm
              title='Bạn có chắc chắn muốn xóa sinh viên này ?'
              icon={<DeleteOutlined />}
              okText='Xóa'
              okType='danger'
              onConfirm={() => handleConfirmDeleteSemesters(record.id)}
            >
              <Button className='flex justify-center items-center text-md shadow-md' icon={<DeleteOutlined />}></Button>
            </Popconfirm>
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
      <div className='flex justify-between items-center mb-3'>
        <Space>
          <Tooltip title='Tìm kiếm học kì'>
            <Input
              value={valueSearchTerm}
              placeholder='Nhập mã học kì'
              className='shadow-sm w-[230px]'
              prefix={<SearchOutlined className='opacity-60 mr-1' />}
              onChange={(e) => setValueSearchTerm(e.target.value)}
            />
          </Tooltip>
        </Space>
        <Title style={{ textTransform: 'uppercase', textAlign: 'center', marginBottom: 0 }} level={3}>
          Danh sách học kì
        </Title>
        <Button
          onClick={() => setOpenModalTerm(true)}
          icon={<PlusCircleOutlined />}
          className='flex justify-center items-center bg-white font-medium shadow-lg'
        >
          Thêm học kì
        </Button>
      </div>
      <Table
        rowKey={'id'}
        dataSource={dataSource}
        bordered={true}
        columns={columns}
        loading={loadingTable}
        pagination={{
          onChange: (page, size) => {
            setPageCurrent(page);
            setPageSize(size);
          },
          defaultCurrent: 1,
          pageSize: pageSize,
          total: totalTerm,
          current: pageCurrent,
          showSizeChanger: true,
        }}
      />
      <Modal
        width={800}
        centered
        title='Thống kê xếp loại theo kì'
        open={openModal}
        okText='Ok'
        onOk={() => setOpenModal(false)}
        onCancel={() => {
          setDataPie({});
          setOpenModal(false);
        }}
        cancelButtonProps={{
          style: { display: 'none' },
        }}
      >
        <PieData dataPie={dataPie} />
      </Modal>
      <ModalFormTerm
        onSuccess={() => {
          setOpenModalTerm(false);
          handleGetDataSemester();
        }}
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
