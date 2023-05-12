import {
  DeleteOutlined,
  EditOutlined,
  SearchOutlined,
  SolutionOutlined,
  SwapOutlined,
  UserAddOutlined,
} from '@ant-design/icons';
import { Button, Input, Popconfirm, Popover, Space, Table, Tag, Tooltip, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import ContentPopover from './components/ContentPopover';
import ModalFormAdmin from './components/ModalFormAdmin';

function AdminAuthorizationPage(props) {
  const { Title, Text } = Typography;
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loadingTable, setLoadingTable] = useState(false);
  const [openModalFormAdmin, setOpenModalFormAdmin] = useState(false);
  const [loadingBtnSearchAdmin, setLoadingBtnSearchAdmin] = useState(false);
  const [loadingBtnDeleteListAdmin, setLoadingBtnDeleteListAdmin] = useState(false);
  const [dataAdmin, setDataAdmin] = useState({});
  const [valueSearchAdmin, setValueSearchAdmin] = useState('');

  const handleConfirmDeleteAdmin = () => {};
  // Handle onClick btn delete student list
  const handleSelectDeleteAdmin = () => {
    setLoadingTable(true);
    setLoadingBtnDeleteListAdmin(true);
  };
  const hasSelected = selectedRowKeys.length > 0;

  // Handle Search Admin
  const handleSearchAdmin = () => {
    setLoadingBtnSearchAdmin(true);
    setLoadingTable(true);
  };

  useEffect(() => {}, []);
  const dataSource = [
    {
      id: 1,
      password: '123',
      name: 'Phong',
      email: 'admin@gmail.com',
      roleId: 'ADMIN',
    },
    {
      id: 2,
      password: '123',
      name: 'Hiếu',
      email: 'admin@gmail.com',
      roleId: 'SUPERMOD',
    },
    {
      id: 3,
      password: '123',
      name: 'admin1',
      email: 'admin@gmail.com',
      roleId: 'MOD',
    },
  ];
  const role = (roleId) => {
    if (roleId === 'ADMIN') {
      return <Tag color='red'>ADMIN</Tag>;
    }
    if (roleId === 'SUPERMOD') {
      return <Tag color='magenta'>SUPERMOD</Tag>;
    } else return <Tag color='cyan'>MOD</Tag>;
  };
  const columns = [
    {
      title: 'Tên đăng nhập',
      dataIndex: 'id',
      align: 'center',
    },
    {
      title: 'Tên người dùng',
      dataIndex: 'name',
      align: 'center',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      align: 'center',
    },
    {
      title: 'Vai trò',
      align: 'center',
      render: (e, record, idx) => role(record.roleId),
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
                setDataAdmin(record);
                setOpenModalFormAdmin(true);
              }}
            ></Button>
          </Tooltip>
          <Tooltip title='Xóa'>
            <Popconfirm
              title='Bạn có chắc chắn muốn xóa sinh viên này ?'
              icon={<DeleteOutlined />}
              okText='Xóa'
              okType='danger'
              onConfirm={handleConfirmDeleteAdmin}
            >
              <Button className='flex justify-center items-center text-md shadow-md' icon={<DeleteOutlined />}></Button>
            </Popconfirm>
          </Tooltip>
          <Tooltip title='Xem chi tiết'>
            <Button
              className='flex justify-center items-center text-md shadow-md'
              icon={<SolutionOutlined />}
              // onClick={() => {
              //   setDataAdmin(record);
              //   setOpenDrawerInfo(true);
              // }}
            ></Button>
          </Tooltip>
        </Space>
      ),
    },
  ];
  return (
    <div>
      <div className='flex justify-between mb-3'>
        <Button
          type='primary'
          disabled={!hasSelected}
          onClick={handleSelectDeleteAdmin}
          loading={loadingBtnDeleteListAdmin}
        >
          Xóa
        </Button>
        <Text
          style={{
            position: 'absolute',
            left: '19%',
            top: '11%',
            opacity: 0.5,
          }}
        >
          {hasSelected ? `Đã chọn ${selectedRowKeys.length} admin` : ''}
        </Text>
        <Space className='absolute left-1/4'>
          <Tooltip title='Tìm kiếm admin'>
            <Input
              prefix={<SearchOutlined style={{ opacity: 0.6 }} />}
              placeholder='Nhập mã admin'
              className='shadow-sm w-[230px]'
              onChange={(e) => setValueSearchAdmin(e.target.value)}
              value={valueSearchAdmin}
            />
          </Tooltip>
          <Button
            disabled={valueSearchAdmin === '' || valueSearchAdmin === null ? true : false}
            type='primary'
            onClick={handleSearchAdmin}
            loading={loadingBtnSearchAdmin}
          >
            Tìm kiếm
          </Button>
        </Space>
        <Title level={3} className='uppercase absolute left-2/4'>
          Danh sách admin
        </Title>
        <Space>
          <Popover placement='bottom' content={<ContentPopover />} trigger={'click'}>
            <Button
              icon={<SwapOutlined />}
              onClick={() => {}}
              className='flex justify-center items-center text-md font-medium shadow-md bg-slate-100'
            >
              Phân quyền
            </Button>
          </Popover>
          <Button
            icon={<UserAddOutlined />}
            onClick={() => {
              setOpenModalFormAdmin(true);
            }}
            className='flex justify-center items-center text-md font-medium shadow-md bg-slate-100'
          >
            Thêm admin
          </Button>
        </Space>
      </div>
      <ModalFormAdmin
        onSuccess={() => {
          setOpenModalFormAdmin(false);
        }}
        dataAdmin={dataAdmin}
        openForm={openModalFormAdmin}
        onChangeClickOpen={(open) => {
          if (!open) {
            setDataAdmin({});
            setOpenModalFormAdmin(false);
          }
        }}
      />
      <Table
        rowKey='id'
        loading={loadingTable}
        rowSelection={{
          onChange: (e, record) => setSelectedRowKeys(record.map((data) => data.id)),
        }}
        bordered={true}
        dataSource={dataSource}
        columns={columns}
      />
    </div>
  );
}

export default AdminAuthorizationPage;
