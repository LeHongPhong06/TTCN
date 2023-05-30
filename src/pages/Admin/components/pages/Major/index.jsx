import { DeleteOutlined, EditOutlined, PlusCircleOutlined, ReloadOutlined } from '@ant-design/icons';
import { Button, Popconfirm, Space, Table, Tooltip, Typography, message } from 'antd';
import React, { useEffect, useState } from 'react';
import { deleteMajor, getMajorList } from '../../../../../API/axios';
import ModalFormMajor from './components/ModalFormMajor';

function AdminMajorPage(props) {
  const { Title } = Typography;
  const [loadingTable, setLoadingTable] = useState(false);
  const [openModalFormMajor, setOpenModalFormMajor] = useState(false);
  const [dataMajor, setDataMajor] = useState({});
  const [dataSource, setDataSource] = useState([]);
  const [totalMajor, setTotalMajor] = useState(0);
  const [pageCurrent, setPageCurrent] = useState(1);

  // handle confirm delete major
  const handleConfirmDeleteMajor = (id) => {
    setLoadingTable(true);
    deleteMajor(id)
      .then((res) => {
        if (res.data?.success === true) {
          handleGetDataMajor();
          message.success('Xóa thành công');
        }
      })
      .finally(() => setLoadingTable(false));
  };

  // handle get data major
  const handleGetDataMajor = () => {
    setLoadingTable(true);
    getMajorList({ page: pageCurrent, size: 10 })
      .then((res) => {
        if (res.data?.success === true) {
          setDataSource(res.data?.data?.items);
          setTotalMajor(res.data?.page);
          setLoadingTable(false);
        } else if (res.data?.error?.message === 'Access is denied') {
          message.warning('Bạn không có quyền truy cập');
        } else return message.error(res.data?.error?.message);
      })
      .finally(() => setLoadingTable(false));
  };
  useEffect(() => {
    handleGetDataMajor();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageCurrent]);

  const columns = [
    {
      title: 'Mã chuyên ngành',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Tên chuyên ngành',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Tổng số tín chỉ tích lũy',
      dataIndex: 'totalCredits',
      key: 'totalCredits',
    },
    {
      title: 'Số lượng sinh viên',
      dataIndex: 'numOfStu',
      key: 'numOfStu',
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
              title={`Bạn có chắc chắn muốn xóa chuyên ngành ${record.id}`}
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
      <div className='flex justify-between items-center mb-3'>
        <Button
          type='default'
          icon={<ReloadOutlined />}
          onClick={() => {
            setPageCurrent(1);
          }}
          className='flex justify-center items-center bg-white shadow-lg font-medium'
        >
          Cập nhật
        </Button>
        <Title style={{ textAlign: 'center', textTransform: 'uppercase', marginBottom: 0 }} level={3}>
          Danh sách chuyên ngành
        </Title>
        <Button
          icon={<PlusCircleOutlined />}
          onClick={() => {
            setOpenModalFormMajor(true);
          }}
          className='flex justify-center items-center bg-white shadow-lg font-medium'
        >
          Thêm chuyên ngành
        </Button>
      </div>
      {dataSource && (
        <Table
          rowKey='id'
          loading={loadingTable}
          bordered={true}
          dataSource={dataSource}
          columns={columns}
          pagination={{
            onChange: (page, size) => {
              setPageCurrent(page);
            },
            defaultCurrent: 1,
            pageSize: 10,
            total: totalMajor,
            current: pageCurrent,
          }}
        />
      )}
      <ModalFormMajor
        onSuccess={() => {
          handleGetDataMajor();
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
