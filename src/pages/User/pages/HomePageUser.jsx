import { Image } from 'antd';
import React from 'react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Rectangle from '../../../assets/img/Rectangle.png';
import sodophonghoc from '../../../assets/img/sodophonghoc.png';
import '../../../assets/styles/swiperCard.css';
import { DefaultLayoutPage } from '../components/Layout/DefaultLayoutPage';
import { SlideShowHeader } from '../components/Slider';

export const urlImage = [
  {
    url: 'https://images.unsplash.com/photo-1604580864964-0462f5d5b1a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGlzdG9yeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    url: 'https://images.unsplash.com/photo-1509024644558-2f56ce76c490?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGhpc3Rvcnl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    url: 'https://images.unsplash.com/photo-1526559881144-9df4bf3eb37a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGhpc3Rvcnl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    url: 'https://images.unsplash.com/photo-1521295121783-8a321d551ad2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGhpc3Rvcnl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1661317244277-ca8baad9828e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fGhpc3Rvcnl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    url: 'https://images.unsplash.com/photo-1604579806311-e65d83db73d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fGhpc3Rvcnl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1663127218156-89ac2f954068?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fGhpc3Rvcnl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    url: 'https://images.unsplash.com/photo-1576570728891-60ab0c3aaad4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODl8fGhpc3Rvcnl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    url: 'https://images.unsplash.com/photo-1549830727-c1c26b45db08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTV8fGhpc3Rvcnl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    url: 'https://images.unsplash.com/photo-1490822239899-bc196b6f19f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTd8fGhpc3Rvcnl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1664304213690-fe9146e3e36e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxoaXN0b3J5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
  },
];

// Lịch sử phát triển
export const SelectionHistory = ({ listImg }) => {
  return (
    <section className='p-4 md:p-8 lg:p-8 xl:p-16 flex flex-col md:flex-row gap-10 bg-white items-center overflow-hidden'>
      <div className='text-rootGreen flex-1'>
        <h2 className='text-center md:text-left text-xl lg:text-2xl xl:text-3xl leading-normal font-bold mb-2'>
          Lịch sử phát triển
        </h2>
        <p className='text-sm xl:text-xl leading-normal font-normal break-words'>
          Khoa Công nghệ thông tin mới được thành lập từ 10/10/2005 theo QĐ số 839/QĐ – NNI của Hiệu trưởng, gồm 5 Bộ
          môn với 70 CBCNV và gần 600 sinh viên. Tuy vậy, Chương trình đào tạo đại học ngành Tin học đã được triển khai
          từ 25/1/2002 theo QĐ số 439/ QĐ/BGD&ĐT-ĐH của Bộ trưởng Bộ giáo dục và Đào tạo nhằm đáp ứng yêu cầu đào tạo
          nhân lực CNTT cho công cuộc Công nghiệp hóa, hiện đại hóa đất nước nói chung và cho lĩnh vực Hiện đại hóa Nông
          nghiệp nói riêng. Khoa hiện nay bao gồm 5 bộ môn (Công nghệ phần mềm, Khoa học máy tính, Toán, Toán-Tin ứng
          dụng, Vật lý), trong đó có một số bộ môn của Khoa đã có bề dày truyền thống như các Bộ môn Toán và Vật lý được
          thành lập từ ngày thành lập trường, và bộ môn CNPM và KHMT được phát triển từ Trung tâm Tin học thành lập từ
          đầu những năm 1980.
        </p>
      </div>
      <div className='flex-1'>
        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards]}
          className='w-[240px] h-[170px] sm:w-[400px] sm:h-[300px] md:w-[300px] md:h-[330px] lg:w-[350px] lg:h-[275px] xl:w-[530px] xl:h-[400px] overflow-hidden'
        >
          {listImg.map((item) => (
            <SwiperSlide key={item.url}>
              <img className='w-full h-full object-cover' src={item.url} alt='thumail' />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
// Cơ sở vật chất
export const SelectionInfrastructure = () => {
  return (
    <section className='flex flex-col-reverse p-4 xl:p-16 md:flex-row gap-4 md:gap-6 lg:gap-8 xl:gap-10 bg-white items-center'>
      <div className='p-4 md:p-8 lg:p-12 xl:p-16 flex-1'>
        <Image src={sodophonghoc} alt='Sơ đồ phòng học' />
      </div>
      <div className='flex-1 text-rootGreen'>
        <h2 className='text-center text-xl md:text-left lg:text-xl xl:text-3xl leading-normal mb-2 font-bold'>
          Cơ sở vật chất
        </h2>
        <p className='text-sm xl:text-xl leading-normal font-normal break-words'>
          Hệ thống giảng đường trung tâm của Học viện Nông nghiệp Việt Nam đều được trang bị máy chiếu projector. Hệ
          thống phòng thực hành máy tính của khoa CNTT gồm có 05 phòng được trang bị thiết bị máy tính hiện đại, màn
          hình cỡ lớn hoặc projector, kết nối mạng Internet thông qua hệ thống mạng nội bộ của trường để đáp ứng nhu cầu
          học tập của sinh viên trong toàn trường.
        </p>
      </div>
    </section>
  );
};
// Nghiên cứu khoa học
export const SelectionStudy = () => {
  return (
    <div className='p-4 xl:py-16 xl:px-32 bg-white overflow-hidden'>
      <h2 className='text-xl text-center text-rootGreen xl:text-5xl font-semibold mb-6 xl:mb-12'>
        Các công trình nghiên cứu khoa học
      </h2>
      <p className='text-sm mb-3 text-rootGreen xl:text-xl leading-normal'>
        Các công trình NCKH trong lĩnh vực CNTT và CNTT ứng dụng cũng đã được thực hiện ngay từ những thời kỳ đầu tiên.
        Trong giai đoạn 1999-2005, các thầy cô cùng các em sinh viên trong Khoa đã thực hiện nhiều đề tài NCKH có tính
        ứng dụng cao, đóng góp vào sự nghiệp NCKH của nhà trường. Khoa đã xây dựng và ứng dụng thành công nhiều phần mềm
        trong nhiều lĩnh vực của nông nghiệp như quy hoạch sử dụng đất, GIS, viễn thám, sinh học, kinh tế, quản lý giáo
        dục.
      </p>
      <p className='text-sm mb-3 text-rootGreen xl:text-xl leading-normal'>
        Trong giai đoạn 2006-2010, bên cạnh việc nâng cao chất lượng đào tạo nhân lực CNTT cho đất nước, Khoa CNTT đã
        xây dựng được định hướng NCKH của mình: Chú trọng các lĩnh vực Tin Sinh học, ứng dụng công nghệ GIS, viễn thám
        và mô hình mô phỏng trong quản lý và quy hoạch tài nguyên, thiết kế các phần mềm xử lý thống kê, tối ưu hóa và
        các công cụ phát triển kiểm thử phần mềm, phát triển các cổng thông tin điện tử phục vụ đào tạo và dịch vụ, xây
        dựng các hệ thống thông tin, các hệ cơ sở dữ liệu chuẩn và hệ hỗ trợ ra quyết định, các ứng dụng của Toán, Tin
        học và Vật lý trong sinh học và nông nghiệp và quản lý thông tin, phát triển và ứng dụng các phương pháp tính
        toán khoa học.
      </p>
      <p className='text-sm mb-3 text-rootGreen xl:text-xl leading-normal'>
        Trong giai đoạn 2010-2019, các thầy cô cùng các em sinh viên trong Khoa đã thực hiện nhiều đề tài NCKH có tính
        ứng dụng cao, đóng góp vào sự nghiệp NCKH của nhà trường. Khoa đã xây dựng và ứng dụng thành công nhiều phần mềm
        trong nhiều lĩnh vực của nông nghiệp như quy hoạch sử dụng đất, GIS, viễn thám, sinh học, kinh tế, quản lý giáo
        dục.
      </p>
      <p className='text-sm mb-3 text-rootGreen xl:text-xl leading-normal'>
        Trong giai đoạn tiếp theo, bên cạnh việc nâng cao chất lượng đào tạo nhân lực CNTT cho đất nước, Khoa CNTT đã
        xây dựng được định hướng NCKH của mình: Chú trọng các lĩnh vực Tin Sinh học, Xử lý ảnh, Trí tuệ nhân tạo, ứng
        dụng công nghệ GIS, viễn thám và mô hình mô phỏng trong quản lý và quy hoạch tài nguyên, thiết kế các phần mềm
        xử lý thống kê, tối ưu hóa và các công cụ phát triển kiểm thử phần mềm, phát triển các cổng thông tin điện tử
        phục vụ đào tạo và dịch vụ, xây dựng các hệ thống thông tin, các hệ cơ sở dữ liệu chuẩn và hệ hỗ trợ ra quyết
        định, các ứng dụng của Toán, Tin học và Vật lý trong sinh học và nông nghiệp và quản lý thông tin, phát triển và
        ứng dụng các phương pháp tính toán khoa học.
      </p>
      <p className='text-sm mb-3 text-rootGreen xl:text-xl leading-normal'>
        Từ năm 2018, Khoa thành lập nhóm Nghiên cứu mạnh “Ứng dụng Công nghệ thông tin trong nông nghiệp” và đã đạt
        những thành tựu bước đầu, góp phần thúc đẩy tinh thần NCKH của các thành viên trong nhóm, tạo ra nhiều sản phẩm
        ứng dụng trong lĩnh vực Nông nghiệp.
      </p>
    </div>
  );
};
// Ảnh gần footer :))
const ThumnailHomePageUser = () => {
  return (
    <div className='w-full h-[80px] sm:h-[90px] md:h-[100px] lg:h-[150px] xl:h-[200px]'>
      <img className='w-full h-full object-cover' src={Rectangle} alt='selection' />
    </div>
  );
};
export const TargetOf = () => {
  return (
    <div className='p-4 xl:p-16 xl:flex-row flex-col flex gap-16 bg-slate-100 w-full'>
      <div className='bg-[#00c04d] flex gap-4 items-center rounded-full flex-1'>
        <div className='w-[8rem] h-[8rem] xl:w-[15rem] xl:h-[15rem]'>
          <img
            className='w-full h-full object-cover rounded-full border-8'
            src='https://media.istockphoto.com/id/926799886/vi/anh/h%C3%ACnh-b%C3%B3ng-c%E1%BB%A7a-ng%C6%B0%E1%BB%9Di-%C4%91%C3%A0n-%C3%B4ng-trong-v%C4%83n-ph%C3%B2ng-v%C3%A0-%C4%91%E1%BB%93-h%E1%BB%8Da-th%C3%B4ng-tin-c%E1%BB%A7a-c%C3%B4ng-ty.jpg?s=612x612&w=0&k=20&c=ZmmMoB_RbIjumEP6urHdxP4sA2gJTh8_Z3dcX8CKUUs='
            alt='img'
          />
        </div>
        <div className='w-[55%]'>
          <h2 className='lg:text-2xl text-white capitalize font-medium mb-2'>Tầm nhìn</h2>
          <p className='text-sm md:text-base text-white line-clamp-2 md:line-clamp-3 xl:line-clamp-4'>
            Phấn đấu trở thành một trung tâm đào tạo nhân lực công nghệ thông tin có uy tín cao trong nước. Phấn đấu trở
            thành một trung tâm nghiên cứu ứng dụng và phát triển công nghệ thông tin, đặc biệt trong lĩnh vực nông
            nghiệp và quản lý tài nguyên.
          </p>
        </div>
      </div>
      <div className='bg-rootGreen flex gap-4 items-center rounded-full flex-1 justify-end'>
        <div className='w-[55%] lg:pl-4 xl:pl-0'>
          <h2 className='lg:text-2xl text-white capitalize font-medium mb-2'>Sứ mệnh</h2>
          <p className='text-sm md:text-base text-white line-clamp-2 md:line-clamp-3 xl:line-clamp-4'>
            Là đơn vị có vai trò quan trọng của Học viện Nông nghiệp Việt Nam, đảm bảo đạt chất lượng cao trong đào tạo,
            khoa học công nghệ làm tốt vai trò tư vấn và cung cấp các giải pháp công nghệ thông tin.
          </p>
        </div>
        <div className='w-[8rem] h-[8rem] xl:w-[15rem] xl:h-[15rem]'>
          <img
            className='w-full h-full object-cover rounded-full border-8'
            src='https://media.istockphoto.com/id/926799886/vi/anh/h%C3%ACnh-b%C3%B3ng-c%E1%BB%A7a-ng%C6%B0%E1%BB%9Di-%C4%91%C3%A0n-%C3%B4ng-trong-v%C4%83n-ph%C3%B2ng-v%C3%A0-%C4%91%E1%BB%93-h%E1%BB%8Da-th%C3%B4ng-tin-c%E1%BB%A7a-c%C3%B4ng-ty.jpg?s=612x612&w=0&k=20&c=ZmmMoB_RbIjumEP6urHdxP4sA2gJTh8_Z3dcX8CKUUs='
            alt='img'
          />
        </div>
      </div>
    </div>
  );
};
export default function HomePageUser(props) {
  return (
    <DefaultLayoutPage titleHeader='Khoa công nghệ thông tin'>
      <SlideShowHeader listImg={urlImage} />
      <SelectionHistory listImg={urlImage} />
      <SelectionInfrastructure />
      <ThumnailHomePageUser />
      <SelectionStudy />
      <TargetOf />
    </DefaultLayoutPage>
  );
}
