import { Table, message } from 'antd';
import React, { useEffect, useState } from 'react';
import { getListStudent } from '../../../../../../API/axios';

function TableStudentClass({ dataClass }) {
  console.log(dataClass);
  const classId = dataClass.id;
  const [loadingTable, setLoadingTable] = useState(false);
  const [pageCurrent, setPageCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalStudent, setTotalStudent] = useState(0);
  const [dataSource, setDataSource] = useState([]);
  const handleGetStudentListClass = () => {
    getListStudent({ studentId: '', page: pageCurrent, size: pageSize, filter: { classId: classId } })
      .then((res) => {
        if (res.data.success === true) {
          setDataSource(res.data?.data?.items);
          setTotalStudent(res.data?.data?.total);
          setLoadingTable(false);
        }
      })
      .catch((err) => message.error(err))
      .finally(() => setLoadingTable(false));
  };

  useEffect(() => {
    handleGetStudentListClass();
    setLoadingTable(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [classId, pageCurrent, pageSize]);
  const columns = [
    {
      title: 'MSV',
      dataIndex: 'id',
      align: 'center',
    },
    {
      title: 'Họ và tên',
      dataIndex: 'name',
      align: 'center',
    },
  ];
  return (
    <div>
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
          total: totalStudent,
          current: pageCurrent,
          showSizeChanger: true,
        }}
      />
    </div>
  );
}

export default TableStudentClass;
