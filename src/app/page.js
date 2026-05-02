import CodingEducation from "@/components/Home/CodingEducation";
import TopHeading from "@/components/Home/Hero";
import JobOriented from "@/components/Home/JobOriented";
import SkillsBuilding from "@/components/Home/SkillsBuilding";
import Slider from "@/components/Home/Slider";
import TestimonialSlider from "@/components/Home/TestimonialSlider";
import React from "react";

function home() {
  return (
    <div>
      <TopHeading />
      <Slider />
      <CodingEducation />
      <JobOriented />
      <SkillsBuilding />
      <TestimonialSlider />
    </div>
  );
}

export default home;
