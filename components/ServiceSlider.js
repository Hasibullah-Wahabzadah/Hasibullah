// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

// import required modules
import { FreeMode, Pagination } from 'swiper';

// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";


// data
const serviceData = [
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'Create dynamic, optimized and high-performance websites whit our expert development services.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'Creating the best designs according to your business is what we thrive on.',
  },
  {
    icon: <RxReader />,
    title: 'Content',
    description: 'Choose the best contents in accordance whit your business.',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'Well place your website at the top of search reults, bringing you more visitors and increased sales.',
  },
  {
    icon: <RxCrop />,
    title: 'Branding',
    description: 'I can make a unique identity for your business to make good lunk in your work.',
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
    breakpoints={{
      320:
      {
        slidesPerView:1,
        spaceBetween: 15
      },
      640:
      {
        slidesPerView:3,
        spaceBetween: 15
      }, 
    }}
    freeMode={true}
    pagination={{
      clickable: true,
    }}
    modules={[FreeMode, Pagination]}
    className="h-[240px] sm:h-[320px]"
    >
    {
      serviceData.map((itme,index) => {
        return (
        <SwiperSlide key={index}>
          <div className=" h-full px-10 py-5 bg-white/5   
          rounded-lg flex flex-col items-center justify-center gap-2 relative after:absolute after:h-full after:bg-red-700/80 z-20 shadow-lg after:-z-20 after:w-full after:inset-0 after:rounded-lg transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden cursor-pointer after:-translate-y-full after:hover:translate-y-0 [&amp;_p]:delay-200 [&amp;_p]:transition-all  group "> 
            {/* icons  */}
            <div className="text-4xl mb-3 text-center">{itme.icon}</div>
            {/* title & desc  */}
            <div className="mb-5 ">
              <div className="mb-2 text-xl">{itme.title}</div>
              <p className="max-w-[350px] leading-normal Nunito">{itme.description}</p>
            </div>
            {/* arraw */}
          </div>
        </SwiperSlide>
        )
      })
    }
    </Swiper>
  );
};

export default ServiceSlider;
