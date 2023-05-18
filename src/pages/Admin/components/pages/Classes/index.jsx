import { DeleteOutlined, EditOutlined, PlusCircleOutlined, ReloadOutlined, SearchOutlined, SolutionOutlined } from '@ant-design/icons';
import { Button, Drawer, Input, Popconfirm, Space, Table, Tooltip, Typography, message } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import { deleteClass, getClassList } from '../../../../../API/axios';
import ModalFormClass from './components/ModalForm';
import TableStudentClass from './components/TableStudentClass';

function AdminClassesPage(props) {
  const { Title } = Typography;
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openModalForm, setOpenModalForm] = useState(false);
  const [dataClass, setDataClass] = useState({});
  const [valueSearchClass, setValueSearchClass] = useState('');
  const [loadingTable, setLoadingTable] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [pageCurrent, setPageCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalClass, setTotalClass] = useState(0);
  const [disabledClass, setDisabledClass] = useState(false);
  const debunceValue = useDebounce(valueSearchClass, 750);
  // Handle Confirm Delete Class
  const handleConfirmDeleteClass = (id) => {
    setLoadingTable(true);
    deleteClass(id)
      .then((res) => {
        if (res.data?.success === true) {
          handleGetClassList();
          setLoadingTable(false);
          message.success('Xóa lớp thành công');
        }
      })
      .finally(() => setLoadingTable(false));
  };

  //handle get classlist
  const classId = debunceValue[0];
  const handleGetClassList = () => {
    setLoadingTable(true);
    getClassList({ id: classId, page: pageCurrent, size: pageSize })
      .then((res) => {
        if (res.data?.success === true) {
          setDataSource(res.data?.data?.items);
          setTotalClass(res.data?.data?.total);
          setLoadingTable(false);
        } else if (res.data?.error?.message === 'Access is denied') {
          message.warning('Bạn không có quyền truy cập');
        } else return message.error(res.data?.error?.message);
      })
      .finally(() => setLoadingTable(false));
  };
  useEffect(() => {
    handleGetClassList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageCurrent, classId, pageSize]);
  const columns = [
    {
      title: 'Tên lớp',
      dataIndex: 'name',
    },
    {
      title: 'Mã lớp',
      align: 'center',
      dataIndex: 'id',
    },
    {
      title: 'Số lượng sinh viên',
      align: 'center',
      dataIndex: 'numOfStu',
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
                setDisabledClass(true);
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
              onConfirm={() => handleConfirmDeleteClass(record.id)}
            >
              <Button className='flex justify-center items-center text-md shadow-md' icon={<DeleteOutlined />}></Button>
            </Popconfirm>
          </Tooltip>
          <Tooltip title='Xem danh sách sinh viên lớp'>
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
      <div className='flex justify-between items-center mb-3'>
        <Space>
          <Tooltip title='Tìm kiếm lớp'>
            <Input
              prefix={<SearchOutlined className='opacity-60 mr-1' />}
              placeholder='Nhập mã lớp'
              className='shadow-sm w-[350px]'
              onChange={(e) => setValueSearchClass(e.target.value)}
              value={valueSearchClass}
            />
          </Tooltip>
        </Space>
        <Title
          level={3}
          style={{
            textTransform: 'uppercase',
            marginBottom: 0,
            marginRight: 100,
          }}
        >
          Danh sách các lớp trong khoa
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
            className='flex justify-center items-center bg-white shadow-lg font-medium'
            onClick={() => setOpenModalForm(true)}
          >
            Thêm lớp
          </Button>
        </Space>
      </div>
      <Table
        rowKey='id'
        bordered={true}
        loading={loadingTable}
        columns={columns}
        dataSource={dataSource}
        pagination={{
          onChange: (page, size) => {
            setPageCurrent(page);
            setPageSize(size);
          },
          defaultCurrent: 1,
          pageSize: pageSize,
          total: totalClass,
          current: pageCurrent,
          showSizeChanger: true,
        }}
      />
      <ModalFormClass
        onSuccess={() => {
          handleGetClassList();
          setOpenModalForm(false);
        }}
        dataClass={dataClass}
        openModalForm={openModalForm}
        onChangeClickOpen={(open) => {
          if (!open) {
            setDataClass({});
            setOpenModalForm(false);
            setDisabledClass(false);
          }
        }}
        disabledClass={disabledClass}
      />
      <Drawer
        size='large'
        open={openDrawer}
        onClose={() => {
          setOpenDrawer(false);
          setDataClass({});
        }}
        placement='right'
      >
        <TableStudentClass dataClass={dataClass} />
      </Drawer>
    </div>
  );
}

export default AdminClassesPage;
