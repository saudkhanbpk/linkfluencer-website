import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import React, { useState } from "react";

function privacypolicy() {
  const [selectedComponent, setSelectedComponent] = useState("Influencer");
  return (
    <div>
      <Navbar
        selectedComponent={selectedComponent}
        setSelectedComponent={setSelectedComponent}
      />
      <div className="flex flex-col justify-center items-center p-8 md:pt-32">
        <div>
          <div className="mdw-[600px] pb-10">
            <h1 className="text-center md:text-start text-[#020D3A] text-3xl md:text-4xl font-semibold">
              Privacy Policy
            </h1>
            <p className="mt-3 text-center md:text-start">
              Effective date: Jan 26, 2024
            </p>
          </div>
          <div className="md:w-[600px]">
            <h1 className="text-center md:text-start mb-[20px] text-[#020D3A] text-[24px] md:text-[40px] font-semibold ">
              Our Platform
            </h1>
            <p className="text-[12px] md:text-[24px] text-center md:text-start">
              Our platform serves as a hub for all stakeholders in the
              influencer economy. We encourage users to share their high-quality
              influencer content, engage with others' content, and participate
              in community activities such as AMAs, webinars, and educational
              sessions. However, we do not condone overly promotional,
              misleading, or 2pammy content. Linkfluencer.io reserves the right
              to assess content suitability and remove any content that doesn't
              align with our standards.
            </p>
          </div>
          <div className="md:w-[600px]">
            <h1 className="text-center md:text-start mb-[20px] mt-[32px] text-[#020D3A] text-2xl text-[24px] md:text-[40px] font-semibold ">
              Scope
            </h1>
            <p className="text-[12px] md:text-[24px] text-center md:text-start">
              Your access to and use of our Services constitutes a legal
              agreement between you and us. By accessing or using our
              Application, you confirm your legal capacity to enter into a
              binding agreement with us. This Privacy Policy delineates the
              types of Information collected, retained, and processed by our
              Application. We2collect, retain, and process your Information to
              facilitate smooth service delivery. Your Information remains
              secure with us and is not shared unless you provide consent
              through our Application.
            </p>
          </div>
          <div className="md:w-[600px] my-5">
            <h1 className="text-center font-header mb-[20px] mt-[32px] md:text-start text-[#020D3A] text-[24px] md:text-[40px] font-semibold ">
              Information Collection
            </h1>
            <ul className="1ont-content text-[12px] md:text-[24px]">
              <li>
                Personal details such as name, email address, and contact
                information upon registration.
              </li>
              <li>
                Technical I2formation including IP address, mobile network,
                device ID, and operating system.
              </li>
              <li>Cookies for user recognition and preference storage.</li>
              <li>
                User-generated content, such as photos and campaign-related
                data.
              </li>
              <li>
                Information related to product usage, transactions, and
                interactions with our Services.
              </li>
              <li>
                We may also receive and analyze content, communications, and
                Information provided by other users of our Services.
              </li>
            </ul>
          </div>
          <div className="md:w-[600px] mt-[32px]">
            <h1 className="text-center md:text-start mb-[20px]  text-[#020D3A] text-[24px] md:text-[40px] font-semibold font-header">
              Information Usage
            </h1>
            <p className="text-center text-[12px] md:text-[24px] md:text-start font-content">
              We share your Information only with third parties involved in
              service provision via our Application. Your Information may also
              be used to defend legal rights, enforce policies, comply with
              government requests, or for marketing purposes with your consent.
            </p>
            <p className="mt-2 text-center text-[12px] md:text-[24px] md:text-start font-content">
              By agreeing to this Privacy Policy, you authorize us to use your
              publicly available photos for social media, marketing, and
              advertising purposes.We may use your Information to send
              newsletters, updates, and notifications related to our Services
              through various communication channels.
            </p>
            <p className="mt-2 text-center text-[12px] md:text-[24px] md:text-start font-content">
              Your consent to share Information with third parties enables us to
              proceed with such sharing.
            </p>
          </div>
          <div className="md:w-[600px]">
            <h1 className="text-center md:text-start mb-[20px] mt-[32px] text-[#020D3A] text-2xl text-[24px] md:text-[40px] font-semibold ">
              Information Gathering
            </h1>
            <p className="text-[12px] md:text-[24px] text-center md:text-start">
              We collect data through third-party services to verify
              credentials, ensure privacy, and enhance service delivery. Cookies
              aid in user recognition and preference storage. While you can
              decline cookies in your browser settings, note that they are
              crucial for fraud prevention and application security.
            </p>
          </div>
          <div className="md:w-[600px]">
            <h1 className="text-center md:text-start mb-[20px] mt-[32px] text-[#020D3A] text-2xl text-[24px] md:text-[40px] font-semibold ">
              Data Storage
            </h1>
            <div className="text-[12px] md:text-[24px] text-center md:text-start">
              <p className="text-[12px] md:text-[24px] text-center md:text-start">
              We employ stringent measures to protect your sensitive
              Information, although no data is entirely immune to hacking. If
              you encounter misuse of your Information, report it to us for
              appropriate action. 
              </p>
              <p className="text-[12px] md:text-[24px] text-center md:text-start mt-3">
              We retain your personal Information as
              necessary for service provision, legal compliance, dispute
              resolution, business purposes, and other legitimate interests.
              </p>
            </div>
          </div>
        </div>
        <div className="md:hidden block mt-[45px]">
          <h1 className="text-2xl md:text-3xl font-semibold md:text-start text-start text-[#113E53] ">
            Launch your internet space with a boost
          </h1>
          <div className="pb-8 flex flex-col justify-start">
            <input
              className="md:w-[450px] border p-3 rounded-full mt-5 "
              type="text"
              placeholder="Paste your link here"
            />
            <br />
            <div className="flex justify-start ">
              <button className="w-fit py-3 px-8  rounded-full focus:outline-none md:centered bg-[#020D3A] text-white">
                Create Smart Link
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default privacypolicy;
