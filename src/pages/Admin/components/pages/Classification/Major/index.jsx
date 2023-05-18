import { DeleteOutlined, PieChartOutlined, SearchOutlined, UserAddOutlined } from '@ant-design/icons';
import { Button, Input, Modal, Popconfirm, Space, Table, Tooltip, Typography, message } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import { deleteClassificationsForCourse, getClassificationsForCourse } from '../../../../../../API/axios';
import ModalFormClassifiMajor from './components/ModalFormClassifiMajor';
import PieDataMajor from './components/PieDataMajor';

function Majorclassification(props) {
  const { Title } = Typography;
  const [loadingTable, setLoadingTable] = useState(false);
  const [totalClassification, setTotalClassification] = useState(0);
  const [pageCurrent, setPageCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [openFormModal, setOpenFormModal] = useState(false);
  const [dataIndex, setDataIndex] = useState({});
  const [dataSource, setDataSource] = useState([]);
  const [valueCourse, setValueCourse] = useState('');
  const [valueTermId, setValueTermId] = useState('');
  const [dataPie, setDataPie] = useState({});
  const [openChart, setOpenChart] = useState(false);

  //   handle get data table classification
  const debounceCousreId = useDebounce(valueCourse, 750);
  const debounceTermId = useDebounce(valueTermId, 750);
  const courseId = debounceCousreId[0];
  const termId = debounceTermId[0];
  const handleGetDataClassification = () => {
    setLoadingTable(true);
    getClassificationsForCourse({ courseId: courseId, termId: termId, page: pageCurrent, size: pageSize })
      .then((res) => {
        if (res.data?.success === true) {
          setDataSource(res.data?.data?.items);
          setTotalClassification(res.data?.data?.total);
          setLoadingTable(false);
        } else if (res.data?.error?.message === 'Access is denied') {
          message.warning('Bạn không có quyền truy cập');
        } else return message.error(res.data?.error?.message);
      })
      .finally(() => setLoadingTable(false));
  };
  const handleConfirmDeleteData = (courseId, termId) => {
    setLoadingTable(true);
    deleteClassificationsForCourse({ courseId: courseId, termId: termId })
      .then((res) => {
        if (res.data?.success === true) {
          handleGetDataClassification();
          message.success('Xóa thành công');
        } else return message.error(res.data?.error?.message);
      })
      .finally(() => setLoadingTable(false));
  };
  useEffect(() => {
    handleGetDataClassification();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [courseId, termId, pageCurrent, pageSize]);

  const columns = [
    {
      title: 'Mã khóa',
      align: 'center',
      dataIndex: 'courseId',
      key: 'courseId',
    },
    {
      title: 'Mã học kỳ',
      align: 'center',
      dataIndex: 'termId',
      key: 'termId',
    },
    {
      title: 'Hạnh kiểm xuất sắc',
      align: 'center',
      dataIndex: 'excellent',
      key: 'excellent',
    },
    {
      title: 'Hạnh kiểm tốt',
      align: 'center',
      dataIndex: 'good',
      key: 'good',
    },
    {
      title: 'Hạnh kiểm khá',
      align: 'center',
      dataIndex: 'fair',
      key: 'fair',
    },
    {
      title: 'Hạnh kiểm trung bình',
      align: 'center',
      dataIndex: 'medium',
      key: 'medium',
    },
    {
      title: 'Hạnh kiểm yếu',
      align: 'center',
      dataIndex: 'weak',
      key: 'weak',
    },
    {
      title: 'Hạnh kiểm kém',
      align: 'center',
      dataIndex: 'worst',
      key: 'worst',
    },
    {
      title: 'Tùy chọn',
      align: 'center',
      render: (e, record, index) => (
        <Space size={10} key={index}>
          {/* <Tooltip title='Chỉnh sửa'>
            <Button
              onClick={() => {
                setOpenFormModal(true);
              }}
              className='flex justify-center items-center text-md shadow-md'
              icon={<EditOutlined />}
            ></Button>
          </Tooltip> */}
          <Tooltip title='Xóa'>
            <Popconfirm
              title='Bạn có chắc chắn muốn xóa ?'
              icon={<DeleteOutlined />}
              okText='Xóa'
              okType='danger'
              onConfirm={() => handleConfirmDeleteData(record.courseId, record.termId)}
            >
              <Button className='flex justify-center items-center text-md shadow-md' icon={<DeleteOutlined />}></Button>
            </Popconfirm>
          </Tooltip>
          <Tooltip title='Xem dưới dạng biểu đồ'>
            <Button
              onClick={() => {
                setDataPie(record);
                setOpenChart(true);
              }}
              className='flex justify-center items-center text-md shadow-md'
              icon={<PieChartOutlined />}
            ></Button>
          </Tooltip>
        </Space>
      ),
    },
  ];
  return (
    <div>
      <div className='relative mb-3'>
        <Space
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        >
          <Input
            prefix={<SearchOutlined className='opacity-50 mr-1' />}
            value={valueCourse}
            placeholder='Nhập mã khóa'
            className='flex justify-center items-center text-md shadow-md w-[230px]'
            onChange={(e) => setValueCourse(e.target.value)}
          />
          <Input
            value={valueTermId}
            placeholder='Nhập mã học kỳ'
            className='flex justify-center items-center text-md shadow-md w-[230px]'
            onChange={(e) => setValueTermId(e.target.value)}
          />
        </Space>
        <Title
          level={3}
          style={{
            textTransform: 'uppercase',
            textAlign: 'center',
            marginBottom: 0,
          }}
        >
          Danh sách xếp loại theo khóa
        </Title>
        <Button
          icon={<UserAddOutlined />}
          onClick={() => {
            setOpenFormModal(true);
          }}
          className='flex justify-center items-center text-md font-medium shadow-md bg-slate-100 absolute right-0 top-0'
        >
          Thêm xếp loại
        </Button>
      </div>
      <Table
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
          total: totalClassification,
          current: pageCurrent,
          showSizeChanger: true,
        }}
      />
      <ModalFormClassifiMajor
        onSuccess={() => {
          handleGetDataClassification();
          setOpenFormModal(false);
        }}
        openForm={openFormModal}
        onChangeClickOpen={(open) => {
          if (!open) {
            setDataIndex({});
            setOpenFormModal(false);
          }
        }}
        dataIndex={dataIndex}
      />
      <Modal
        width={800}
        centered
        title='Thống kê xếp loại theo kì'
        open={openChart}
        okText='Ok'
        onOk={() => setOpenChart(false)}
        onCancel={() => {
          setDataPie({});
          setOpenChart(false);
        }}
        cancelButtonProps={{
          style: { display: 'none' },
        }}
      >
        <PieDataMajor dataPie={dataPie} />
      </Modal>
    </div>
  );
}

export default Majorclassification;
