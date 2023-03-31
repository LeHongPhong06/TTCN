import { Carousel } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import slider1 from '../../../../assets/img/ThumbnailSlider/slider1.png';
import slider2 from '../../../../assets/img/ThumbnailSlider/slider2.png';
import slider3 from '../../../../assets/img/ThumbnailSlider/slider3.png';
function ThumnailSlider(props) {
  return (
    <div>
      <Carousel autoplay>
        <div>
          <div className='h-[250px]'>
            <Link to='' target='_blank'>
              <img className='w-full h-full object-cover' src={slider1} alt='' />
            </Link>
          </div>
        </div>
        <div>
          <div className='h-[250px]'>
            <Link to='' target='_blank'>
              <img className='w-full h-full object-cover' src={slider2} alt='' />
            </Link>
          </div>
        </div>
        <div>
          <div className='h-[250px]'>
            <Link to='' target='_blank'>
              <img className='w-full h-full object-cover' src={slider3} alt='' />
            </Link>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default ThumnailSlider;
