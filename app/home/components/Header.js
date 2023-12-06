import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Header = () => {
  return (
    <section className="relative pt-20 h-screen w-full overflow-hidden">
      <Image
        src="/Header.jpg"
        layout="fill"
        objectFit="cover"
        alt="Background"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-start h-full p-10">
        <h1 className="text-5xl font-bold text-white mb-30">Born to explore</h1>
        <p className="text-white max-w-xl mt-10 mb-5">
          Creating indelible memories in tourism by fully engaging with the
          natural surroundings, witnessing the remarkable biodiversity, and
          experiencing the serene tranquility that envelops us.
        </p>
        <Link href="/services">
          <button className="bg-[#EA906C] text-black font-bold px-6 py-3 rounded-full hover:bg-green-600 transition duration-300 ease-in-out">
            Explore
          </button>
        </Link>
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex">
        <Link
          href="https://www.instagram.com/login/"
          aria-label="instagram"
          target="_blank"
          className="text-white text-2xl mx-2"
        >
          <FaInstagram />
        </Link>
        <Link
          href="https://www.facebook.com/login"
          aria-label="facebook"
          target="_blank"
          className="text-white text-2xl mx-2"
        >
          <FaFacebook />
        </Link>
        <Link
          href="https://twitter.com/i/flow/login"
          aria-label="twitter"
          target="_blank"
          className="text-white text-2xl mx-2"
        >
          <FaTwitter />
        </Link>
      </div>
      ;
    </section>
  );
};

export default Header;
