import {
  DeleteOutlined,
  EditOutlined,
  MoreOutlined,
  SearchOutlined,
  TableOutlined,
  UserAddOutlined,
} from '@ant-design/icons';
import { useQuery } from '@tanstack/react-query';
import { Button, Drawer, Input, Popconfirm, Popover, Space, Table, Tooltip, Typography } from 'antd';
import { useState } from 'react';
import { ButtonCustom } from '../../../components/Button';
import { ModalFormStudentStatus } from '../components/Modal';
import { TableListStatus } from '../components/Table';
import { adminStudentStatusApi } from '../../../API/admin/adminStudentStatusApi';

function ManagerStatusPage(props) {
  const [pageCurrent, setPageCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const { data, isFetching } = useQuery({
    staleTime: 60 * 5000,
    cacheTime: 5 * 60 * 5000,
    queryKey: ['studentStatusList', pageCurrent, pageSize],
    queryFn: async () => {
      try {
        const res = await adminStudentStatusApi.getAllStudentStatus({ page: pageCurrent, size: pageSize });
        if (res) return res;
      } catch (error) {}
    },
  });
  const [valueInputStudent, setValueInputStudent] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [dataStudent, setDataStudent] = useState({});
  const handleChangeInputStudentId = (id) => {
    setValueInputStudent(id);
  };
  const handleClickReset = () => {};
  const handleChangePaginationTable = (page, size) => {
    setPageCurrent(page);
    setPageSize(size);
  };
  const handleChangeRowSelection = () => {};
  const handleClickBtnEditStatusStudent = (record) => {
    setOpenModal(true);
    setDataStudent(record);
  };
  const handleConfirmDeleteStatusStudent = () => {};
  const handleClickShowStatusList = () => {
    setOpenDrawer(true);
  };
  const handleClickAddStatus = (record) => {
    setOpenModal(true);
  };
  const columns = [
    {
      title: 'Mã sinh viên',
      dataIndex: 'studentId',
      filterIcon: (filtered) => (
        <SearchOutlined
          style={{
            color: filtered ? '#1677ff' : undefined,
          }}
        />
      ),
      filterDropdown: ({ selectedKeys }) => (
        <div
          style={{
            padding: 8,
          }}
        >
          <Tooltip title='Nhập mã sinh viên'>
            <Input
              value={valueInputStudent}
              onChange={(e) => handleChangeInputStudentId(e.target.value)}
              onPressEnter={() => {}}
              className='w-[200px] block mb-4'
            />
          </Tooltip>
          <Space>
            <ButtonCustom title='Reset' handleClick={handleClickReset} />
            <ButtonCustom title='Đóng' type='link' />
          </Space>
        </div>
      ),
      filterSearch: (input, record) => {
        console.log(input, record);
      },
    },
    {
      title: 'Họ đệm',
      dataIndex: 'surname',
    },
    {
      title: 'Tên',
      dataIndex: 'lastName',
    },
    {
      title: 'Trạng thái',
      dataIndex: 'statusName',
    },
    {
      title: 'Thời gian',
      dataIndex: 'time',
    },
    {
      title: 'Ghi chú',
      dataIndex: 'note',
    },
    {
      align: 'center',
      width: '8%',
      render: (index, record) => (
        <Popover
          trigger={'click'}
          placement='left'
          content={
            <Space size={10} key={index} direction='vertical'>
              <ButtonCustom
                title={'Chỉnh sửa'}
                icon={<EditOutlined />}
                handleClick={() => handleClickBtnEditStatusStudent(record)}
              />
              <Popconfirm
                title='Xóa sinh viên'
                description={`Bạn có chắc chắn muốn xóa sinh viên ${record.id} ?`}
                icon={<DeleteOutlined />}
                okText='Xóa'
                okType='danger'
                onConfirm={() => handleConfirmDeleteStatusStudent(record.id)}
              >
                <Button danger className='flex justify-center items-center bg-white' icon={<DeleteOutlined />}>
                  Xóa
                </Button>
              </Popconfirm>
            </Space>
          }
        >
          <Button className='flex items-center justify-center' icon={<MoreOutlined />} />
        </Popover>
      ),
    },
  ];

  const { Title } = Typography;
  return (
    <div>
      <div className='flex justify-between items-center mb-3 relative'>
        <Tooltip title='Tìm kiếm sinh viên'>
          <Input
            prefix={<SearchOutlined className='opacity-60 mr-1' />}
            placeholder='Nhập mã sinh viên'
            className='shadow-sm w-[250px]'
          />
        </Tooltip>
        <Title className='hidden xl:block' level={3} style={{ textTransform: 'uppercase', marginBottom: 0 }}>
          Quản lí tình trạng sinh viên
        </Title>
        <Space>
          <ButtonCustom title='Danh sách tình trạng' handleClick={handleClickShowStatusList} icon={<TableOutlined />} />
          <ButtonCustom
            title='Thêm tình trạng sinh viên'
            handleClick={handleClickAddStatus}
            icon={<UserAddOutlined />}
          />
        </Space>
      </div>
      <div className='relative'>
        <Table
          rowKey='id'
          loading={isFetching}
          scroll={{
            y: 630,
          }}
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
          }}
        />
      </div>
      <ModalFormStudentStatus
        open={openModal}
        onChangeClickOpen={(open) => {
          if (!open) {
            setDataStudent({});
            setOpenModal(false);
          }
        }}
        dataStudent={dataStudent}
      />
      <Drawer
        extra={<h1 className='text-black font-medium text-xl'>Danh sách trạng thái</h1>}
        open={openDrawer}
        width={1100}
        maskClosable={false}
        onClose={() => setOpenDrawer(false)}
      >
        <TableListStatus open={openDrawer} />
      </Drawer>
    </div>
  );
}

export default ManagerStatusPage;
