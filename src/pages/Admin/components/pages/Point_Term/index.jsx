import {
  DeleteOutlined,
  DownloadOutlined,
  EditOutlined,
  FilterOutlined,
  PlusCircleOutlined,
  SearchOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import {
  Button,
  Input,
  Popconfirm,
  Popover,
  Space,
  Table,
  Tooltip,
  Typography,
  Upload,
  message,
  notification,
} from 'antd';
import React, { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import { deletePoint, exportPointStudent, getDataPoint } from '../../../../../API/axios';
import { exportExcel } from '../../../../../import-export-data';
import ContentPopover from './components/ContentPopover';
import ModalFormPoint from './components/ModalFormPoint';
import Cookies from 'js-cookie';
import { baseUrl } from '../../../../../API/request';

function AdminPointTermPage() {
  const { Title } = Typography;
  const jwt = Cookies.get('jwt');
  const [disabled, setDisabled] = useState(false);
  const [loadingTable, setLoadingTable] = useState(false);
  const [openModalFormPoint, setOpenModalFormPoint] = useState(false);
  const [loadingBtnExportPoint, setLoadingBtnExportPoint] = useState(false);
  const [loadingBtnImportPoint, setLoadingBtnImportPoint] = useState(false);
  const [dataPoint, setDataPoint] = useState({});
  const [dataSource, setDataSource] = useState([]);
  const [valueFilters, setValueFilters] = useState({});
  const [valueSearchTermId, setValueSearchTermId] = useState('');
  const [valueSearchStudentId, setValueSearchStudentId] = useState('');
  const [pageSize, setPageSize] = useState(10);
  const [pageCurrent, setPageCurrent] = useState(1);
  const [totalPoints, setTotalPoints] = useState(0);

  // Handle click confirm delete major
  const handleConfirmDeletePoint = (values) => {
    setLoadingTable(false);
    deletePoint(values)
      .then((res) => {
        if (res.data?.success === true) {
          message.success(`Xóa điểm học kỳ ${values.termId} có mã sinh viên ${values.studentId} thành công`, 1);
          handleGetDataPointList();
          setLoadingTable(false);
        } else return message.error(res.data?.error?.message);
      })
      .finally(() => setLoadingTable(false));
  };

  // Handle get data points
  const debunceValueStudentId = useDebounce(valueSearchStudentId, 750);
  const debunceValueTermId = useDebounce(valueSearchTermId, 750);
  const studentId = debunceValueStudentId[0];
  const termId = debunceValueTermId[0];
  const handleGetDataPointList = () => {
    setLoadingTable(true);
    getDataPoint({
      studentId: studentId,
      termId: termId,
      page: pageCurrent,
      size: pageSize,
      filter: valueFilters,
    })
      .then((res) => {
        if (res.data.success === true) {
          setDataSource(res.data?.data?.items);
          setTotalPoints(res.data?.data?.total);
          setLoadingTable(false);
        } else if (res.data?.error?.message === 'Access is denied') {
          message.warning('Bạn không có quyền truy cập');
        } else return message.error(res.data?.error.message);
      })
      .finally(() => setLoadingTable(false));
  };
  useEffect(() => {
    handleGetDataPointList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageCurrent, valueFilters, pageSize, studentId, termId]);

  // Export File Data Student Points
  const exportDataFileExcel = () => {
    setLoadingBtnExportPoint(true);
    exportPointStudent({ studentId: studentId, termId: termId, filter: valueFilters })
      .then((res) => {
        if (res.data?.success === true) {
          exportExcel(res.data?.data?.items, 'Sheet1', 'danh-sach-diem');
        } else return message.error(res.data?.error?.message);
      })
      .finally(() => setLoadingBtnExportPoint(false));
  };

  const props = {
    name: 'file',
    multiple: false,
    action: `${baseUrl}`,
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
        handleGetDataPointList();
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
        setLoadingTable(false);
      } else if (status === 'uploading') {
        setLoadingBtnImportPoint(true);
        setLoadingTable(true);
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
      title: 'Họ và tên',
      dataIndex: 'studentName',
      align: 'center',
      key: 'studentName',
    },
    {
      title: 'Mã học kì',
      dataIndex: 'termId',
      align: 'center',
      key: 'termId',
    },
    {
      title: 'Điểm trung bình ( hệ 10 )',
      dataIndex: 'medScore10',
      align: 'center',
      key: 'medScore10',
    },
    {
      title: 'Điểm trung bình ( hệ 4 )',
      dataIndex: 'medScore4',
      align: 'center',
      key: 'medScore4',
    },
    {
      title: 'Điểm rèn luyện',
      dataIndex: 'trainingPoint',
      align: 'center',
      key: 'trainingPoint',
    },
    {
      title: 'Tín chỉ tích lũy',
      dataIndex: 'creditsAccumulated',
      align: 'center',
      key: 'creditsAccumulated',
    },
    {
      title: 'Điểm trung bình tích lũy ( hệ 10 )',
      dataIndex: 'scoreAccumulated10',
      align: 'center',
      key: 'scoreAccumulated10',
    },
    {
      title: 'Điểm trung bình tích lũy ( hệ 4 )',
      dataIndex: 'scoreAccumulated4',
      align: 'center',
      key: 'scoreAccumulated4',
    },
    {
      key: 'options',
      title: 'Tùy chọn',
      align: 'center',
      render: (e, record, idx) => (
        <Space key={idx}>
          <Tooltip title='Chỉnh sửa'>
            <Button
              onClick={() => {
                setDisabled(true);
                setOpenModalFormPoint(true);
                setDataPoint(record);
              }}
              icon={<EditOutlined />}
              className='flex justify-center items-center shadow-xl'
            ></Button>
          </Tooltip>
          <Tooltip title='Xóa'>
            <Popconfirm
              title={`Bạn có chắc chắn muốn xóa điểm của sinh viên ${record.studentId} trong học kỳ ${record.termId}`}
              icon={<DeleteOutlined />}
              okText='Xóa'
              okType='danger'
              onConfirm={() => handleConfirmDeletePoint({ studentId: record.studentId, termId: record.termId })}
            >
              <Button className='flex justify-center items-center text-md shadow-md' icon={<DeleteOutlined />}></Button>
            </Popconfirm>
          </Tooltip>
        </Space>
      ),
    },
  ];
  return (
    <div>
      <div className='flex justify-between items-center mb-3'>
        <Space>
          <Input
            prefix={<SearchOutlined className='opacity-60 mr-1' />}
            placeholder='Nhập mã sinh viên'
            className='shadow-sm w-[200px]'
            onChange={(e) => {
              setPageCurrent(1);
              setValueSearchStudentId(e.target.value);
            }}
            value={valueSearchStudentId}
          />
          <Input
            placeholder='Nhập mã học kì'
            className='shadow-sm w-[200px]'
            onChange={(e) => {
              setPageCurrent(1);
              setValueSearchTermId(e.target.value);
            }}
            value={valueSearchTermId}
          />
          <Popover
            placement='bottom'
            content={
              <ContentPopover
                setPage={(page) => setPageCurrent(page)}
                setValueFilters={(values) => setValueFilters(values)}
              />
            }
            trigger='click'
          >
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
            onClick={() => {
              setOpenModalFormPoint(true);
            }}
            className='flex justify-center items-center bg-white shadow-lg font-medium'
          >
            {'Thêm điểm ( học kì )'}
          </Button>
        </Space>
      </div>
      {dataSource && (
        <div className='relative'>
          <Table
            rowKey='id'
            bordered={true}
            loading={loadingTable}
            dataSource={dataSource}
            columns={columns}
            pagination={{
              onChange: (page, size) => {
                setPageCurrent(page);
                setPageSize(size);
              },
              defaultCurrent: 1,
              pageSize: pageSize,
              total: totalPoints,
              current: pageCurrent,
              showSizeChanger: true,
            }}
          />
          <Button
            loading={loadingBtnExportPoint}
            onClick={exportDataFileExcel}
            icon={<DownloadOutlined />}
            className='flex justify-center items-center absolute bottom-5 left-0 text-md font-medium shadow-md bg-slate-100'
          >
            Xuất danh sách điểm
          </Button>
        </div>
      )}
      <ModalFormPoint
        onSuccess={() => {
          setOpenModalFormPoint(false);
          handleGetDataPointList();
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
    </div>
  );
}

export default AdminPointTermPage;
