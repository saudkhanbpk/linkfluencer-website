import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import BrandMarketer from "@/components/services/BrandMarketer";
import BulkLink from "@/components/services/BulkLink";
import SmartLinks from "@/components/services/SmartLinks";
import React, { useState } from "react";

function services() {
  const [selectedComponent, setSelectedComponent] = useState("Influencer");
  return (
    <div>
      <Navbar
        selectedComponent={selectedComponent}
        setSelectedComponent={setSelectedComponent}
      />
      <div className=" flex justify-center items-center text-center py-[50px] md:py-[65px] px-[20px] md:px-[80px]">
        <div>
          <h1 className="text-[32px] md:text-[64px] font-header font-semibold text-center md:w-[800px] text-[#113E53] leading-none">
            The key benefits of using our product or service
          </h1>
        </div>
      </div>
      <SmartLinks />
      <BrandMarketer />
      <BulkLink />
      <Footer />
    </div>
  );
}

export default services;
