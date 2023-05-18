import { Image } from 'antd';
import React from 'react';
import LogoPageAdmin from '../../../../../assets/img/Logo/LogoPageAdmin.png';
function Home(props) {
  return (
    <div className='flex justify-center items-center'>
      <Image src={LogoPageAdmin} style={{ width: 620 }} preview={false}></Image>
    </div>
  );
}

export default Home;
