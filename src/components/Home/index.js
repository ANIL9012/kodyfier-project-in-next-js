import React from "react";
import TopHeading from "./Hero";
import Slider from "./Slider";
import CodingEducation from "./CodingEducation";
import JobOriented from "./JobOriented";
import SkillsBuilding from "./SkillsBuilding";
import TestimonialSlider from "./TestimonialSlider";
import ContactSection from "./Contact";

function Home() {
  return (
    <>
      <TopHeading />
      <Slider />
      <CodingEducation />
      <JobOriented />
      <SkillsBuilding />
      <TestimonialSlider />
      <ContactSection />
    </>
  );
}

export default Home;
