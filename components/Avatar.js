//  next image
import Image from "next/image";

const Avatar = () => {
  return <div className=" hidden xl:flex xl:max-w-none">
    <Image src={'/x.png'} width={737} height={678} alt="me" 
    className=" translate-z-0 w-[500px] h-[500px]"/>
  </div>;
};

export default Avatar;
