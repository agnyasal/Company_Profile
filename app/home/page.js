import React from "react";
import Header from "./components/Header";
import CompanyOverview from "./components/CompanyOverview";
import Testimonials from "./components/Testimonials";
import PopularPackages from "./components/PopularPackages";
import Contact from "./components/Contact";

const Homepage = () => {
  return (
    <div>
      <Header />
      <CompanyOverview />
      <PopularPackages />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Homepage;
