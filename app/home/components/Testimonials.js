import { StarIcon } from "@heroicons/react/solid";

const Testimonials = () => {
  const testimonialsData = [
    {
      name: "Sarah Gibson",
      content:
        "Unforgettable Adventures! Lets Travel made our journey seamless and filled with extraordinary moments. Their attention to detail and personalized service truly set them apart. Highly recommended",
      stars: 5,
      image: "/Testi1.jpg",
    },
    {
      name: "David Doe",
      content:
        "Effortless Planning, Exceptional Experiences! Lets Travel exceeded our expectations in crafting a tailor-made itinerary. The team's dedication to customer satisfaction made our trip truly unforgettable.",
      stars: 5,
      image: "/Testi2.jpg",
    },
    {
      name: "Jane Smith",
      content:
        "Adventure with Confidence! Lets Travel not only provided top-notch service but also a sense of security throughout our trip. Their innovative use of technology ensured a comfortable and worry-free travel experience",
      stars: 5,
      image: "/Testi3.jpg",
    },
  ];

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          What Customers Said
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className=" object-cover w-24 h-24 rounded-full mb-4"
              />
              <div className="flex mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <StarIcon key={i} className="text-yellow-500 h-5 w-5" />
                ))}
              </div>
              <p className="text-center text-gray-600 mb-4">
                {testimonial.content}
              </p>
              <p className="text-lg font-semibold">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
