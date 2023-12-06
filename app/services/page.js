import Testimonials from "../home/components/Testimonials";
import ChooseUs from "./ChooseUs";
import ProductServices from "./ProductServices";
import TextServices from "./TextServices";

const Services = () => {
  return (
    <div className="p-[80px]">
      <TextServices />
      <ProductServices />
      <ChooseUs />
      <Testimonials />
    </div>
  );
};

export default Services;
