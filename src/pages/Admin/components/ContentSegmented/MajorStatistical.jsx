import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import React from 'react';
import { useState } from 'react';

export function MajorStatistical(props) {
  const [loadingBtnSearch, setLoadingBtnSearch] = useState(false);
  const { Search } = Input;
  const handleSearchEnter = (value) => {
    setLoadingBtnSearch(true);
  };
  return (
    <div>
      <Search
        size='large'
        loading={loadingBtnSearch}
        placeholder='Nhập mã ngành'
        className='w-[380px]'
        enterButton={'Tìm kiếm'}
        onSearch={handleSearchEnter}
        prefix={<SearchOutlined className='mr-2' />}
      />
      <div>
        <figure></figure>
        <figcaption></figcaption>
      </div>
    </div>
  );
}
