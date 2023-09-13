import { DeleteOutlined, EditOutlined, PlusCircleOutlined, ReloadOutlined, SearchOutlined } from '@ant-design/icons';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Button, Input, Popconfirm, Space, Table, Tooltip, Typography, notification } from 'antd';
import React, { useState } from 'react';
import { useDebounce } from 'use-debounce';
import { adminCourseApi } from '../../../API/admin/adminCourseApi';
import { ModalFormCourse } from '../components/Modal';

function ManagerCoursePage(props) {
  const { Title } = Typography;
  const [openModalFormCourse, setOpenModalFormCourse] = useState(false);
  const [valueSearchCourse, setValueSearchCourse] = useState('');
  const [dataSource, setDataCourse] = useState({});
  const [pageSize, setPageSize] = useState(10);
  const [pageCurrent, setPageCurrent] = useState(1);
  const [courseId] = useDebounce(valueSearchCourse, 750);
  const queryClient = useQueryClient();

  // Handle get Course Data
  const { data, isLoading } = useQuery({
    staleTime: 60 * 5000,
    cacheTime: 5 * 60 * 5000,
    keepPreviousData: true,
    queryKey: ['courseList', pageCurrent, pageSize, courseId],
    queryFn: () => adminCourseApi.getAllCourse({ id: courseId, page: pageCurrent, size: pageSize }),
  });

  // Handle Confirm Delete Course
  const deleteCourse = useMutation({
    mutationKey: ['deleteCourse'],
    mutationFn: (id) => adminCourseApi.deleteCourse(id),
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ['courseList', pageCurrent, pageSize, courseId],
        exact: true,
      });
      notification.success({
        message: 'Thành công',
        description: data?.data?.data,
        duration: 2,
      });
    },
    onError: (error) => {
      notification.success({
        message: 'Thành công',
        description: error?.data?.data,
        duration: 2,
      });
    },
  });
  const handleConfirmDeleteCourse = (id) => {
    deleteCourse.mutate(id);
  };

  const columns = [
    {
      title: 'Mã khóa',
      dataIndex: 'id',
      align: 'center',
      key: 'id',
    },
    {
      title: 'Tên khóa',
      dataIndex: 'name',
      align: 'center',
      key: 'name',
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
                setDataCourse(record);
                setOpenModalFormCourse(true);
              }}
            ></Button>
          </Tooltip>
          <Tooltip title='Xóa'>
            <Popconfirm
              title={`Bạn có chắc chắn muốn xóa ${record.name} ?`}
              icon={<DeleteOutlined />}
              okText='Xóa'
              okType='danger'
              onConfirm={() => handleConfirmDeleteCourse(record.id)}
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
        <Tooltip title='Tìm kiếm khóa'>
          <Input
            prefix={<SearchOutlined className='opacity-60 mr-1' />}
            placeholder='Nhập mã khóa'
            className='shadow-sm w-[230px]'
            onChange={(e) => setValueSearchCourse(e.target.value)}
            value={valueSearchCourse}
          />
        </Tooltip>
        <Title style={{ textAlign: 'center', textTransform: 'uppercase', marginBottom: 0 }} level={3}>
          Quản lí khóa
        </Title>
        <Space>
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
          <Button
            icon={<PlusCircleOutlined />}
            onClick={() => setOpenModalFormCourse(true)}
            className='flex justify-center items-center bg-white shadow-lg font-medium'
          >
            Thêm khóa
          </Button>
        </Space>
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
            setPageSize(size);
          },
          defaultCurrent: 1,
          pageSize: pageSize,
          total: data?.data?.total,
          current: pageCurrent,
          showSizeChanger: true,
        }}
      />
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
    </div>
  );
}

export default ManagerCoursePage;
