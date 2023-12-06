import React from "react";
import TeamAbout from "./TeamAbout";
import Milestone from "./Milestone";
import Culture from "./Culture";
import CompanyHistory from "./CompanyHistory";
import VisionMission from "./VisionMission";

const About = () => {
  return (
    <div className="p-[60px]">
      <CompanyHistory />
      <Milestone />
      <VisionMission />
      <TeamAbout />
      <Culture />
    </div>
  );
};

export default About;
