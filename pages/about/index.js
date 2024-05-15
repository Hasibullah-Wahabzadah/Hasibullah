import React, { useState } from "react";

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
  FaFigma,
  FaGitAlt,
  FaGithubSquare
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
          <FaHtml5 key="html5" />,
          <FaCss3 key="css3" />,
          <DiSass key="sass" />,
          <BsBootstrapFill key="bootstrap" />,
          <SiTailwindcss key="tailwind" />,
          <FaJs key="js" />,
          <FaReact key="react" />,
          <FaGitAlt key="git" />,
          <FaGithubSquare key="github" />
        ],
      },
      {
        title: 'UI/UX Implementation',
        icons: [<FaFigma key="figma" />, <SiAdobexd key="adobexd" />, <SiAdobephotoshop key="photoshop" />],
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'CS OF CS at Herat University',
        stage: '2022',
        key: "herat"
      },
      {
        title: 'Ghalib University - Programming class',
        stage: '2022 - 2023',
        key: "ghalib"
      },
      {
        title: 'Wassa code4Fun Web class',
        stage: '2023 - 2024',
        key: "wassa"
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'Wassa code4Fun Web class',
        stage: 'Certificate',
        key: "wassa-award"
      },
      {
        title: 'Ghalib University - Programming class',
        stage: 'Certificate',
        key: "ghalib-award"
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-[140px] text-center xl:text-left">
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
      <div className="container mx-auto  flex flex-col items-center xl:flex-row gap-x-6 py-5">
        {/* text  */}
        <div className=" flex-1 flex-col  flex justify-center ">
          <motion.h2
            variants={fadeIn('right', 0, 2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="text-3xl sm:text-4xl">Turning ideas into reality is what I do as a
            <span className=" text-accent font-semibold"> Web Developer</span></motion.h2>
          <motion.p
            variants={fadeIn('right', 0, 4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-4 xl:mt-3  items-center Nunito text-xl sm:text-xl">
             Elevate your brand`s recognition and success with a stunning, efficient website, fueling sustainable growth and enhanced marketing.
          </motion.p>
          {/* Computer  */}
          <motion.div
            variants={fadeIn('right', 0, 6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-9 ">
            <div className="flex flex-1 xl:gap-x-6 ">
              {/* experience */}
              <div className=" relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={2} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w[100px] Nunito">
                  <p> Years of experience </p>
                </div>
              </div>

              {/* clients */}
              <div className=" relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={50} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w[100px] Nunito">
                  <p>Satisfied<br/> clients</p> 
                </div>
              </div>

              {/* projects */}
              <div className=" relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={650} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w[100px] Nunito">
                  <p> Finisihed projects</p>
                </div>
              </div>

              {/* awards */}
              <div className=" relative flex-1 ">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={2} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w[100px] Nunito">
                   <p>Winning<br/> awards</p>
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
          className="flex flex-col w-full xl:max-w-[48%] h-[380px] py-7 ">
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-2">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${index === itemIndex && 'text-accent after:w-[100%] Nunito after:bg-accent after:transition-all after:duration-300'} cursor-pointer capitalize xl:text-2xl relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:-left-0 text-xl `}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-1 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 text-center xl:items-start">
            {aboutData[index] && aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  className="flex-1 flex flex-col md:flex-row  gap-x-2 Nunito items-center text-white/60"
                  key={itemIndex}>
                  {/* title */}
                  <div className=" font-light text-xl">{item.title}</div>
                  <div className="text-white truncate text-xl">{item.stage}</div>
                  {/* icons */}
                  <div className="flex flex-wrap justify-center md:justify-start gap-x-2">
                    {item.icons?.map((icon, iconIndex) => (
                      <div key={iconIndex} className="m-1 text-2xl text-white">
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
