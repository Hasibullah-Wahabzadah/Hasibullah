// next image
import Image from "next/image"
const TopLeftImg = () => {
  return (
    <div className=" absolute left-0 top-0 mix-blend-color-dodge z-10 w-[100px] xl:w-[200px] opacity-55">
      <Image src='/z.png' width={400} height={400} alt=" " />
    </div>
  );
}; 

export default TopLeftImg;
