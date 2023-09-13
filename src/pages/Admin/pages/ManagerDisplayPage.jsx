import {
  DeleteFilled,
  DeleteOutlined,
  DownloadOutlined,
  EditOutlined,
  FilterOutlined,
  MoreOutlined,
  SearchOutlined,
  SolutionOutlined,
  UploadOutlined,
  UserAddOutlined,
  UsergroupDeleteOutlined,
} from '@ant-design/icons';
import { useMutation, useQuery } from '@tanstack/react-query';
import { Button, Drawer, Input, Popconfirm, Popover, Space, Table, Tooltip, Typography, Upload } from 'antd';
import Cookies from 'js-cookie';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDebounce } from 'use-debounce';
import { adminStudentApi } from '../../../API/admin/adminStudentApi';
import { ButtonCustom } from '../../../components/Button';
import { notificationError, notificationSuccess } from '../../../components/Notification';
import { setOpen } from '../../../redux/Popover/popoverStudentFiller';
import {
  deleteStudent,
  setDataStudentList,
  setPageCurrent,
  setPageSize,
  setStudentId,
  setTotal,
} from '../../../redux/Student/studentSilce';
import { addStudent } from '../../../redux/Trash/studentTrashSlice';
import { CollapsePointStudent } from '../components/Collapse';
import { ModalFormStudentInfo, ModalTrashCanStudent } from '../components/Modal';
import { ContentPopoverStudent } from '../components/Popover';

function ManagerDisplayPage() {
  const { Title } = Typography;
  const dispatch = useDispatch();
  const token = Cookies.get('access_token');
  const studentList = useSelector((state) => state.studentList.studentList);
  const total = useSelector((state) => state.studentList.total);
  const pageCurrent = useSelector((state) => state.studentList.pageCurrent);
  const valueFilter = useSelector((state) => state.studentList.filer);
  const studentId = useSelector((state) => state.studentList.studentId);
  const pageSize = useSelector((state) => state.studentList.pageSize);
  const openPopover = useSelector((state) => state.popoverStudentFiller.open);
  const [disabled, setDisabled] = useState(false);
  const [openDrawerInfo, setOpenDrawerInfo] = useState(false);
  const [loadingBtnImport, setLoadingBtnImport] = useState(false);
  const [openModalFormUser, setOpenModalFormStudent] = useState(false);
  const [openModalTrush, setOpenModalTrush] = useState(false);
  const [dataStudent, setDataStudent] = useState({});
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [valueSearchStudent, setValueSearchStudent] = useState('');

  // Handle call get dataStudent
  const [id] = useDebounce(valueSearchStudent, 750);
  dispatch(setStudentId(id));
  const getStudentList = useQuery({
    cacheTime: 10 * 60 * 1000,
    keepPreviousData: true,
    queryKey: ['studentList', pageSize, pageCurrent, studentId, valueFilter],
    queryFn: async () => {
      try {
        const res = await adminStudentApi.getAllStudent({
          studentId: studentId,
          page: pageCurrent,
          size: pageSize,
          filter: valueFilter,
        });
        if (res) return res;
      } catch (error) {}
    },
    onSuccess: (data) => {
      if (data) {
        dispatch(setTotal(data.data.total));
        dispatch(setDataStudentList(data.data.items));
      }
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
        notificationSuccess('Xóa thành công');
        dispatch(deleteStudent(data.data.student));
        dispatch(addStudent(data.data));
      }
    },
    onError: (data) => {
      notificationError(data?.data?.data);
    },
  });

  // Export File Data List Student
  const exportStudentFormExcel = useMutation({
    mutationKey: ['exportFileDataStudent'],
    mutationFn: async () => {
      try {
        const res = await adminStudentApi.exportStudentList({ studentId: studentId, filter: valueFilter });
        if (res) return res;
      } catch (error) {}
    },
    onSuccess: (data) => {
      if (data && data.success === true) {
        window.open(data.data);
        notificationSuccess('Đã xuất file excel thành công hãy kiểm tra trong máy của bạn nhé ');
      }
    },
    onError: (data) => {
      notificationError('Có lỗi trong quá trình lưu file');
    },
  });
  // ====================================
  const handleChangePaginationTable = (page, size) => {
    dispatch(setPageSize(size));
    dispatch(setPageCurrent(page));
  };
  const handleClickBtnEditStudent = (record) => {
    setDataStudent(record);
    setOpenModalFormStudent(true);
    setDisabled(true);
  };
  const handleClickBtnShowDetailStudent = (record) => {
    setDataStudent(record);
    setOpenDrawerInfo(true);
  };
  const handleClickBtnExportFileStudentList = () => {
    exportStudentFormExcel.mutate();
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
    setOpenModalFormStudent(true);
  };
  const handleClickBtnCloseDrawerDetailStudent = () => {
    setOpenDrawerInfo(false);
    setDataStudent({});
  };
  const handleClickBtnTrush = () => {
    setOpenModalTrush(true);
  };
  const handleChangeRowSelection = (e, record) => setSelectedRowKeys(record.map((data) => data.id));
  // ====================================
  const props = {
    name: 'file',
    multiple: false,
    action: 'http://localhost:8080/admin/student/import',
    showUploadList: false,
    headers: {
      Authorization: token ? `Bearer ${token}` : undefined,
    },
    onChange(info) {
      const { response, status } = info.file;
      if (response?.success === true) {
        notificationSuccess(`Upload ${info.file.name} thành công`);
      } else if (response?.success === false) {
        notificationError(response?.error?.message);
      }
      if (status === 'done') {
        setLoadingBtnImport(false);
      } else if (status === 'uploading') {
        setLoadingBtnImport(true);
      }
    },
    beforeUpload: (file) => {
      const checkSize = file.size / 1024 / 1024 < 5;
      const isXLXS = file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
      if (!isXLXS) {
        notificationError(`${file.name} không phải là một file excel`);
        return false;
      }
      if (!checkSize) {
        notificationError(`File tải lên không được quá 5MB`);
        return false;
      }
      return true;
    },
  };

  const columns = [
    {
      title: 'Họ đệm',
      align: 'center',
      dataIndex: 'surname',
    },
    {
      title: 'Tên',
      align: 'center',
      dataIndex: 'lastName',
    },
    {
      title: 'Mã sinh viên',
      dataIndex: 'id',
      align: 'center',
    },
    {
      title: 'Khóa',
      dataIndex: ['course', 'name'],
      align: 'center',
    },
    {
      title: 'Lớp',
      dataIndex: ['classes', 'name'],
      align: 'center',
      width: '15%',
    },
    {
      title: 'Ngành',
      dataIndex: ['major', 'name'],
      width: '20%',
    },
    {
      title: 'Số điện thoại',
      dataIndex: 'phoneNumber',
      align: 'center',
    },
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
                title='Xóa sinh viên'
                description={`Bạn có chắc chắn muốn xóa sinh viên ${record.surname} ${record.lastName} ?`}
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

          <Space>
            <Tooltip title='Tìm kiếm sinh viên'>
              <Input
                prefix={<SearchOutlined className='opacity-60 mr-1' />}
                placeholder='Nhập mã sinh viên'
                className='shadow-sm w-[250px]'
                onChange={handleChangeInputStudentId}
                value={valueSearchStudent}
              />
            </Tooltip>
            <Popover
              placement='bottom'
              content={<ContentPopoverStudent />}
              trigger='click'
              open={openPopover}
              onOpenChange={(open) => dispatch(setOpen(open))}
            >
              <Button className='flex justify-center items-center bg-white' icon={<FilterOutlined />}>
                Lọc
              </Button>
            </Popover>
          </Space>
        </Space>
        <Title className='hidden xl:block' level={3} style={{ textTransform: 'uppercase', marginBottom: 0 }}>
          Danh sách sinh viên khoa
        </Title>
        <Space size={8}>
          <ButtonCustom title='Thùng rác' icon={<DeleteFilled />} handleClick={handleClickBtnTrush} />
          <Upload {...props}>
            <ButtonCustom title='Thêm danh sách sinh viên' icon={<UploadOutlined />} loading={loadingBtnImport} />
          </Upload>
          <ButtonCustom title='Thêm sinh viên' icon={<UserAddOutlined />} handleClick={handleClickBtnAddStudent} />
        </Space>
      </div>
      <div className='relative'>
        <Table
          scroll={{
            y: 630,
          }}
          rowKey='id'
          loading={getStudentList.isFetching}
          rowSelection={{
            onChange: handleChangeRowSelection,
          }}
          bordered={true}
          dataSource={studentList}
          columns={columns}
          pagination={{
            onChange: handleChangePaginationTable,
            defaultCurrent: 1,
            pageSize: pageSize,
            total: total,
            current: pageCurrent,
            showSizeChanger: true,
            pageSizeOptions: [10, 50, 100, 200],
          }}
        />
        {/* {data?.data?.items && ( */}
        <div className='absolute bottom-0 left-0'>
          <ButtonCustom
            title='Xuất danh sách sinh viên'
            loading={exportStudentFormExcel.isLoading}
            handleClick={handleClickBtnExportFileStudentList}
            icon={<DownloadOutlined />}
          />
        </div>
        {/* )} */}
      </div>
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
            setDisabled(false);
          }
        }}
        disabled={disabled}
      />
      <ModalTrashCanStudent open={openModalTrush} close={() => setOpenModalTrush(false)} />
      <Drawer size='large' open={openDrawerInfo} onClose={handleClickBtnCloseDrawerDetailStudent} placement='right'>
        <CollapsePointStudent dataStudent={dataStudent} />
      </Drawer>
    </div>
  );
}

export default ManagerDisplayPage;
