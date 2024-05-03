import Typewriter from 'typewriter-effect';
import ProjectsBtn from '../components/ProjectsBtn'
import { easeInOut, motion } from 'framer-motion';
import Avatar from '../components/Avatar';
import ParticlesContainer from '../components/ParticlesContainer';
// import ParticlesContainer from '../components/ParticlesContainer';

export const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
      opacity: 0,
      x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0,
      transition: {
        type: 'tween',
        duration: 1.5,
        delay: delay,
        ease: [0.25, 0.6, 0.3, 0.8],
      },
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 1.4,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      }
    },
  };
};
// const fadeIn = (direction, duration) => {
//   return {
//     hidden: { opacity: 0, y: direction === 'down' ? -50 : 50 },
//     show: { opacity: 1, y: 0, transition: { duration: duration } },
//     exit: { opacity: 0, y: direction === 'down' ? -50 : 50, transition: { duration: duration } },
//   };
// };

const Home = () => {

  return (
    <div className="bg-primary/60 h-full">
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
          className=" sm:text-3xl">
            Hi! I'm Hasibullah Wahabzadah <br /> And I'm
            <span className="text-accent" >
              <Typewriter
                options={{
                  strings: ['Web Developer', 'Web Designer', 'UI/UX Implementation'],
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
          <div className='flex justify-center xl:hidden relative'>
            <ProjectsBtn />
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
        <div className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right
        xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0
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
