import Head from "next/head";
import Image from "next/image";
import { FaClock, FaStar } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";

const ProductServices = () => {
  return (
    <>
      <Head>
        <title>Package Destinations</title>
      </Head>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/rajaampat.jpg"
            alt="Raja Ampat"
            width={600}
            height={250}
            objectFit="cover"
          />
          <div className="p-4">
            <div className="flex justify-between items-center mb-2 text-blue-500">
              <FaClock />
              <span className="ml-1">8 Days</span>
              <FaSackDollar />
              <span className="ml-1">Price: Rp 30.000.000</span>
            </div>
            <h1 className="text-xl font-semibold mb-2">
              Raja Ampat Leisure 8 Days 7 Nights
            </h1>
            <div className="flex mb-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400" />
              ))}
            </div>
            <p className="text-gray-700">
              An unforgettable adventure in Indonesia's coral triangle.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/bali.jpg"
            alt="Bali"
            width={600}
            height={250}
            objectFit="cover"
          />
          <div className="p-4">
            <div className="flex justify-between items-center mb-2 text-blue-500">
              <FaClock />
              <span className="ml-1">8 Days</span>
              <FaSackDollar />
              <span className="ml-1">Price: Rp 7.000.000</span>
            </div>
            <h1 className="text-xl font-semibold mb-2">Bali 5 Days 4 Nights</h1>
            <div className="flex mb-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400" />
              ))}
            </div>
            <p className="text-gray-700">
              Bali enchants with lush landscapes, vibrant traditions, and
              pristine beaches.{" "}
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/Bromo.jpg"
            alt="Bromo"
            width={600}
            height={250}
            objectFit="cover"
          />
          <div className="p-4">
            <div className="flex justify-between items-center mb-2 text-blue-500">
              <FaClock />
              <span className="ml-1">3 Days</span>
              <FaSackDollar />
              <span className="ml-1">Price: Rp 1.500.000</span>
            </div>
            <h1 className="text-xl font-semibold mb-2">
              Bromo 3 Days 2 Nights
            </h1>
            <div className="flex mb-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400" />
              ))}
            </div>
            <p className="text-gray-700">
              Bromo stuns with a surreal volcanic landscape and dramatic sunrise
              views.{" "}
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/KomodoIsland.png"
            alt="Komodo Island"
            width={600}
            height={250}
            objectFit="cover"
          />
          <div className="p-4">
            <div className="flex justify-between items-center mb-2 text-blue-500">
              <FaClock />
              <span className="ml-1">3 Days</span>
              <FaSackDollar />
              <span className="ml-1">Price: Rp 2.000.000</span>
            </div>
            <h1 className="text-xl font-semibold mb-2">
              Komodo Island 3 Days 2 Nights
            </h1>
            <div className="flex mb-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400" />
              ))}
            </div>
            <p className="text-gray-700">Home to the iconic Komodo dragons.</p>
          </div>
        </div>

        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/LabuanBajo.png"
            alt="Labuan Bajo"
            width={600}
            height={250}
            objectFit="cover"
          />
          <div className="p-4">
            <div className="flex justify-between items-center mb-2 text-blue-500">
              <FaClock />
              <span className="ml-1">5 Days</span>
              <FaSackDollar />
              <span className="ml-1">Price: Rp 7.000.000</span>
            </div>
            <h1 className="text-xl font-semibold mb-2">
              Labuan Bajo 7 Days 6 Nights
            </h1>
            <div className="flex mb-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400" />
              ))}
            </div>
            <p className="text-gray-700">
              Nestled in eastern Indonesia, Labuan Bajo boasts stunning
              landscapes, pristine beaches, and vibrant local culture.{" "}
            </p>
          </div>
        </div>
        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/Yogyakarta.png"
            alt="Yogyakarta"
            width={600}
            height={250}
            objectFit="cover"
          />
          <div className="p-4">
            <div className="flex justify-between items-center mb-2 text-blue-500">
              <FaClock />
              <span className="ml-1">5 Days</span>
              <FaSackDollar />
              <span className="ml-1">Price: Rp 4.000.000</span>
            </div>
            <h1 className="text-xl font-semibold mb-2">
              Yogyakarta 5 Days 4 Nights
            </h1>
            <div className="flex mb-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400" />
              ))}
            </div>
            <p className="text-gray-700">
              Historical city rich in Javanese traditions.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductServices;
