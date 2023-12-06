import React from "react";
import Link from "next/link";
import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";

const PopularPackages = () => {
  const packages = [
    {
      id: 1,
      name: "Raja Ampat Leisure 8 Days",
      days: "8 Days",
      people: "2< People",
      location: "Raja Ampat",
      rating: 5,
      image: "/rajaampat.jpg",
    },
    {
      id: 2,
      name: "Best 4D/3N Bali Tour",
      days: "5D/4N",
      people: "2< People",
      location: "Bali",
      rating: 5,
      image: "/bali.jpg",
    },
    {
      id: 3,
      name: "Best 3D/2N Bromo Tour",
      days: "3D/2N",
      people: "3< People",
      location: "Bromo",
      rating: 5,
      image: "/Bromo.jpg",
    },
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-orange-600">
          POPULAR PACKAGES
        </h2>
        <p className="text-center text-lg mb-8">
          Explore the beauty of Indonesia with Lets Travel's exclusive range of
          packages. Immerse yourself in nature's wonders with our unique nature
          excursions, discover the rich cultural heritage through guided tours,
          and create lasting family memories with our specially crafted domestic
          vacation packages. Whether it's the pristine beaches of Bali, the
          cultural gems of Yogyakarta, or the adventurous landscapes of Komodo
          Island, Lets Travel brings you tailored experiences to uncover the
          hidden gems of Indonesia. Our packages provide a brief yet compelling
          glimpse into each destination, inviting you to embark on a journey
          within the captivating landscapes and vibrant cultures of Indonesia.
          Dive into the heart of the archipelago with Lets Travel and experience
          the unparalleled beauty of your own backyard.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-lg shadow overflow-hidden"
            >
              <Image
                src={pkg.image}
                alt={pkg.name}
                width={500}
                height={300}
                layout="responsive"
                objectFit="cover"
                className="hover:opacity-90 transition-opacity duration-300"
              />
              <div className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(pkg.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                  ))}
                </div>
                <h3 className="text-lg font-semibold mb-2">{pkg.name}</h3>
                <p className="text-gray-600">
                  {pkg.days} | {pkg.people} | {pkg.location}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/services">
            <button className="bg-orange-500 text-black font-bold px-6 py-2 rounded-full hover:bg-orange-600 transition duration-300 mx-auto">
              VIEW ALL PACKAGES
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PopularPackages;
