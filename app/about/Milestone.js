import Image from "next/image";

Image;

const Milestone = () => {
  return (
    <section className="grid place-items-center">
      <h1 className=" p-10 text-4xl font-bold text-orange-600">Milestone</h1>
      <Image src="/Milestone.png" width={900} height={900} alt="Milestone" />
    </section>
  );
};

export default Milestone;
