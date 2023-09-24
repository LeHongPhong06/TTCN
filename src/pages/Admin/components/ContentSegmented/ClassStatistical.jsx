import { ProForm, ProFormSelect, ProFormText } from '@ant-design/pro-components';
import { useMutation, useQuery } from '@tanstack/react-query';
import { Space } from 'antd';
import React, { useState } from 'react';
import { adminSemesterApi } from '../../../../API/admin/adminSemesterApi';
import { adminStatistic } from '../../../../API/admin/adminStatistic';
import { ButtonCustom } from '../../../../components/Button/ButtonCustom';

export function ClassStatistical(props) {
  const [dataStatistic, setDataStatistic] = useState();
  const { data } = useQuery({
    cacheTime: 10 * 60 * 1000,
    staleTime: 11 * 60 * 1000,
    queryKey: ['getListTerm'],
    queryFn: async () => await adminSemesterApi.getAllSemester({ page: 1, size: 1000 }),
  });
  const handleSubmit = useMutation({
    mutationKey: ['submit'],
    mutationFn: async (values) => await adminStatistic.getDataStatsticClass(values),
    onSuccess: (res) => {
      if (res && res.success === true) {
        setDataStatistic(res.data);
      }
    },
  });
  const optionsTerm = data?.data?.items?.map((i) => {
    return { label: i.termName, value: i.id };
  });
  const handleClickSubmit = (props) => {
    props.sumit();
  };
  const onFinish = (values) => {
    handleSubmit.mutate(values);
  };
  return (
    <div>
      <div className='flex gap-4'>
        <ProForm
          layout='horizontal'
          onFinish={onFinish}
          submitter={{
            render: (props) => [
              <Space>
                <ButtonCustom
                  title={'Tìm kiếm'}
                  size={'large'}
                  type='primary'
                  handleClick={() => handleClickSubmit(props)}
                />
              </Space>,
            ],
          }}
        >
          <ProForm.Group>
            <ProFormText
              placeholder={'Nhập mã lớp'}
              label='Mã lớp'
              name='termId'
              fieldProps={{
                size: 'large',
              }}
            />
            <ProFormSelect
              placeholder={'Chọn học kì'}
              width={200}
              label='Từ'
              name='fromTerm'
              fieldProps={{
                size: 'large',
              }}
              options={optionsTerm}
            />
            <ProFormSelect
              placeholder={'Chọn học kì'}
              width={200}
              label='Đến'
              name='toTerm'
              fieldProps={{
                size: 'large',
              }}
              options={optionsTerm}
            />
          </ProForm.Group>
        </ProForm>
      </div>
      {dataStatistic &&
        dataStatistic.map((item) => (
          <div>
            <figure></figure>
            <figcaption></figcaption>
          </div>
        ))}
    </div>
  );
}
