import { DeleteOutlined, EditOutlined, SearchOutlined } from '@ant-design/icons';
import { Button, Input, Space, Table } from 'antd';
import React, { useState } from 'react';
import { UserAddOutlined } from '@ant-design/icons';
import ModalFormUser from '../../Modal/modalForm';
function AdminListStudentPage(props) {
  const [loadingButtonSearch, setLoadingButtonSearch] = useState(false);
  const [openModalFormUser, setOpenModalFormUser] = useState();
  const [dataStudentList, setDataStudentList] = useState({});
  const handleSearchStundent = () => {
    setLoadingButtonSearch(true);
  };
  const handleClickDeleteStudent = () => {};
  const dataSource = [
    {
      name: '1',
      age: 32,
      address: '10 Downing Street',
    },
    {
      name: '2',
      age: 32,
      address: '10 Downing Street',
    },
    {
      name: '3',
      age: 32,
      address: '10 Downing Street',
    },
    {
      name: '4',
      age: 32,
      address: '10 Downing Street',
    },
    {
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
    {
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
    {
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
    {
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
    {
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  ];

  const columns = [
    {
      title: 'STT',
      dataIndex: 'name',
      align: 'center',
    },
    {
      title: 'MSV',
      dataIndex: 'age',
      align: 'center',
    },
    {
      title: 'Họ Tên',
      dataIndex: 'age',
    },
    {
      title: 'Lớp',
      dataIndex: 'address',
      align: 'center',
    },
    {
      title: 'Chuyên ngành',
      dataIndex: 'address',
    },
    {
      title: 'Điểm chuyên cần',
      dataIndex: 'address',
      align: 'center',
    },
    {
      title: 'Tùy chọn',
      render: (e, record, index) => (
        <Space size='middle'>
          <Button
            className='flex justify-center items-center text-md'
            icon={<EditOutlined />}
            onClick={() => {
              setDataStudentList(record);
              setOpenModalFormUser(true);
            }}
          ></Button>
          <Button
            className='flex justify-center items-center text-md'
            icon={<DeleteOutlined />}
            onClick={handleClickDeleteStudent}
          ></Button>
        </Space>
      ),
    },
  ];

  return (
    <>
      <div className='flex justify-between items-center mb-4'>
        <div>
          <Space className='mb-4'>
            <Input placeholder='Nhập mã sinh viên . . .' className='w-[300px]' size='large ' type='number' />
            <Button
              className=' justify-center items-center'
              type='primary'
              shape='circle'
              icon={<SearchOutlined />}
              size='middle'
              loading={loadingButtonSearch}
              onClick={handleSearchStundent}
            />
          </Space>
        </div>
        <div>
          <p className='uppercase text-xl'>Danh sách sinh viên khoa</p>
        </div>
        <div>
          <Button
            onClick={() => {
              setOpenModalFormUser(true);
            }}
            className='flex justify-center items-center text-md'
            icon={<UserAddOutlined />}
          >
            Thêm sinh viên
          </Button>
        </div>
      </div>
      <Table
        rowKey='id'
        bordered={true}
        dataSource={dataSource}
        columns={columns}
        pagination={{
          onChange: {},
        }}
      />
      <ModalFormUser
        dataStudent={dataStudentList}
        openForm={openModalFormUser}
        onChangeClickOpen={(open) => {
          if (!open) {
            setDataStudentList({});
            setOpenModalFormUser(false);
          }
        }}
      />
    </>
  );
}

export default AdminListStudentPage;
