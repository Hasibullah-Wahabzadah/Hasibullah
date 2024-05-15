// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/1.jpg',
          link: 'https://hasibullah-wahabzadah.github.io/landing-page/'
        },
        {
          title: 'title',
          path: '/2.jpg',
          link: 'https://hasibullah-wahabzadah.github.io/2_landing-page/'
        },
        {
          title: 'title',
          path: '/3.jpg',
          link: 'https://hasibullah-wahabzadah.github.io/4-admin-panel/'
        },
        {
          title: 'title',
          path: '/4.jpg',
          link: 'https://almas-technology.vercel.app/'
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/5.jpg',
          link: 'https://hasibullah-wahabzadah.github.io/3_coming_soon/'
        },
        {
          title: 'title',
          path: '/thumb1.jpg',
          link: '/'
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
          link: '/'
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
          link: '/'
        },
      ],
    },
  ],
};

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

// import required modules
import { Pagination } from 'swiper';

// icons
import { BsArrowRight } from 'react-icons/bs'

// images
import Image from "next/image";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[330px] sm:h-[580px]"
    >
      {workSlides.slides.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <div className=" grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer py-[40px] sm:py-[85px]">
                {slide.images.map((image, index) => {
              return (
                <div className=" relative rounded-lg overflow-hidden flex  justify-center group items-center" key={index}>
                  <div className="relative overflow-hidden flex items-center justify-center group">
                    
                    {/* image */}
                    <Image src={image.path} width={500} height={300} alt=""/>
                   
                    {/* overlay gradient */}
                    <div
                    className=" absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0  group-hover:opacity-70 transition-all duration-700"
                    ></div>
                    {/* title */}
                    <div className=" absolute  translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                      <div className="flex items-center gap-x-2  text-[13px] tracking-[0.2em]">
                        {/* title part 1 */}
                        {/* <div className="font-bold delay-100">LIVE</div> */}
                        {/* title part 2 */}
                        {/* <div className="font-bold translate-y-[500%] group-hover:translate-y-0 translate-all duration-300 delay-150">PROJECT</div> */}
                        {/* icon */}
                       
                        <a href={image.link} className=" font-bold text-2xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200 " target="_blank">LIVE PROJECT</a>
                      </div>
                    </div>
                  </div>
                </div>
              )
                })}
              </div>
            </SwiperSlide>
          )
        })}
    </Swiper>
  );
};

export default WorkSlider;

