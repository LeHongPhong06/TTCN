import { DeleteOutlined, EditOutlined, PlusCircleOutlined, ReloadOutlined } from '@ant-design/icons';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Button, Popconfirm, Space, Table, Tooltip, Typography, notification } from 'antd';
import React, { useState } from 'react';
import { adminMajorApi } from '../../../API/admin/adminMajorApi';
import { ModalFormMajor } from '../components/Modal';

function ManagerMajorPage(props) {
  const { Title } = Typography;
  const [openModalFormMajor, setOpenModalFormMajor] = useState(false);
  const [dataMajor, setDataMajor] = useState({});
  const [pageCurrent, setPageCurrent] = useState(1);
  const queryClient = useQueryClient();

  // handle get data major
  const { data, isLoading, error } = useQuery({
    staleTime: 60 * 5000,
    cacheTime: 5 * 60 * 5000,
    keepPreviousData: true,
    queryKey: ['majorList', pageCurrent],
    queryFn: () => adminMajorApi.getAllMajor({ page: pageCurrent, size: 10 }),
  });
  if (error) {
    notification.error({
      message: 'Có lỗi',
      description: error?.data?.data,
      duration: 2,
    });
  }

  const handleClickAddMajor = () => {
    setOpenModalFormMajor(true);
  };

  const handleClickEditMajor = (record) => {
    setOpenModalFormMajor(true);
    setDataMajor(record);
  };
  // handle confirm delete major
  const confirmDeleteMajor = useMutation({
    mutationKey: ['deleteMajor'],
    mutationFn: (id) => adminMajorApi.deleteMajor(id),
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ['majorList', pageCurrent],
      });
      notification.success({
        message: 'Thành công',
        description: data?.data?.data,
        duration: 2,
      });
    },
    onError: (data) => {
      notification.error({
        message: 'Thất bại',
        description: data?.data?.data,
        duration: 2,
      });
    },
  });
  const handleConfirmDeleteMajor = (id) => {
    confirmDeleteMajor.mutate(id);
  };

  const columns = [
    {
      title: 'Mã chuyên ngành',
      dataIndex: 'id',
      key: 'id',
      align: 'center',
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
      align: 'center',
    },
    {
      title: 'Tùy chọn',
      align: 'center',
      render: (e, record, idx) => (
        <Space key={idx}>
          <Tooltip title='Chỉnh sửa'>
            <Button
              onClick={() => handleClickEditMajor(record)}
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
              onConfirm={() => handleConfirmDeleteMajor(record.id)}
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
          onClick={handleClickAddMajor}
          className='flex justify-center items-center bg-white shadow-lg font-medium'
        >
          Thêm chuyên ngành
        </Button>
      </div>
      <Table
        scroll={{
          y: 630,
        }}
        rowKey='uid'
        loading={isLoading}
        bordered={true}
        dataSource={data?.data?.items}
        columns={columns}
        pagination={{
          onChange: (page, size) => {
            setPageCurrent(page);
          },
          defaultCurrent: 1,
          pageSize: 10,
          total: data?.data?.total,
          current: pageCurrent,
        }}
      />
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

export default ManagerMajorPage;
