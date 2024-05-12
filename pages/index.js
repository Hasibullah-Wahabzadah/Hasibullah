import Typewriter from 'typewriter-effect';
import ProjectsBtn from '../components/ProjectsBtn'
import { easeInOut, motion } from 'framer-motion';
import Avatar from '../components/Avatar';
import {fadeIn } from '../variants';
import ParticlesContainer from '../components/ParticlesContainer';
import Image from 'next/image';

const Home = () => {

  return (
    <div className="bg-primary/60 h-full ">
      {/* text */}
      <div className=' w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
        <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left
        h-full container mx-auto'>
          {/* title */}
          <motion.h1 
          variants={fadeIn('down', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className="text-2xl sm:text-3xl -mt-16">
            Hi! I'm Hasibullah Wahabzadah <br /> And I'm
            <span className="text-accent" >
              <Typewriter
                options={{
                  strings: ['Web Developer', 'Front-end Developer', 'UI/UX Implementation'],
                  autoStart: true,
                  loop: true,
                  delay: 100,
                  deleteSpeed: 50,
                  cursor: '😎'
                }}
                onInit={(typewriter) => {
                  typewriter
                    .pauseFor(1000)
                    .start();
                }}
              />
            </span>
          </motion.h1>
          {/* subtitle */}
          <motion.p 
          variants={fadeIn('down', 0.3)}
          initial='hidden'
          animate='show'
          exit='hidden'
  
          className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'>
            I am a Web Developer, Web Designer, and UI/UX Implementation professional responsible for designing, developing, and implementing beautiful and effective websites and applications.
          </motion.p>
          {/* btn  */}
          <div className='flex justify-center xl:hidden z-40'>
            {/* <ProjectsBtn /> */}
            <Avatar  />
          </div>
          <motion.div
            variants={fadeIn('down', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'

            className='hidden xl:flex'
          >
            <ProjectsBtn />
          </motion.div>


        </div>
      </div>
      {/* image  */}
      <div className='w-[1200px] h-full absolute right-0 bottom-0'>
        {/* bg img  */}
        <div className='bg-explosion bg-cover bg-right
        bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0
        '></div>
      
        {/* particles  */}
       <ParticlesContainer/>
        {/* avatar img  */}
        <motion.div 
        variants={fadeIn('up', 0,5)}
        initial='hidden'
        animate='show'
        exit='hidden'
        transition={{duration: 1, ease: easeInOut }}
        className='w-full h-full max-w-[637px] max-h-[478px] absolute -bottom-2 lg:bottom-0 lg:right-[1%]'>
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
