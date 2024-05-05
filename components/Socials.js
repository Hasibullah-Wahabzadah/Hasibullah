// links
import Link from "next/link";

// icons
import {
  FaLinkedin,
  FaGithubSquare,
  FaTelegram,
  FaInstagramSquare,
  FaWhatsappSquare
}
  from 'react-icons/fa';
const Socials = () => {
  return (
  <div className=" flex items-center gap-x-5 text-3xl ">
    <Link href={''} className=" hover:text-accent transition-all duration-300 text-gray-400">
    <FaLinkedin/>
    </Link>
    <Link href={''} className=" hover:text-accent transition-all duration-300 text-gray-400">
    <FaGithubSquare/>
    </Link>
    <Link href={''} className=" hover:text-accent transition-all duration-300 text-gray-400">
    <FaTelegram/>
    </Link>
    <Link href={''} className=" hover:text-accent transition-all duration-300 text-gray-400">
    <FaInstagramSquare/>
    </Link>
    <Link href={''} className=" hover:text-accent transition-all duration-300 text-gray-400">
    <FaWhatsappSquare />
    </Link>
  </div>
  );
};

export default Socials;
