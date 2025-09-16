import React from "react";
import HeroSection from "../common/Home/HeroSection";
import FeatureSection from "../common/Home/FeatureSection";
import FeatureCard from "../common/Home/FeatureCard";
import BMWUpdateSection from "../common/Home/BmwUpdateSection";
import BMWExpertSection from "../common/Home/BMWExpertSection";
import PodcastSection from "../common/Home/PodcastSection";
import BMWShowroom from "../specific/BMWShowroom";
import BMWWallpapers from "../common/Home/BMWWallpapers";
import BMWSection from "../common/Home/BMWSection";
import BMWFactsSection from "../common/Home/BMWFactsSection";
import BMWSkytopSection from "../common/Home/BMWSkytopSection";
import BMWFooter from "../common/Home/BMWFooter";

const Home = () => {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <FeatureCard />
      <BMWUpdateSection />
      <BMWExpertSection />
      <PodcastSection />
      <BMWShowroom />
      <BMWWallpapers />
      <BMWSection />
      <BMWFactsSection />
      <BMWSkytopSection />
      <BMWFooter />
    </>
  );
};

export default Home;
