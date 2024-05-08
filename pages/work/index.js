// componenets
import WorkSlider from "../../components/WorkSlider";
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';

// framer motion 
import { motion } from "framer-motion";
import { fadeIn } from '../../variants';

const Work = () => {
  return (
    <div className=" h-full bg-primary/30 py-35 flex items-center">
      <Circles />
      <div className=" container mx-auto ">
        <div className=" flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className=" text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2 
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'

            className="h2 xl:mt-[180px] mt-[50px] ">
              My Works<span className=" text-accent">.</span>
            </motion.h2>
            <motion.p 
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="mb-4 max-w-[400px] mx-auto lg:mx-0"> 
              Figma constraints are supported.Breakpoints (Media queries): When opening from mobile or desktop, users will always get to the right artboard.
              </motion.p>
          </div>
          {/* Slider */}
          <motion.div 
          variants={fadeIn('down', 0.6)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className="w-full xl:max-w-[65%]">
          <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
