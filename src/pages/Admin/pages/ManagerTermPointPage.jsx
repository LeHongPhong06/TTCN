import {
  DeleteFilled,
  DeleteOutlined,
  DownloadOutlined,
  EditOutlined,
  FilterOutlined,
  MoreOutlined,
  PlusCircleOutlined,
  SearchOutlined,
  UploadOutlined,
  UsergroupDeleteOutlined,
} from '@ant-design/icons';
import { useMutation, useQuery } from '@tanstack/react-query';
import { Button, Input, Popconfirm, Popover, Space, Table, Typography, Upload, notification } from 'antd';
import Cookies from 'js-cookie';
import React, { useState } from 'react';
import { useDebounce } from 'use-debounce';
import { adminPointApi } from '../../../API/admin/adminPointApi';
import { ButtonCustom } from '../../../components/Button';
import { notificationSuccess } from '../../../components/Notification';
import { ModalFormPoint, ModalTrashCanPoint } from '../components/Modal';
import { ContentPopoverPoint } from '../components/Popover';
import { useDispatch, useSelector } from 'react-redux';
import {
  setStudentId,
  setTermId,
  setDataPointList,
  setTotal,
  setPageCurrent,
  setPageSize,
  deletePoint,
} from '../../../redux/Point/pointSlice';
import { addPoint } from '../../../redux/Trash/pointTrashSilce';

function ManagerTermPointPage() {
  const { Title } = Typography;
  const jwt = Cookies.get('jwt');
  const dispatch = useDispatch();
  const pointList = useSelector((state) => state.pointList.pointList);
  const studentId = useSelector((state) => state.pointList.studentId);
  const termId = useSelector((state) => state.pointList.termId);
  const total = useSelector((state) => state.pointList.total);
  const pageCurrent = useSelector((state) => state.pointList.pageCurrent);
  const pageSize = useSelector((state) => state.pointList.pageSize);
  const valueFilter = useSelector((state) => state.pointList.filer);
  const [disabled, setDisabled] = useState(false);
  const [openModalFormPoint, setOpenModalFormPoint] = useState(false);
  const [openModalTrush, setOpenModalTrush] = useState(false);
  const [loadingBtnImportPoint, setLoadingBtnImportPoint] = useState(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [dataPoint, setDataPoint] = useState({});
  const [valueSearchTermId, setValueSearchTermId] = useState('');
  const [valueSearchStudentId, setValueSearchStudentId] = useState('');
  const [termIdValue] = useDebounce(valueSearchTermId, 750);
  const [studentIdValue] = useDebounce(valueSearchStudentId, 750);
  dispatch(setStudentId(studentIdValue));
  dispatch(setTermId(termIdValue));

  // Handle get data points
  const getDataPoint = useQuery({
    cacheTime: 5 * 60 * 5000,
    keepPreviousData: true,
    queryKey: ['pointTermList', studentId, termId, pageCurrent, pageSize, valueFilter],
    queryFn: async () => {
      try {
        const res = await adminPointApi.getAllPoint({
          studentId: studentId,
          termId: termId,
          page: pageCurrent,
          size: pageSize,
          filter: valueFilter,
        });
        if (res) return res;
      } catch (error) {}
    },
    onSuccess: (data) => {
      if (data && data.success === true) {
        dispatch(setDataPointList(data.data.items));
        dispatch(setTotal(data.data.total));
      }
    },
    onError: (err) => {},
  });

  // Handle click confirm delete major
  const deletePointTerm = useMutation({
    mutationKeys: ['deletePoint'],
    mutationFn: async (id) => {
      try {
        const res = await adminPointApi.deletePoint(id);
        if (res) return res;
      } catch (error) {}
    },
    onSuccess: (data) => {
      if (data && data.success === true) {
        notificationSuccess('Xóa thành công');
        dispatch(deletePoint(data.data.point));
        dispatch(addPoint(data.data));
      }
    },
  });

  // handle export file data student points
  const exportFileData = useMutation({
    mutationKey: ['exportFileDataPoint'],
    mutationFn: async () => {
      try {
        const res = await adminPointApi.exportPointStudent({
          studentId: studentId,
          termId: termId,
          filter: valueFilter,
        });
        if (res) return res;
      } catch (error) {}
    },
    onSuccess: (data) => {
      notificationSuccess('Đã xuất file excel thành công hãy kiểm tra trong máy của bạn nhé ');
    },
  });

  // ===============================
  const hasSelected = selectedRowKeys.length > 0;
  const handleConfirmDeletePoint = (id) => {
    deletePointTerm.mutate(id);
  };
  const handleExportFileData = () => {
    exportFileData.mutate();
  };
  const handleChangeInputStudentId = (e) => {
    dispatch(setPageCurrent(1));
    setValueSearchStudentId(e.target.value);
  };
  const handleChangeInputTermId = (e) => {
    dispatch(setPageCurrent(1));
    setValueSearchTermId(e.target.value);
  };
  const handleClickAddPointTerm = () => {
    setOpenModalFormPoint(true);
  };
  const handleEditPointTerm = (record) => {
    setDisabled(true);
    setOpenModalFormPoint(true);
    setDataPoint(record);
  };
  const handleClickBtnTrush = () => {
    setOpenModalTrush(true);
  };
  const handleChanePageTable = (page, size) => {
    dispatch(setPageCurrent(page));
    dispatch(setPageSize(size));
  };
  const handleChangeRowSelection = (e, record) => setSelectedRowKeys(record.map((data) => data.id));
  // =================================
  const props = {
    name: 'file',
    multiple: false,
    action: `${process.env.BASE_URL_API}/admin/point/import`,
    showUploadList: false,
    headers: {
      Authorization: jwt ? `Bearer ${jwt}` : undefined,
    },
    onChange(info) {
      const { response, status } = info.file;
      if (response?.success === true) {
        notification.success({
          placement: 'topRight',
          message: 'Thành công',
          description: `Upload ${info.file.name} thành công`,
          duration: 4,
        });
      } else if (response?.success === false) {
        notification.error({
          placement: 'topRight',
          message: 'Thất bại',
          description: response?.error?.message,
          duration: 4,
        });
      }
      if (status === 'done') {
        setLoadingBtnImportPoint(false);
      } else if (status === 'uploading') {
        setLoadingBtnImportPoint(true);
      }
    },
    beforeUpload: (file) => {
      const checkSize = file.size / 1024 / 1024 < 5;
      const isXLXS = file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
      if (!isXLXS) {
        notification.error({
          message: 'Thất bại',
          description: `${file.name} không phải là một file excel`,
          duration: 3,
          placement: 'topRight',
        });
        return false;
      }
      if (!checkSize) {
        notification.error({
          message: 'Thất bại',
          description: `File tải lên không được quá 5MB`,
          duration: 3,
          placement: 'topRight',
        });
        return false;
      }
      return true;
    },
  };

  const columns = [
    {
      title: 'Mã sinh viên',
      dataIndex: 'studentId',
      align: 'center',
      key: 'studentId',
    },
    {
      title: 'Họ đệm',
      dataIndex: 'surname',
      align: 'center',
      key: 'surname',
    },
    {
      title: 'Tên',
      dataIndex: 'lastName',
      align: 'center',
      key: 'lastName',
    },
    {
      title: 'Mã học kì',
      dataIndex: 'termId',
      align: 'center',
      key: 'termId',
    },
    {
      title: 'Điểm trung bình (hệ 10)',
      dataIndex: 'avgPoint10',
      align: 'center',
      key: 'avgPoint10',
    },
    {
      title: 'Điểm trung bình (hệ 4)',
      dataIndex: 'avgPoint4',
      align: 'center',
      key: 'avgPoint4',
    },
    {
      title: 'Điểm rèn luyện',
      dataIndex: 'trainingPoint',
      align: 'center',
      key: 'trainingPoint',
    },
    {
      title: 'Tín chỉ tích lũy',
      dataIndex: 'creditsAcc',
      align: 'center',
      key: 'creditsAcc',
    },
    {
      title: 'Điểm trung bình tích lũy (hệ 10)',
      dataIndex: 'pointAcc10',
      align: 'center',
      key: 'pointAcc10',
    },
    {
      title: 'Điểm trung bình tích lũy (hệ 4)',
      dataIndex: 'pointAcc4',
      align: 'center',
      key: 'pointAcc4',
    },
    {
      align: 'center',
      width: '4%',
      render: (e, record, idx) => (
        <Popover
          key={idx}
          trigger={'click'}
          placement='left'
          content={
            <Space direction='vertical'>
              <ButtonCustom title='Chỉnh sửa' icon={<EditOutlined />} handleClick={() => handleEditPointTerm(record)} />
              <Popconfirm
                title={`Bạn có chắc chắn muốn xóa điểm của sinh viên ${record.studentId} trong học kỳ ${record.termId}`}
                icon={<DeleteOutlined />}
                okText='Xóa'
                okType='danger'
                onConfirm={() => handleConfirmDeletePoint(record.id)}
              >
                <Button
                  danger
                  loading={deletePointTerm.isLoading}
                  className='flex justify-center items-center text-md shadow-md'
                  icon={<DeleteOutlined />}
                >
                  Xóa
                </Button>
              </Popconfirm>
            </Space>
          }
        >
          <Button className='flex items-center justify-center  bg-white' icon={<MoreOutlined />} />
        </Popover>
      ),
    },
  ];
  return (
    <div>
      <div className='flex justify-between items-center mb-3'>
        <Space>
          <ButtonCustom title='Xóa hết' icon={<UsergroupDeleteOutlined />} type='primary' disabled={!hasSelected} />
          <Input
            prefix={<SearchOutlined className='opacity-60 mr-1' />}
            placeholder='Nhập mã sinh viên'
            className='shadow-sm w-[200px]'
            onChange={handleChangeInputStudentId}
            value={valueSearchStudentId}
          />
          <Input
            placeholder='Nhập mã học kì'
            className='shadow-sm w-[200px]'
            onChange={handleChangeInputTermId}
            value={valueSearchTermId}
          />
          <Popover placement='bottom' content={<ContentPopoverPoint />} trigger='click'>
            <Button
              icon={<FilterOutlined />}
              className='flex justify-center items-center text-md font-medium shadow-md bg-slate-100'
            >
              Lọc
            </Button>
          </Popover>
        </Space>
        <Title style={{ textAlign: 'center', textTransform: 'uppercase', marginBottom: 0 }} level={3}>
          Danh sách điểm học kỳ
        </Title>
        <Space>
          <ButtonCustom title='Thùng rác' icon={<DeleteFilled />} handleClick={handleClickBtnTrush} />
          <Upload {...props}>
            <Button
              loading={loadingBtnImportPoint}
              className='flex justify-center items-center text-md font-medium shadow-md bg-slate-100'
              icon={<UploadOutlined />}
            >
              Thêm danh sách điểm
            </Button>
          </Upload>
          <Button
            icon={<PlusCircleOutlined />}
            onClick={handleClickAddPointTerm}
            className='flex justify-center items-center bg-white shadow-lg font-medium'
          >
            {'Thêm điểm ( học kì )'}
          </Button>
        </Space>
      </div>
      <div className='relative'>
        <Table
          scroll={{
            y: 630,
          }}
          rowKey='studentId'
          rowSelection={{
            onChange: handleChangeRowSelection,
          }}
          bordered={true}
          loading={getDataPoint.isFetching}
          dataSource={pointList}
          columns={columns}
          pagination={{
            onChange: handleChanePageTable,
            defaultCurrent: 1,
            pageSize: pageSize,
            total: total,
            current: pageCurrent,
            showSizeChanger: true,
          }}
        />
        {pointList && (
          <div className='absolute bottom-3 left-0'>
            <ButtonCustom
              title='Xuất danh sách điểm'
              loading={exportFileData.isLoading}
              handleClick={handleExportFileData}
              icon={<DownloadOutlined />}
            ></ButtonCustom>
          </div>
        )}
      </div>
      <ModalFormPoint
        onSuccess={() => {
          setOpenModalFormPoint(false);
        }}
        openForm={openModalFormPoint}
        dataPoint={dataPoint}
        onChangeClickOpen={(open) => {
          if (!open) {
            setDataPoint({});
            setDisabled(false);
            setOpenModalFormPoint(false);
          }
        }}
        disabled={disabled}
      />
      <ModalTrashCanPoint open={openModalTrush} close={() => setOpenModalTrush(false)} />
    </div>
  );
}

export default ManagerTermPointPage;
