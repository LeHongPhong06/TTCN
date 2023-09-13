import { UsergroupAddOutlined } from '@ant-design/icons';
import { Modal, Table } from 'antd';
import { useState } from 'react';
import { ButtonCustom } from '../../../../components/Button';
export const ModalTrashCanAdmin = ({ open, setOpen }) => {
  const [pageSize, setPageSize] = useState(10);
  const [pageCurrent, setPageCurrent] = useState(1);
  const [selectRowKeys, setSelectRowKeys] = useState([]);
  const data = [
    {
      id: 655201,
      name: 'Lê Hồng Phong',
      time: '20/2/2002 15:12:00',
      by: 'Superadmin - Cam Trọng Hiếu',
    },
    {
      id: 655202,
      name: 'Lê Hồng Phong',
      time: '20/2/2002 15:12:00',
      by: 'Superadmin - Cam Trọng Hiếu',
    },
    {
      id: 655203,
      name: 'Lê Hồng Phong',
      time: '20/2/2002 15:12:00',
      by: 'Superadmin - Cam Trọng Hiếu',
    },
  ];
  const columns = [
    {
      title: 'Mã sinh viên',
      dataIndex: 'id',
      align: 'center',
    },
    {
      title: 'Họ Tên',
      dataIndex: 'name',
      align: 'center',
    },
    {
      title: 'Thời gian xóa',
      dataIndex: 'time',
      align: 'center',
    },
    {
      title: 'Người xóa',
      dataIndex: 'by',
      align: 'center',
    },
    {
      title: 'Hành động',
      align: 'center',
      render: (record) => <ButtonCustom title='Khôi phục' />,
    },
  ];
  const handleChangePagination = (page, size) => {
    setPageCurrent(page);
    setPageSize(size);
  };
  const handleClickRestoreAll = () => {};
  const hasDisabled = selectRowKeys.length > 0;
  return (
    <>
      <Modal
        title='Thùng rác'
        width={1000}
        maskClosable={false}
        open={open}
        onOk={setOpen}
        onCancel={setOpen}
        okText='Xong'
        cancelButtonProps={{
          hidden: true,
        }}
      >
        <ButtonCustom
          title='Khôi phục tất cả'
          icon={<UsergroupAddOutlined />}
          disabled={!hasDisabled}
          handleClick={handleClickRestoreAll}
        />
        <Table
          rowSelection={{
            onChange: (e, record) => setSelectRowKeys(record.map((data) => data.id)),
          }}
          dataSource={data}
          columns={columns}
          pagination={{
            onChange: handleChangePagination,
            defaultCurrent: 1,
            current: pageCurrent,
            pageSize: pageSize,
            showSizeChanger: true,
          }}
        />
      </Modal>
    </>
  );
};
