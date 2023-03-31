<<<<<<< HEAD
import {
  CheckCircleOutlined,
  DeleteOutlined,
  EditOutlined,
  SearchOutlined,
  SolutionOutlined,
  SyncOutlined,
  UserAddOutlined,
  UsergroupAddOutlined,
} from '@ant-design/icons';
import { Button, Drawer, Input, message, Popconfirm, Space, Table, Tag, Tooltip } from 'antd';
import Title from 'antd/es/typography/Title';
import React, { useRef, useState } from 'react';
import Highlighter from 'react-highlight-words';
import LineChartPointStudent from '../../ColumnChart/ColumnChartPointStudent';
import LineChartTraningPointStudent from '../../ColumnChart/ColumnChartTraningPointStudent';
import ColumnCreditsStudent from '../../ColumnChart/ColumnCreditsStudent';
import DescriptionInfoStudent from '../../Descriptions/DescriptionInfoStudent';
import ModalFormStudentPoint from '../../Modal/modalFormPoint';
import ProgressCredits from '../../Progress/ProgressCredits';

function AdminListStudentPage(props) {
  const [loadingBtn, setLoadingBtn] = useState(false);
  const [openModalFormUser, setOpenModalFormStudent] = useState(false);
  const [openDrawerInfo, setOpenDrawerInfo] = useState(false);
  const [dataStudent, setDataStudent] = useState([]);
  // Handle delete student
  const handleConfirmDeleteStudent = () => {
    // Call API
    message.success('Xóa sinh viên thành công !');
  };
  // Handle Select Delete Students
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleSelectDeleteStudent = () => {
    setLoading(true);
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };
  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;
  // Filter student
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div className='p-3' onKeyDown={(e) => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder='Nhập mã sinh viên '
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          className='mb-3 block'
        />
        <Space>
          <Button
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            className='w-[90px] flex justify-center items-center'
            icon={<SearchOutlined />}
            size='small'
          >
            Tìm kiếm
          </Button>
          <Button onClick={() => clearFilters && handleReset(clearFilters)} size='small' className='w-[90px]'>
            Xóa
          </Button>
          <Button
            size='small'
            onClick={() => {
              close();
            }}
          >
            Đóng
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <Tooltip title='Tìm kiếm sinh viên'>
        <Button
          className='flex justify-center items-center text-xs border-none opacity-40'
          icon={
            <SearchOutlined
              style={{
                color: filtered ? '#1890ff' : undefined,
              }}
            />
          }
        ></Button>
      </Tooltip>
    ),
    onFilter: (value, record) => record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });
  const dataSource = [
    {
      id: 1,
      name: 'Lê Hồng Phong',
      studentId: '655201',
      phoneNumber: '0987654321',
      gender: 'Nam',
      dateOfBirth: '1990-01-01',
      email: 'hzdkv@example.com',
      className: 'K65CNTTA',
      majorName: 'CNTT',
      placeOfOrigin: 'HaNoi',
      accommodation: 'HaNoi',
      parentName: 'Le Van A',
      parentNumberPhone: '0983231321',
      status: 'Chưa tốt nghiệp',
    },
    {
      id: 2,
      name: 'Đỗ Đức Chiến',
      studentId: '655202',
      phoneNumber: '0987654321',
      gender: 'Nam',
      dateOfBirth: '1990-01-01',
      email: 'hzdkv@example.com',
      className: 'K65CNPM',
      majorName: 'CNPM',
      placeOfOrigin: 'Hải Phòng',
      accommodation: 'HaNoi',
      parentName: 'Le Van A',
      parentNumberPhone: '0983231321',
      status: 'Chưa tốt nghiệp',
    },
    {
      id: 3,
      name: 'Cam Trọng Hiếu',
      studentId: '655203',
      phoneNumber: '0987654321',
      gender: 'Nam',
      dateOfBirth: '1990-01-01',
      email: 'hzdkv@example.com',
      className: 'K65CNTTB',
      majorName: 'CNTT',
      placeOfOrigin: 'HaNoi',
      accommodation: 'HaNoi',
      parentName: 'Le Van A',
      parentNumberPhone: '0983231321',
      status: 'Chưa tốt nghiệp',
    },
    {
      id: 4,
      name: 'Trần Hoài Anh',
      studentId: '655204',
      phoneNumber: '0987654321',
      gender: 'Nữ',
      dateOfBirth: '1990-01-01',
      email: 'hzdkv@example.com',
      className: 'K66CNTTA',
      majorName: 'CNTT',
      placeOfOrigin: 'HaNoi',
      accommodation: 'HaNoi',
      parentName: 'Le Van A',
      parentNumberPhone: '0983231321',
      status: 'Chưa tốt nghiệp',
    },
    {
      id: 5,
      name: 'Nguyễn Thanh Phong',
      studentId: '655205',
      phoneNumber: '0987654321',
      gender: 'Nam',
      dateOfBirth: '1990-01-01',
      email: 'hzdkv@example.com',
      className: 'K64ATTT',
      majorName: 'ATTT',
      placeOfOrigin: 'HaNoi',
      accommodation: 'HaNoi',
      parentName: 'Le Van A',
      parentNumberPhone: '0983231321',
      status: 'Chưa tốt nghiệp',
    },
    {
      id: 6,
      name: 'Nguyễn Tiến Nam',
      studentId: '655206',
      phoneNumber: '0987654321',
      gender: 'Nam',
      dateOfBirth: '1990-01-01',
      email: 'hzdkv@example.com',
      className: 'K64MMT',
      majorName: 'MMT',
      placeOfOrigin: 'Bắc Giang',
      accommodation: 'HaNoi',
      parentName: 'Le Van A',
      parentNumberPhone: '0983231321',
      status: 'Chưa tốt nghiệp',
    },
    {
      id: 7,
      name: 'Nguyễn Phương Thảo',
      studentId: '655207',
      phoneNumber: '0987654321',
      gender: 'Nữ',
      dateOfBirth: '1990-01-01',
      email: 'hzdkv@example.com',
      className: 'K65CNTTA',
      majorName: 'CNTT',
      placeOfOrigin: 'Vĩnh Phúc',
      accommodation: 'HaNoi',
      parentName: 'Le Van A',
      parentNumberPhone: '0983231321',
      status: 'Chưa tốt nghiệp',
    },
    {
      id: 8,
      name: 'Nguyễn Thị Thu Hằng',
      studentId: '655208',
      phoneNumber: '0987654321',
      gender: 'Nữ',
      dateOfBirth: '1990-01-01',
      email: 'hzdkv@example.com',
      className: 'K65HTTT',
      majorName: 'HTTT',
      placeOfOrigin: 'HaNoi',
      accommodation: 'HaNoi',
      parentName: 'Le Van A',
      parentNumberPhone: '0983231321',
      status: 'Chưa tốt nghiệp',
    },
    {
      id: 9,
      name: 'Lê Minh Hiếu',
      studentId: '655209',
      phoneNumber: '0987654321',
      gender: 'Nam',
      dateOfBirth: '1990-01-01',
      email: 'hzdkv@example.com',
      className: 'K67CNTTA',
      majorName: 'CNTT',
      placeOfOrigin: 'HaNoi',
      accommodation: 'HaNoi',
      parentName: 'Le Van A',
      parentNumberPhone: '0983231321',
      status: 'Đã tốt nghiệp',
    },
    {
      id: 10,
      name: 'Trần Giang Thanh',
      studentId: '655210',
      phoneNumber: '0987654321',
      gender: 'Nữ',
      dateOfBirth: '1990-01-01',
      email: 'hzdkv@example.com',
      className: 'K65CNTTA',
      majorName: 'CNTT',
      placeOfOrigin: 'HaNoi',
      accommodation: 'HaNoi',
      parentName: 'Le Van A',
      parentNumberPhone: '0983231321',
      status: 'Đã tốt nghiệp',
    },
  ];
  const data = [];
  data.push(dataSource);
  const columns = [
    {
      title: 'STT',
      dataIndex: 'id',
=======
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
>>>>>>> 2af0486c725ede62c016e02b0e0d2e3c9805ea43
      align: 'center',
    },
    {
      title: 'MSV',
<<<<<<< HEAD
      dataIndex: 'studentId',
      align: 'center',
      ...getColumnSearchProps('studentId'),
    },
    {
      title: 'Họ và tên',
      align: 'center',
      dataIndex: 'name',
    },
    {
      title: 'Lớp',
      dataIndex: 'className',
=======
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
>>>>>>> 2af0486c725ede62c016e02b0e0d2e3c9805ea43
      align: 'center',
    },
    {
      title: 'Chuyên ngành',
<<<<<<< HEAD
      dataIndex: 'majorName',
      align: 'center',
      filters: [
        {
          text: 'Công nghệ thông tin',
          value: 'CNTT',
        },
        {
          text: 'Công nghệ phần mềm',
          value: 'CNPM',
        },
        {
          text: 'Hệ thống thông tin',
          value: 'HTTT',
        },
        {
          text: 'An toàn thông tin',
          value: 'ATTT',
        },
        {
          text: 'Mạng máy tính',
          value: 'MMT',
        },
        {
          text: 'Truyền thông',
          value: 'TT',
        },
        {
          text: 'Trí tuệ nhân tạo',
          value: 'TTNT',
        },
      ],
      onFilter: (value, record) => record.majorName.indexOf(value) === 0,
    },
    {
      title: 'Tình trạng',
      align: 'center',
      render: (text, record, index) => (
        <Tag
          icon={record.status === 'Đã tốt nghiệp' ? <CheckCircleOutlined /> : <SyncOutlined />}
          color={record.status === 'Đã tốt nghiệp' ? 'success' : 'processing'}
        >
          {record.status === 'Đã tốt nghiệp' ? 'Đã tốt nghiệp' : 'Chưa tốt nghiệp'}
        </Tag>
      ),
      filters: [
        {
          text: 'Chưa tốt nghiệp',
          value: 'Chưa tốt nghiệp',
        },
        {
          text: 'Đã tốt nghiệp',
          value: 'Đã tốt nghiệp',
        },
      ],
      onFilter: (value, record) => record.status.indexOf(value) === 0,
    },
    {
      title: 'Tùy chọn',
      align: 'center',
      render: (e, record, index) => (
        <Space size={16} key={index}>
          <Tooltip title='Chỉnh sửa'>
            <Button
              loading={loadingBtn}
              className='flex justify-center items-center text-md shadow-md'
              icon={<EditOutlined />}
              onClick={() => {
                setLoadingBtn(true);
                setDataStudent(record);
                setOpenModalFormStudent(true);
                setLoadingBtn(false);
              }}
            ></Button>
          </Tooltip>
          <Tooltip title='Xóa'>
            <Popconfirm
              title='Bạn có chắc chắn muốn xóa sinh viên này ?'
              icon={<DeleteOutlined />}
              description=''
              okText='Xóa'
              okType='danger'
              onConfirm={handleConfirmDeleteStudent}
            >
              <Button className='flex justify-center items-center text-md shadow-md' icon={<DeleteOutlined />}></Button>
            </Popconfirm>
          </Tooltip>
          <Tooltip title='Xem chi tiết'>
            <Button
              className='flex justify-center items-center text-md shadow-md'
              icon={<SolutionOutlined />}
              onClick={() => {
                setDataStudent(record);
                setOpenDrawerInfo(true);
              }}
            ></Button>
          </Tooltip>
=======
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
>>>>>>> 2af0486c725ede62c016e02b0e0d2e3c9805ea43
        </Space>
      ),
    },
  ];
<<<<<<< HEAD
  return (
    <>
      <div className='flex justify-between items-center mb-3'>
        <Button onClick={handleSelectDeleteStudent} disabled={!hasSelected} loading={loading}>
          Xóa
        </Button>
        <Title level={3} style={{ textTransform: 'uppercase', marginLeft: '350px' }}>
          Danh sách sinh viên khoa
        </Title>
        <Space size={8}>
          <Button
            className='flex justify-center items-center text-md font-medium shadow-md bg-slate-100 mr-2'
            icon={<UsergroupAddOutlined />}
          >
            Thêm danh sách sinh viên
          </Button>
          <Button
            loading={loadingBtn}
            onClick={() => {
              setLoadingBtn(true);
              setOpenModalFormStudent(true);
              setLoadingBtn(false);
            }}
            className='flex justify-center items-center text-md font-medium shadow-md bg-slate-100'
=======

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
>>>>>>> 2af0486c725ede62c016e02b0e0d2e3c9805ea43
            icon={<UserAddOutlined />}
          >
            Thêm sinh viên
          </Button>
<<<<<<< HEAD
        </Space>
      </div>
      <Table
        rowKey='id'
        rowSelection={rowSelection}
=======
        </div>
      </div>
      <Table
        rowKey='id'
>>>>>>> 2af0486c725ede62c016e02b0e0d2e3c9805ea43
        bordered={true}
        dataSource={dataSource}
        columns={columns}
        pagination={{
          onChange: {},
        }}
      />
<<<<<<< HEAD
      <ModalFormStudentPoint
        onSuccess={() => {
          setOpenModalFormStudent(false);
        }}
        dataStudent={dataStudent}
        openForm={openModalFormUser}
        onChangeClickOpen={(open) => {
          if (!open) {
            setDataStudent({});
            setOpenModalFormStudent(false);
          }
        }}
      />
      <Drawer size='large' open={openDrawerInfo} onClose={() => setOpenDrawerInfo(false)} placement='right'>
        <DescriptionInfoStudent dataStudent={data} />
        <LineChartPointStudent />
        <LineChartTraningPointStudent />
        <ColumnCreditsStudent />
        <ProgressCredits />
      </Drawer>
=======
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
>>>>>>> 2af0486c725ede62c016e02b0e0d2e3c9805ea43
    </>
  );
}

export default AdminListStudentPage;
