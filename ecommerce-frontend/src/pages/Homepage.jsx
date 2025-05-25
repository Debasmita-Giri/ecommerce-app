import React from "react";
import HomeCarousel from "../customer/Components/Carousel/HomeCarousel";
import { homeCarouselData } from "../customer/Components/Carousel/HomeCaroselData";
import HomeProductSection from "../customer/Components/Home/HomeProductSection";

const Homepage = () => {
  return (
    <div className="">
      <HomeCarousel images={homeCarouselData} />
      
      <div className="space-y-10 py-20">
      <HomeProductSection title={"Men's Shirt"} section={"shirt"} />
      <HomeProductSection title={"Men's Kurta"} section={"men_kurta"} />
      <HomeProductSection title={"Men's Jeans"} section={"men_jeans"} />
      <HomeProductSection title={"Women's Dress"} section={"women_dress"} />
      <HomeProductSection title={"Women's Lehanga Choli"} section={"lengha_choli"} />
      <HomeProductSection title={"Women's Top"} section={"top"} />
      <HomeProductSection title={"Women's Jeans"} section={"women_jeans"} />
      
      
        {/* <HomeProductSection data={mensPantsPage1} section={"Men's Pants"} /> */}
      </div>

      
    </div>
  );
};

export default Homepage;
