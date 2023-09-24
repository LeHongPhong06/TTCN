import { DeleteOutlined, EditOutlined, SearchOutlined, SwapOutlined, UserAddOutlined } from '@ant-design/icons';
import { Button, Drawer, Input, Popconfirm, Space, Table, Tag, Tooltip, Typography, message, notification } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import { deleteAdmin, getAdminList } from '../../../API/axios';
import DrawerAdminAuther from '../components/Drawer/DrawerAdminAuther';
import { ModalFormAdmin } from '../components/Modal';
import { ButtonCustom } from '../../../components/Button';

function ManagerAuthorizationPage(props) {
  const { Title } = Typography;
  const [openDrawer, setOpenDrawer] = useState(false);
  const [loadingTable, setLoadingTable] = useState(false);
  const [openModalFormAdmin, setOpenModalFormAdmin] = useState(false);
  const [dataAdmin, setDataAdmin] = useState({});
  const [valueSearchAdmin, setValueSearchAdmin] = useState('');
  const [pageCurrent, setPageCurrent] = useState(1);
  const [totalAdmin, setTotalAdmin] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [dataSource, setDataSource] = useState([]);
  const [required, setRequired] = useState(true);

  // handle delete admin
  const handleConfirmDeleteAdmin = (id) => {
    setLoadingTable(true);
    deleteAdmin(id)
      .then((res) => {
        if (res.data?.success === true) {
          notification.success({
            message: 'Thành công',
            description: 'Xóa admin thành công',
            duration: 2,
          });
          handleGetAdminList();
        } else return message.error(res.data?.error?.message);
      })
      .finally(() => setLoadingTable(false));
  };

  // handle get admin list
  const debunceValue = useDebounce(valueSearchAdmin, 750);
  const adminId = debunceValue[0];
  const handleGetAdminList = () => {
    setLoadingTable(true);
    getAdminList({ page: pageCurrent, size: pageSize, id: adminId })
      .then((res) => {
        if (res.data?.success === true) {
          setDataSource(res.data?.data?.items);
          setTotalAdmin(res.data?.data?.total);
          setLoadingTable(false);
        } else if (res.data?.error?.message === 'Access is denied') {
          message.warning('Bạn không có quyền truy cập');
        } else if (res.data?.success === false) {
          message.warning(res.data?.error?.message);
        }
      })
      .finally(() => setLoadingTable(false));
  };
  const handleClickEdit = (record) => {
    setRequired(false);
    setDataAdmin(record);
    setOpenModalFormAdmin(true);
  };
  useEffect(() => {
    handleGetAdminList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageCurrent, pageSize, adminId]);

  const role = (roleId) => {
    if (roleId === 'ADMIN') {
      return <Tag color='red'>ADMIN</Tag>;
    }
    if (roleId === 'SUPERMOD') {
      return <Tag color='magenta'>SUPERMOD</Tag>;
    } else if (roleId === 'MOD') {
      return <Tag color='volcano'>MOD</Tag>;
    } else return <Tag color='lime'>SUPERADMIN</Tag>;
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
        <Button.Group key={index}>
          <ButtonCustom title={'Chỉnh sửa'} icon={<EditOutlined />} handleClick={() => handleClickEdit(record)} />
          <Popconfirm
            title='Bạn có chắc chắn muốn xóa sinh viên này ?'
            icon={<DeleteOutlined />}
            okText='Xóa'
            okType='danger'
            onConfirm={() => handleConfirmDeleteAdmin(record.id)}
          >
            <Button
              className='flex justify-center items-center text-md shadow-md'
              icon={<DeleteOutlined />}
              type='primary'
              danger
            >
              Xóa
            </Button>
          </Popconfirm>
        </Button.Group>
      ),
    },
  ];
  return (
    <div>
      <div className='flex justify-between mb-3'>
        <Tooltip title='Tìm kiếm admin'>
          <Input
            prefix={<SearchOutlined className='opacity-60 mr-1' />}
            placeholder='Nhập mã admin'
            className='shadow-sm w-[230px]'
            onChange={(e) => setValueSearchAdmin(e.target.value)}
            value={valueSearchAdmin}
          />
        </Tooltip>
        <Title level={3} className='uppercase absolute left-2/4'>
          Danh sách admin
        </Title>
        <Space>
          <Button
            icon={<SwapOutlined />}
            onClick={() => {
              setOpenDrawer(true);
            }}
            className='flex justify-center items-center text-md font-medium shadow-md bg-slate-100'
          >
            Phân quyền
          </Button>
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
          handleGetAdminList();
          setOpenModalFormAdmin(false);
        }}
        dataAdmin={dataAdmin}
        openForm={openModalFormAdmin}
        onChangeClickOpen={(open) => {
          if (!open) {
            setDataAdmin({});
            setRequired(true);
            setOpenModalFormAdmin(false);
          }
        }}
        required={required}
      />
      {dataSource && (
        <Table
          scroll={{
            y: 630,
          }}
          rowKey='id'
          loading={loadingTable}
          bordered={true}
          dataSource={dataSource}
          columns={columns}
          pagination={{
            onChange: (page, size) => {
              setPageCurrent(page);
              setPageSize(size);
            },
            defaultCurrent: 1,
            pageSize: pageSize,
            total: totalAdmin,
            current: pageCurrent,
            showSizeChanger: true,
          }}
        />
      )}
      <Drawer placement='right' open={openDrawer} onClose={() => setOpenDrawer(false)} width={1300}>
        <DrawerAdminAuther />
      </Drawer>
    </div>
  );
}

export default ManagerAuthorizationPage;
