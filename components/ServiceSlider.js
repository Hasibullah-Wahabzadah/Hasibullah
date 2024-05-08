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
    icon: <RxCrop />,
    title: 'Branding',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxReader />,
    title: 'Copywriting',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
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
    className="h-[240px] sm:h-[340px]"
    >
    {
      serviceData.map((itme,index) => {
        return (
        <SwiperSlide key={index}>
          <div className="m-2  px-10 py-5 bg-white/5   
          rounded-lg flex flex-col items-center justify-center gap-2 relative after:absolute after:h-full after:bg-red-700/80  z-20 shadow-lg after:-z-20 after:w-full after:inset-0 after:rounded-lg transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden cursor-pointer after:-translate-y-full after:hover:translate-y-0 [&amp;_p]:delay-200 [&amp;_p]:transition-all  group "> 
            {/* icons  */}
            <div className="text-4xl mb-4">{itme.icon}</div>
            {/* title & desc  */}
            <div className="mb-8">
              <div className="mb-2 text-lg ">{itme.title}</div>
              <p className="max-w-[350px] leading-normal">{itme.description}</p>
            </div>
            {/* arraw */}
            <div className="text-3xl">
              <RxArrowTopRight className=" group-hover:rotate-45 transition-all duration-300"/>
            </div>
          </div>
        </SwiperSlide>
        )
      })
    }

    </Swiper>
  );
};

export default ServiceSlider;
