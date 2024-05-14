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
    <Link href={'https://www.linkedin.com/in/hasibullah-wahabzadah-45884b26b/'} className=" hover:text-accent transition-all duration-300 text-gray-400">
    <FaLinkedin/>
    </Link>
    <Link href={'https://github.com/Hasibullah-Wahabzadah'} className=" hover:text-accent transition-all duration-300 text-gray-400">
    <FaGithubSquare/>
    </Link>
    <Link href={'https://www.instagram.com/hasibullah_wahabzadeh/'} className=" hover:text-accent transition-all duration-300 text-gray-400">
    <FaTelegram/>
    </Link>
    <Link href={'https://www.instagram.com/hasibullah_wahabzadeh/'} className=" hover:text-accent transition-all duration-300 text-gray-400">
    <FaInstagramSquare/>
    </Link>
    <Link href={'https://api.whatsapp.com/send?phone=93794454095'} className=" hover:text-accent transition-all duration-300 text-gray-400">
    <FaWhatsappSquare />
    </Link>
  </div>
  );
};

export default Socials;
