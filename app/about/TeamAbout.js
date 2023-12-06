import Image from "next/image";
import React from "react";

const TeamAbout = () => {
  const teamMembers = [
    {
      name: "Agnya Salsabila Setiadi",
      title: "Founder & CEO",
      experience:
        "Passionate about travel and has led Lets Travel since its inception.",
      image: "/me.jpg",
    },
    {
      name: "Jane Smith",
      title: "Head of Operations",
      experience:
        "Experienced in managing travel logistics and ensuring smooth operations.",
      image: "/Testi3.jpg",
    },
    {
      name: "David George",
      title: "Head of Operations",
      experience:
        "Experienced in managing travel logistics and ensuring smooth operations.",
      image: "/Testi2.jpg",
    },
  ];
  return (
    <>
      <section>
        <h1 className="text-4xl font-bold text-black mb-5">
          Board of Directors
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-center">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={100}
                  height={100}
                  className="object-cover w-24 h-24 rounded-full mb-4"
                />
              </div>
              <h2 className="text-xl font-bold mb-2">{member.name}</h2>
              <p className="text-gray-600">{member.title}</p>
              <p className="text-sm text-gray-500">{member.experience}</p>
            </div>
          ))}
        </div>
      </section>
      <section>
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="my-auto">
              <h1 className="text-4xl font-bold text-black">Team</h1>
              <p className="text-gray-600 mb-6 text-justify indent-7">
                <br/>Welcome to Lets Travel, where the art of travel is redefined by
                a team dedicated to turning each journey into an extraordinary
                tapestry of memories. Join us on a voyage where wanderlust meets
                meticulous planning, and every destination becomes a canvas for
                your unique story. Step into Lets Travel's world, where our
                spirited 'TravelForce' team brings diverse talents to every
                corner of Indonesia. We're not just colleagues; we're explorers
                crafting travel stories that stick with you. Join us on this
                fantastic journey, where team spirit is at the core of every
                Lets Travel adventure.
              </p>
            </div>

            <div className="flex justify-center">
              <Image
                src="/Team.avif"
                width={500}
                height={0}
                alt="Team"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamAbout;
