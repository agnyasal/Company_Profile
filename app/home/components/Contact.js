import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-grey bg-center font-semibold bg-no-repeat">
      <div className="mb-6">
        <Image src="/Logopng.png" alt="CiFLY" width={100} height={100} />
      </div>
      <p className="text-center p-10">
        Ready to embark on an extraordinary journey with Lets Travel?{" "}
        <br mt-10 /> Reach out to us today, and let's craft your unforgettable
        adventure together!
      </p>
      <Link href="/team">
        <button className="bg-orange-500 text-black font-bold px-5 py-2 mb-5 rounded-full hover:bg-orange-600 transition duration-300 mx-auto">
          Contact Us
        </button>
      </Link>
    </div>
  );
};

export default Contact;
