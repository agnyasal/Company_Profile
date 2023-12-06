import Image from "next/image";

const Culture = () => {
  return (
    <>
      <section>
        <div className="container mx-auto px-2">
          <h1 className="text-4xl font-bold text-orange-600 p-7 mb-5 text-center">
            Company's Culture
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            <div className="my-auto">
              <p className="text-gray-600 mb-6 text-justify indent-7">
                Lets Travel's vibrant company culture is defined by a commitment
                to excellence and a customer-centric attitude. Metrics such as
                customer satisfaction and operational efficiency are
                prioritized, reflecting the company's dedication to providing
                exceptional travel experiences. The team embraces an adventurous
                spirit and values continuous learning, fostering a collaborative
                work environment. Lets Travel's overarching goals include
                delivering personalized and memorable journeys, positioning
                itself as a leader in the Indonesian travel industry. The
                company believes in the transformative power of travel and
                incorporates sustainable practices, reflecting its commitment to
                environmental responsibility. These values, attitudes, goals,
                and beliefs collectively shape Lets Travel's dynamic culture,
                creating a workplace where innovation, customer satisfaction,
                and a passion for travel converge.
              </p>
            </div>

            <div className="flex justify-center">
              <Image
                src="/CompanyC.webp"
                width={500}
                height={0}
                alt="Company"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Culture;
