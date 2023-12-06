import Link from "next/link";
import Image from "next/image";

const CompanyOverview = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl font-bold text-center text-orange-600 mb-8">
              Most Trusted Travel Exploration
            </h2>
            <p className="text-gray-600 mb-6">
              Welcome to Lets Travel, your gateway to unparalleled travel
              experiences! Explore curated excursions, travel tours, and
              unforgettable journeys. Dive into our rich history, meet our
              passionate team, and embrace a culture of adventure. With pride,
              our professional team, experts in diverse destinations worldwide,
              is dedicated to providing the best travel services. From
              innovative technology for efficiency to your journey's smooth
              planning and return, we're with you every step, ensuring an
              unforgettable experience. Discover more with Lets Travel.
            </p>
            <div className="flex justify-center items-center">
              <Link href="/about" aria-label="know more">
                <button className="bg-orange-500 text-black font-bold px-6 py-2 rounded-full hover:bg-orange-600 transition duration-300 mx-auto">
                  Know More
                </button>
              </Link>
            </div>
          </div>
          <div className="order-1 md:order-2 mb-8 md:mb-0">
            <Image
              src="/CompanyO.png"
              alt="Business Consulting"
              width={200}
              height={200}
              layout="responsive"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyOverview;
