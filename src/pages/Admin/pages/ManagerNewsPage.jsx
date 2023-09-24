import {
  DeleteOutlined,
  EditOutlined,
  MoreOutlined,
  SolutionOutlined,
  UserAddOutlined,
  UsergroupDeleteOutlined,
} from '@ant-design/icons';
import { useMutation, useQuery } from '@tanstack/react-query';
import { Button, Image, Popconfirm, Popover, Space, Table, Typography } from 'antd';
import Cookies from 'js-cookie';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { adminDisplayApi } from '../../../API/admin/adminDisplayApi';
import { adminStudentApi } from '../../../API/admin/adminStudentApi';
import { ButtonCustom } from '../../../components/Button';
import { notificationError, notificationSuccess } from '../../../components/Notification';
import { ModalFormNews } from '../components/Modal';

function ManagerNewsPage() {
  const { Title } = Typography;
  const dispatch = useDispatch();
  const token = Cookies.get('access_token');
  const [disabled, setDisabled] = useState(false);
  const [pageCurrent, setPageCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [openModalFormNews, setOpenModalFormNews] = useState(false);
  const [dataNews, setDataNews] = useState({});
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [valueSearchStudent, setValueSearchStudent] = useState('');

  const { data, isFetching } = useQuery({
    cacheTime: 10 * 60 * 1000,
    keepPreviousData: true,
    queryKey: ['studentList'],
    queryFn: async () => {
      try {
        const res = await adminDisplayApi.getDisplayList({ page: pageCurrent, size: pageSize });
        if (res) return res;
      } catch (error) {}
    },
  });

  const hasSelected = selectedRowKeys.length > 0;
  const deleteStudentList = useMutation({
    mutationFn: async () => {
      try {
        const res = await adminStudentApi.deleteListStudent({ ids: selectedRowKeys });
        if (res) return res;
      } catch (error) {}
    },
    onSuccess: (data) => {
      if (data) {
      }
      setSelectedRowKeys([]);
      notificationSuccess(data?.data?.data);
    },
    onError: (data) => {
      notificationError(data?.data?.data);
    },
  });
  const deleteStudents = useMutation({
    mutationFn: async (id) => {
      if (id) {
        try {
          const res = await adminStudentApi.deleteStudent(id);
          if (res) return res;
        } catch (error) {}
      }
    },
    onSuccess: (data) => {
      if (data && data.success === true) {
      }
    },
    onError: (data) => {
      notificationError(data?.data?.data);
    },
  });

  // ====================================
  const handleChangePaginationTable = (page, size) => {
    dispatch(setPageSize(size));
    dispatch(setPageCurrent(page));
  };
  const handleClickBtnEditStudent = (record) => {
    setDataNews(record);
    setOpenModalFormNews(true);
    setDisabled(true);
  };
  const handleClickBtnShowDetailStudent = (record) => {
    setDataNews(record);
  };
  const handleConfirmDeleteStudent = (id) => {
    deleteStudents.mutate(id);
  };
  const handleConfirmDeleteStudentList = () => {
    deleteStudentList.mutate(selectedRowKeys);
  };
  const handleChangeInputStudentId = (e) => {
    setValueSearchStudent(e.target.value);
    setPageCurrent(1);
  };
  const handleClickBtnAddStudent = () => {
    setOpenModalFormNews(true);
  };
  const handleClickBtnCloseDrawerDetailStudent = () => {
    setDataNews({});
  };

  const handleChangeRowSelection = (e, record) => setSelectedRowKeys(record.map((data) => data.id));
  // ====================================

  const columns = [
    {
      align: 'center',
      width: '3%',
      dataIndex: 'id',
    },
    {
      width: '15%',
      title: 'Ảnh',
      align: 'center',
      render: (index, record) => <Image src={record.img} width={150} height={100} className='object-cover' />,
    },
    {
      title: 'Tiêu đề',
      align: 'center',
      width: '25%',
      dataIndex: 'title',
    },
    { title: 'Location', dataIndex: 'location', align: 'center' },
    { title: 'Nội dung', dataIndex: 'content', width: '30%' },
    {
      align: 'center',
      width: '4%',
      render: (e, record, index) => (
        <Popover
          trigger={'click'}
          placement='left'
          content={
            <Space size={10} key={index} direction='vertical'>
              <ButtonCustom
                title={'Chỉnh sửa'}
                icon={<EditOutlined />}
                handleClick={() => handleClickBtnEditStudent(record)}
              />
              <Popconfirm
                title='Xóa tin tức'
                description={`Bạn có chắc chắn muốn xóa tin tức ${record.surname} ${record.lastName} ?`}
                icon={<DeleteOutlined />}
                okText='Xóa'
                okType='danger'
                onConfirm={() => handleConfirmDeleteStudent(record.id)}
              >
                <Button
                  danger
                  loading={deleteStudents.isLoading}
                  className='flex justify-center items-center bg-white'
                  icon={<DeleteOutlined />}
                >
                  Xóa
                </Button>
              </Popconfirm>
              <ButtonCustom
                title={'Xem chi tiết'}
                icon={<SolutionOutlined />}
                handleClick={() => handleClickBtnShowDetailStudent(record)}
              />
            </Space>
          }
        >
          <Button className='flex items-center justify-center bg-white' icon={<MoreOutlined />} />
        </Popover>
      ),
    },
  ];
  return (
    <div>
      <div className='flex justify-between items-center mb-3 relative'>
        <Space>
          <ButtonCustom
            title='Xóa hết'
            icon={<UsergroupDeleteOutlined />}
            type='primary'
            disabled={!hasSelected}
            loading={deleteStudentList.isLoading}
            handleClick={handleConfirmDeleteStudentList}
          />
        </Space>
        <Title className='hidden xl:block' level={3} style={{ textTransform: 'uppercase', marginBottom: 0 }}>
          Danh sách hiển thị
        </Title>
        <ButtonCustom title='Thêm tin tức' icon={<UserAddOutlined />} handleClick={handleClickBtnAddStudent} />
      </div>
      <div className='relative'>
        <Table
          scroll={{
            y: 630,
          }}
          rowKey='id'
          loading={isFetching}
          rowSelection={{
            onChange: handleChangeRowSelection,
          }}
          bordered={true}
          dataSource={data?.data?.items}
          columns={columns}
          pagination={{
            onChange: handleChangePaginationTable,
            defaultCurrent: 1,
            pageSize: pageSize,
            total: data?.data?.total,
            current: pageCurrent,
            showSizeChanger: true,
            pageSizeOptions: [10, 50, 100, 200],
          }}
        />
      </div>
      <ModalFormNews
        onSuccess={() => {
          setOpenModalFormNews(false);
        }}
        dataNews={dataNews}
        openForm={openModalFormNews}
        onChangeClickOpen={(open) => {
          if (!open) {
            setDataNews({});
            setOpenModalFormNews(false);
          }
        }}
      />
    </div>
  );
}

export default ManagerNewsPage;
