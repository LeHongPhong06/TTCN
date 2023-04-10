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
import { Button, Drawer, InputNumber, Popconfirm, Space, Table, Tag, Tooltip, Typography, message } from 'antd';
import React, { useState } from 'react';
import ColumnDataPoint from './components/ColumnDataPoint';
import DescriptionInfoStudent from './components/DescriptionInfoStudent';
import ModalFormStudentInfo from './components/ModalFormInfo';
import ProgressCredits from './components/ProgressCredits';
import ColumnPointTraining from './components/ColumnPointTraining';

function AdminListStudentPage(props) {
  const { Title } = Typography;
  const [loadingBtn, setLoadingBtn] = useState(false);
  const [openModalFormUser, setOpenModalFormStudent] = useState(false);
  const [openDrawerInfo, setOpenDrawerInfo] = useState(false);
  const [dataStudent, setDataStudent] = useState([]);
  const [valueSearchStudent, setValueSearchStudent] = useState('');
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
  };
  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;
  // items in dropdown export excel
  // const items = [
  //   {
  //     key: '1',
  //     label: (
  //       <a target='_blank' rel='noopener noreferrer' href='!#'>
  //         Thông tin theo bảng danh sách
  //       </a>
  //     ),
  //   },
  //   {
  //     key: '2',
  //     label: (
  //       <a target='_blank' rel='noopener noreferrer' href='!#'>
  //         Thông tin cơ bản
  //       </a>
  //     ),
  //   },
  //   {
  //     key: '3',
  //     label: (
  //       <a target='_blank' rel='noopener noreferrer' href='!#'>
  //         Thông tin chi tiết
  //       </a>
  //     ),
  //   },
  // ];
  // Handle Search Student
  console.log(valueSearchStudent);
  // Filter student
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
      align: 'center',
      dataIndex: 'id',
    },
    {
      title: 'Họ và tên',
      align: 'center',
      dataIndex: 'name',
    },
    {
      title: 'MSV',
      dataIndex: 'studentId',
      align: 'center',
    },
    {
      title: 'Lớp',
      dataIndex: 'className',
      align: 'center',
    },
    {
      title: 'Chuyên ngành',
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
        </Space>
      ),
    },
  ];
  return (
    <>
      <div className='flex justify-between items-center mb-1'>
        <Button onClick={handleSelectDeleteStudent} disabled={!hasSelected} loading={loading}>
          Xóa
        </Button>
        <Space>
          <Tooltip title='Tìm kiếm sinh viên'>
            <InputNumber
              prefix={<SearchOutlined style={{ opacity: 0.6 }} />}
              placeholder='Nhập mã sinh viên ...'
              className='shadow-sm w-[230px] placeholder:italic '
              controls={false}
              onChange={(value) => setValueSearchStudent(value)}
              value={valueSearchStudent}
            />
          </Tooltip>
          <Button>Tìm kiếm</Button>
        </Space>
        <Title level={3} style={{ textTransform: 'uppercase' }}>
          Danh sách thông tin sinh viên khoa
        </Title>
        <Space size={8}>
          {/* <Dropdown
            menu={{
              items,
            }}
            placement='bottomLeft'
            arrow
            trigger={['click']}
          >
            <Button
              icon={<FileExcelOutlined />}
              className='flex justify-center items-center text-md font-medium shadow-md bg-slate-100'
            >
              Xuất file excel
            </Button>
          </Dropdown> */}
          <Button
            className='flex justify-center items-center text-md font-medium shadow-md bg-slate-100'
            icon={<UsergroupAddOutlined />}
          >
            Thêm danh sách sinh viên
          </Button>
          <Button
            icon={<UserAddOutlined />}
            loading={loadingBtn}
            onClick={() => {
              setLoadingBtn(true);
              setOpenModalFormStudent(true);
              setLoadingBtn(false);
            }}
            className='flex justify-center items-center text-md font-medium shadow-md bg-slate-100'
          >
            Thêm sinh viên
          </Button>
        </Space>
      </div>
      <Table
        rowKey='id'
        rowSelection={rowSelection}
        bordered={true}
        dataSource={dataSource}
        columns={columns}
        pagination={{
          onChange: {},
          total: 20,
          defaultCurrent: 1,
        }}
      />
      <ModalFormStudentInfo
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
        <DescriptionInfoStudent dataStudent={dataStudent} />
        <ColumnDataPoint />
        <ColumnPointTraining />
        <ProgressCredits dataStudent={dataStudent} />
      </Drawer>
    </>
  );
}

export default AdminListStudentPage;
