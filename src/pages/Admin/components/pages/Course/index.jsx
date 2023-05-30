import { DeleteOutlined, EditOutlined, PlusCircleOutlined, ReloadOutlined, SearchOutlined, SolutionOutlined } from '@ant-design/icons';
import { Button, Collapse, Drawer, Input, Popconfirm, Space, Table, Tooltip, Typography, message } from 'antd';
import React, { useEffect, useState } from 'react';
import { deleteCourse, getCourseList } from '../../../../../API/axios';
import ColumnDataCourse from './components/ColumnDataCourse';
import ModalFormCourse from './components/ModalFormCourse';
import PieDataCourse from './components/PieDataCourse';
import { useDebounce } from 'use-debounce';
function AdminCoursePage(props) {
  const { Panel } = Collapse;
  const { Title } = Typography;
  const [openDrawer, setOpenDrawer] = useState(false);
  const [loadingTable, setLoadingTable] = useState(false);
  const [openModalFormCourse, setOpenModalFormCourse] = useState(false);
  const [valueSearchCourse, setValueSearchCourse] = useState('');
  const [data, setData] = useState([]);
  const [dataSource, setDataCourse] = useState({});
  const [pageSize, setPageSize] = useState(10);
  const [pageCurrent, setPageCurrent] = useState(1);
  const [totalCourse, setTotalCourse] = useState(0);

  // Handle get Course Data
  const debunceValue = useDebounce(valueSearchCourse, 750);
  const courseId = debunceValue[0];
  const handleGetCourseData = () => {
    setLoadingTable(true);
    getCourseList({ id: courseId, page: pageCurrent, size: pageSize })
      .then((res) => {
        if (res.data.success === true) {
          setData(res.data?.data?.items);
          setTotalCourse(res.data?.data?.total);
          setLoadingTable(false);
        } else if (res.data?.error?.message === 'Access is denied') {
          message.warning('Bạn không có quyền truy cập');
        } else return message.error(res.data?.error?.message);
      })
      .finally(() => setLoadingTable(false));
  };
  useEffect(() => {
    handleGetCourseData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageCurrent, pageSize, courseId]);

  // Handle Confirm Delete Course
  const handleConfirmDeleteCourse = (id) => {
    setLoadingTable(true);
    deleteCourse(id)
      .then((res) => {
        if (res.data?.success === true) {
          handleGetCourseData();
          message.success(`Xóa khóa ${id} thành công`);
        } else return message.error(res.data?.error?.message);
      })
      .finally(() => setLoadingTable(false));
  };

  const columns = [
    {
      title: 'Mã khóa',
      dataIndex: 'id',
      align: 'center',
      key: 'id',
    },
    {
      title: 'Tên khóa',
      dataIndex: 'name',
      align: 'center',
      key: 'name',
    },
    {
      title: 'Tổng số sinh viên',
      dataIndex: 'numOfStu',
      align: 'center',
      key: 'numOfStu',
    },
    {
      title: 'Tùy chọn',
      align: 'center',
      render: (e, record, index) => (
        <Space size={16} key={index}>
          <Tooltip title='Chỉnh sửa'>
            <Button
              className='flex justify-center items-center text-md shadow-md'
              icon={<EditOutlined />}
              onClick={() => {
                setOpenModalFormCourse(true);
                setDataCourse(record);
              }}
            ></Button>
          </Tooltip>
          <Tooltip title='Xóa'>
            <Popconfirm
              title={`Bạn có chắc chắn muốn xóa ${record.name} ?`}
              icon={<DeleteOutlined />}
              okText='Xóa'
              okType='danger'
              onConfirm={handleConfirmDeleteCourse}
            >
              <Button className='flex justify-center items-center text-md shadow-md' icon={<DeleteOutlined />}></Button>
            </Popconfirm>
          </Tooltip>
          <Tooltip title='Xem chi tiết'>
            <Button
              className='flex justify-center items-center text-md shadow-md'
              icon={<SolutionOutlined />}
              onClick={() => {
                setDataCourse(record);
                setOpenDrawer(true);
              }}
            ></Button>
          </Tooltip>
        </Space>
      ),
    },
  ];
  return (
    <div>
      <div className='flex justify-between items-center mb-3'>
        <Tooltip title='Tìm kiếm khóa'>
          <Input
            prefix={<SearchOutlined className='opacity-60 mr-1' />}
            placeholder='Nhập mã khóa'
            className='shadow-sm w-[230px]'
            onChange={(e) => setValueSearchCourse(e.target.value)}
            value={valueSearchCourse}
          />
        </Tooltip>
        <Title style={{ textAlign: 'center', textTransform: 'uppercase', marginBottom: 0 }} level={3}>
          Quản lí khóa
        </Title>
        <Space>
          <Button
            type='default'
            icon={<ReloadOutlined />}
            onClick={() => {
              setPageCurrent(1);
            }}
            className='flex justify-center items-center bg-white shadow-lg font-medium'
          >
            Cập nhật
          </Button>
          <Button
            icon={<PlusCircleOutlined />}
            onClick={() => setOpenModalFormCourse(true)}
            className='flex justify-center items-center bg-white shadow-lg font-medium'
          >
            Thêm khóa
          </Button>
        </Space>
      </div>
      {data && (
        <Table
          rowKey={'id'}
          loading={loadingTable}
          bordered={true}
          dataSource={data}
          columns={columns}
          pagination={{
            onChange: (page, size) => {
              setPageCurrent(page);
              setPageSize(size);
            },
            defaultCurrent: 1,
            pageSize: pageSize,
            total: totalCourse,
            current: pageCurrent,
            showSizeChanger: true,
          }}
        />
      )}
      <ModalFormCourse
        onSuccess={() => {
          setOpenModalFormCourse(false);
        }}
        dataCourse={dataSource}
        openForm={openModalFormCourse}
        onChangeClickOpen={(open) => {
          if (!open) {
            setDataCourse({});
            setOpenModalFormCourse(false);
          }
        }}
      />
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)} placement='right' size='large'>
        <Collapse accordion>
          <Panel header='Điểm rèn luyện' key='1'>
            <PieDataCourse dataCourse={dataSource} />
          </Panel>
          <Panel header='Số lượng sinh viên' key='2'>
            <ColumnDataCourse dataCourse={dataSource} />
          </Panel>
        </Collapse>
      </Drawer>
    </div>
  );
}

export default AdminCoursePage;
