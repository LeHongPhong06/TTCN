import {
  EnvironmentOutlined,
  FacebookOutlined,
  InstagramOutlined,
  MailOutlined,
  MessageOutlined,
  PhoneOutlined,
  YoutubeOutlined,
} from '@ant-design/icons';
import { Image, Space, Typography } from 'antd';
import React from 'react';
import logo from '../../../../assets/img/Logo/Logo.png';

function Footer(props) {
  const { Title, Text } = Typography;
  return (
    <div className='bg-green-600 border-t-2 border-lime-200'>
      <div className='max-w-[1100px] mx-auto flex justify-between items-center px-4 py-5'>
        <Image preview={false} width={170} src={logo} alt='logo_page' />
        <div>
          <Title style={{ textTransform: 'uppercase', color: '#fff', margin: 0, fontFamily: 'revert' }} level={3}>
            FACULTY OF INFORMATION TECHNOLOGY
          </Title>
          <Title style={{ fontFamily: 'revert', color: '#fff', textTransform: 'uppercase', margin: 0 }} level={4}>
            VIETNAM NATIONAL UNIVERSITY OF AGRICULTURE - VNUA
          </Title>
          <div>
            <div>
              <EnvironmentOutlined
                style={{
                  marginRight: '10px',
                  color: 'white',
                  fontSize: '18px',
                }}
              />
              <Text style={{ fontSize: '16px', color: '#fff' }}>
                Address: Room 316, 3rd Floor, Administration Building, Hanoi University of Agriculture
              </Text>
            </div>
            <div>
              <PhoneOutlined
                style={{
                  marginRight: '10px',
                  color: 'white',
                  fontSize: '18px',
                }}
              />
              <Text style={{ fontSize: '16px', color: '#fff' }}>(024) 62617701 - (024) 38276554</Text>
            </div>
            <div>
              <MailOutlined
                style={{
                  marginRight: '10px',
                  color: 'white',
                  fontSize: '18px',
                }}
              />
              <Text style={{ fontSize: '16px', color: '#fff' }}>cntt@vnua.edu.vn</Text>
            </div>
          </div>
          <Space size={12} className='mt-3 flex justify-end'>
            <FacebookOutlined style={{ fontSize: '32px', color: '#fff' }} />
            <MessageOutlined style={{ fontSize: '32px', color: '#fff' }} />
            <YoutubeOutlined style={{ fontSize: '32px', color: '#fff' }} />
            <InstagramOutlined style={{ fontSize: '32px', color: '#fff' }} />
          </Space>
        </div>
      </div>
    </div>
  );
}

export default Footer;
