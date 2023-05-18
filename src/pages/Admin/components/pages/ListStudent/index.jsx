import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  DeleteOutlined,
  DownloadOutlined,
  EditOutlined,
  FilterOutlined,
  SearchOutlined,
  SolutionOutlined,
  StopOutlined,
  SyncOutlined,
  UploadOutlined,
  UserAddOutlined,
  UsergroupDeleteOutlined,
} from '@ant-design/icons';
import { Button, Collapse, Drawer, Input, Popconfirm, Popover, Space, Table, Tag, Tooltip, Typography, Upload, message } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import { deleteListStudent, deleteStudent, exportStudentList, getListStudent } from '../../../../../API/axios';
import { exportExcel } from '../../../../../import-export-data';
import ColumnDataMedCore10 from './components/ColumnDataMedCore10';
import ColumnDataMedCore4 from './components/ColumnDataMedCore4';
import ColumnPointTraining from './components/ColumnPointTraining';
import ContentPopover from './components/ContentPopover';
import DescriptionInfoStudent from './components/DescriptionInfoStudent';
import ModalFormStudentInfo from './components/ModalFormInfo';
import ProgressCredits from './components/ProgressCredits';

function AdminListStudentPage(props) {
  const { Panel } = Collapse;
  const { Title, Text } = Typography;
  const [loadingTable, setLoadingTable] = useState(false);
  const [loadingBtnDeleteListStudent, setLoadingBtnDeleteListStudent] = useState(false);
  const [openDrawerInfo, setOpenDrawerInfo] = useState(false);
  const [openModalFormUser, setOpenModalFormStudent] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [dataStudent, setDataStudent] = useState({});
  const [valuesFilter, setValuesFilter] = useState({});
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [dataSource, setDataSource] = useState([]);
  const [valueSearchStudent, setValueSearchStudent] = useState('');
  const [totalStudent, setTotalStudent] = useState(0);
  const [pageCurrent, setPageCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const debunceValue = useDebounce(valueSearchStudent, 750);
  const studentId = debunceValue[0];

  // Handle call get dataStudent
  const handleGetDataStudentList = () => {
    setLoadingTable(true);
    getListStudent({ studentId: studentId, page: pageCurrent, size: pageSize, filter: valuesFilter })
      .then((res) => {
        if (res.data?.success === true) {
          setDataSource(res.data?.data?.items);
          setTotalStudent(res.data?.data?.total);
          setLoadingTable(false);
        } else if (res.data?.error?.message === 'Access is denied') {
          message.warning('Bạn không có quyền truy cập');
        } else if (res.data?.success === false) {
          message.warning(res.data?.error?.message);
        }
      })
      .finally(() => setLoadingTable(false));
  };
  useEffect(() => {
    handleGetDataStudentList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageCurrent, valuesFilter, pageSize, studentId]);

  // Handle onClick confirm btn delete student
  const handleConfirmDeleteStudent = (id) => {
    setLoadingTable(true);
    deleteStudent(id)
      .then((res) => {
        if (res.data?.success === true) {
          handleGetDataStudentList();
          message.success('Xóa sinh viên thành công');
          setLoadingTable(false);
        } else {
          message.error('Xóa sinh viên thất bại');
        }
      })
      .finally(() => setLoadingTable(false));
  };

  // Handle onClick btn delete student list
  const hasSelected = selectedRowKeys.length > 0;
  const handleDeleteListStudent = async () => {
    setLoadingTable(true);
    setLoadingBtnDeleteListStudent(true);
    deleteListStudent({ ids: selectedRowKeys })
      .then((res) => {
        if (res.data?.success === true) {
          handleGetDataStudentList();
          message.success(res.data?.data);
          setLoadingTable(false);
          setLoadingBtnDeleteListStudent(false);
        } else {
          message.error(res.data?.error?.message);
        }
      })
      .finally(() => {
        setLoadingBtnDeleteListStudent(false);
        setLoadingTable(false);
      });
  };

  // export file
  const exportDataFileExcel = () => {
    exportStudentList().then((res) => {
      if (res.data?.success === true) {
        exportExcel(res.data?.data?.items, 'Sheet1', 'danh-sach-sinh-vien');
      }
    });
  };

  const tagStatus = (status) => {
    if (status === 'Bị buộc thôi học') {
      return (
        <Tag color='error' icon={<StopOutlined />}>
          Bị buộc thôi học
        </Tag>
      );
    }
    if (status === 'Đã bỏ học') {
      return (
        <Tag color='warning' icon={<CloseCircleOutlined />}>
          Đã bỏ học
        </Tag>
      );
    }
    if (status === 'Còn đi học') {
      return (
        <Tag color='processing' icon={<SyncOutlined />}>
          Còn đi học
        </Tag>
      );
    } else
      return (
        <Tag color='success' icon={<CheckCircleOutlined />}>
          Đã tốt nghiệp
        </Tag>
      );
  };
  const columns = [
    {
      title: 'Họ và tên',
      align: 'center',
      dataIndex: 'name',
    },
    {
      title: 'MSV',
      dataIndex: 'id',
      align: 'center',
    },
    {
      title: 'Khóa',
      dataIndex: ['course', 'id'],
      align: 'center',
    },
    {
      title: 'Lớp',
      dataIndex: ['classes', 'id'],
      align: 'center',
    },
    {
      title: 'Chuyên ngành',
      dataIndex: ['major', 'id'],
      align: 'center',
    },
    {
      title: 'Tình trạng',
      align: 'center',
      render: (text, record, index) => tagStatus(record.status),
    },
    {
      title: 'Tùy chọn',
      align: 'center',
      render: (e, record, index) => (
        <Space size={10} key={index}>
          <Tooltip title='Chỉnh sửa'>
            <Button
              className='flex justify-center items-center text-md shadow-md'
              icon={<EditOutlined />}
              onClick={() => {
                setDataStudent(record);
                setOpenModalFormStudent(true);
                setDisabled(true);
              }}
            ></Button>
          </Tooltip>
          <Tooltip title='Xóa'>
            <Popconfirm
              title='Bạn có chắc chắn muốn xóa sinh viên này ?'
              icon={<DeleteOutlined />}
              okText='Xóa'
              okType='danger'
              onConfirm={() => handleConfirmDeleteStudent(record.id)}
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
    <div>
      <div className='flex justify-between items-center mb-3 relative'>
        <Button
          className='flex justify-center items-center'
          icon={<UsergroupDeleteOutlined />}
          type='primary'
          disabled={!hasSelected}
          onClick={handleDeleteListStudent}
          loading={loadingBtnDeleteListStudent}
        >
          Xóa
        </Button>
        <Text
          style={{
            position: 'absolute',
            left: 120,
            opacity: 0.5,
          }}
        >
          {hasSelected ? `Đã chọn ${selectedRowKeys.length} sinh viên` : ''}
        </Text>
        <Space className='ml-10'>
          <Tooltip title='Tìm kiếm sinh viên'>
            <Input
              prefix={<SearchOutlined className='opacity-60 mr-1' />}
              placeholder='Nhập mã sinh viên'
              className='shadow-sm w-[230px]'
              onChange={(e) => {
                setValueSearchStudent(e.target.value);
                setPageCurrent(1);
              }}
              value={valueSearchStudent}
            />
          </Tooltip>
          <Popover placement='bottom' content={<ContentPopover setValuesFilter={(values) => setValuesFilter(values)} />} trigger='click'>
            <Button icon={<FilterOutlined />} className='flex justify-center items-center text-md font-medium shadow-md bg-slate-100'>
              Lọc
            </Button>
          </Popover>
        </Space>
        <Title level={3} style={{ textTransform: 'uppercase', marginBottom: 0 }}>
          Danh sách sinh viên khoa
        </Title>
        <Space size={8}>
          <Upload>
            <Button className='flex justify-center items-center text-md font-medium shadow-md bg-slate-100' icon={<UploadOutlined />}>
              Thêm danh sách sinh viên
            </Button>
          </Upload>
          <Button
            icon={<UserAddOutlined />}
            onClick={() => setOpenModalFormStudent(true)}
            className='flex justify-center items-center text-md font-medium shadow-md bg-slate-100'
          >
            Thêm sinh viên
          </Button>
        </Space>
      </div>
      <div className='relative'>
        <Table
          rowKey='id'
          loading={loadingTable}
          rowSelection={{
            onChange: (e, record) => setSelectedRowKeys(record.map((data) => data.id)),
          }}
          bordered={true}
          dataSource={dataSource}
          columns={columns}
          pagination={{
            onChange: (page, size) => {
              setPageSize(size);
              setPageCurrent(page);
            },
            defaultCurrent: 1,
            pageSize: pageSize,
            total: totalStudent,
            current: pageCurrent,
            showSizeChanger: true,
          }}
        />
        <Button
          onClick={exportDataFileExcel}
          icon={<DownloadOutlined />}
          className='flex justify-center items-center absolute bottom-5 left-0 text-md font-medium shadow-md bg-slate-100'
        >
          Xuất danh sách sinh viên
        </Button>
      </div>
      <ModalFormStudentInfo
        onSuccess={() => {
          handleGetDataStudentList();
          setOpenModalFormStudent(false);
        }}
        dataStudent={dataStudent}
        openForm={openModalFormUser}
        onChangeClickOpen={(open) => {
          if (!open) {
            setDataStudent({});
            setOpenModalFormStudent(false);
            setDisabled(false);
          }
        }}
        disabled={disabled}
      />
      <Drawer size='large' open={openDrawerInfo} onClose={() => setOpenDrawerInfo(false)} placement='right'>
        <Collapse accordion>
          <Panel header='Thông tin sinh viên' key='1'>
            <DescriptionInfoStudent dataStudent={dataStudent} />
          </Panel>
          <Panel header='Điểm học tập' key='2'>
            <Collapse accordion>
              <Panel header='Hệ 10' key='3'>
                <ColumnDataMedCore10 dataStudent={dataStudent} />
              </Panel>
              <Panel header='Hệ 4' key='4'>
                <ColumnDataMedCore4 dataStudent={dataStudent} />
              </Panel>
            </Collapse>
          </Panel>
          <Panel header='Điểm rèn luyện' key='5'>
            <ColumnPointTraining dataStudent={dataStudent} />
          </Panel>
          <Panel header='Quá trình học tập' key='6'>
            <ProgressCredits dataStudent={dataStudent} />
          </Panel>
        </Collapse>
      </Drawer>
    </div>
  );
}

export default AdminListStudentPage;