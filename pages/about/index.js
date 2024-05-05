import React, { Component, useState } from "react";

// Components 
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

// framer motion 
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

// counter
import CountUp from "react-countup";

// icons
import { BsBootstrapFill } from "react-icons/bs";
import { DiSass } from "react-icons/di";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiAdobexd,
  SiAdobephotoshop,
  SiTailwindcss,

} from "react-icons/si";

// data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <DiSass />,
          <BsBootstrapFill />,
          <SiTailwindcss />,
          <FaJs />,
          <FaReact />,
          <FaWordpress />,
        ],
      },
      {
        title: 'UI/UX Implementation',
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'CS OF CS at Herat University',
        stage: '2022'
      },
      {
        title: 'Ghalib University - Programming class',
        stage: '2022 - 2023',
      },
      {
        title: 'Wassa code4Fun Web class',
        stage: '2023 - 2024',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'UX/UI Designer - XYZ Company',
        stage: '2012 - 2023',
      },
      {
        title: 'Web Developer - ABC Agency',
        stage: '2010 - 2012',
      },
      {
        title: 'Intern - DEF Corporation',
        stage: '2008 - 2010',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Web Development - ABC University, LA, CA',
        stage: '2011',
      },
      {
        title: 'Computer Science Diploma - AV Technical Institute',
        stage: '2009',
      },
      {
        title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
        stage: '2006',
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-36 text-center xl:text-left">
      <Circles />
      {/* avatar img  */}
      <motion.div
        variants={fadeIn('right', 0, 4)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className=' hidden xl:flex absolute bottom-[400px] -left-[245px]'>
        <Avatar />
      </motion.div>
      <div className="container mx-auto  flex flex-col items-center xl:flex-row gap-x-6 py-11">
        {/* text  */}
        <div className=" flex-1 flex-col  flex justify-center">
          <motion.h2 
          variants={fadeIn('right', 0, 2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className="text-4xl">Turning ideas into reality is what I do as a<span className=" text-accent"> Web Developer</span></motion.h2>
          <motion.p 
          variants={fadeIn('right', 0, 4)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">Responsive websites: Figma constraints are supported.Breakpoints (Media queries): When opening from mobile or desktop, users will always get to the right artboard.
            Videos: Add Youtube/MP4/GIF/Lottie to your site.
          </motion.p>
          {/* Computer  */}
          <motion.div 
          variants={fadeIn('right', 0, 6)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className=" md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-9 ">
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className=" relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <di v className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={2} duration={5} /> +
                </di>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w[100px]">Years of experience
                </div>
              </div>

              {/* clients */}
              <div className=" relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <di v className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={50} duration={5} /> +
                </di>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w[100px]">
                  Satisfied clients
                </div>
              </div>

              {/* projects */}
              <div className=" relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <di v className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={650} duration={5} /> +
                </di>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w[100px]">
                  Finisihed projects 
                </div>
              </div>

               {/* awards */}
               <div className=" relative flex-1 ">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={2} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w[100px]">
                  Winning awards
                </div>
              </div>

            </div>
          </motion.div>
        </div>
        {/* info  */}
        <motion.div 
        variants={fadeIn('left', 0, 4)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className="flex flex-col w-full xl:max-w-[48%] h-[480px] sm:py-16 pl-6">
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:-left-0 `}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 text-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  className="flex-1 flex flex-col md:flex-row  gap-x-2 items-center text-gray-400"
                  key={itemIndex}>
                  {/* title */}
                  <div>{item.title}</div>
                  <div className="hidden md:flex">{item.stage}</div>
                  {/* icons */}
                  <div className="flex flex-wrap justify-center md:justify-start gap-x-2">
                    {item.icons?.map((icon, iconIndex) => (
                      <div key={iconIndex} className="m-1 text-2xl">
                        {icon}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
