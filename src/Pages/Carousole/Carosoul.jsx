import image1 from '../../../public/images/carosoule1.jpg'
import image2 from '../../../public/images/carosoule2.jpg'
import image3 from '../../../public/images/carosoule3.jpg' 
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';
 

export default function Carosoul() {
  const text1 = 'Employee success plans nurture and train employees.'
  const text3 = 'Teamwork is the collaborative effort of a group to achieve a common goal '
  const text2 = 'Somthing is new to comming soon'
  return (
    <div className='px-6 py-8 mx-auto'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false, 
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><Slide image={image1} text={text1}/></SwiperSlide>
        <SwiperSlide><Slide image={image2} text={text2}/></SwiperSlide>
        <SwiperSlide><Slide image={image3} text={text3}/></SwiperSlide>  
      </Swiper>
    </div>
  );
}