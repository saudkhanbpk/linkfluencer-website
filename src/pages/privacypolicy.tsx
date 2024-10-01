import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import React, { useEffect, useState } from "react";

function privacypolicy() {
  const [selectedComponent, setSelectedComponent] = useState("Influencer");
  const [activeSection, setActiveSection] = useState<string>('section1');

  const handleSectionChange = (section: string): void => {
    setActiveSection(section);
  };

  return (
    <div>
      <Navbar
        selectedComponent={selectedComponent}
        setSelectedComponent={setSelectedComponent}
      />
      {/* Sidebar */}
      <div className="flex flex-col md:gap-y-5 md:flex-row">
        <nav className="md:w-4/12 lg:w-3/12 p-6  lg:h-screen mx-auto text-center md:text-left lg:sticky lg:top-40">
          <ul className="font-content lg:pl-28 flex flex-col gap-y-5">
            <li onClick={() => handleSectionChange('section1')}>
              <a className={`cursor-pointer ${activeSection === "section1"
                  ? "font-semibold underline underline-offset-8 decoration-2 decoration-[#252C32]"
                  : "text-[#252C32] font-normal"
                }`}
              >
                Privacy Policy
              </a>
            </li>
            <li onClick={() => handleSectionChange('section2')}>
              <a
                className={`cursor-pointer ${activeSection === "section2"
                    ? "font-semibold underline underline-offset-8 decoration-2 decoration-black"
                    : "text-black font-medium"
                  }`}
              >
                Scope
              </a>
            </li>
            <li onClick={() => handleSectionChange('section3')}>
              <a
                className={`cursor-pointer ${activeSection === "section3"
                    ? "font-semibold underline underline-offset-8 decoration-2 decoration-black"
                    : "text-black font-medium"
                  }`}
              >
                Information Collection
              </a>
            </li>
            <li onClick={() => handleSectionChange('section4')}>
              <a
                className={`cursor-pointer ${activeSection === "section4"
                    ? "font-semibold underline underline-offset-8 decoration-2 decoration-black"
                    : "text-black font-medium"
                  }`}
              >
                Information Gathering
              </a>
            </li>
            <li onClick={() => handleSectionChange('section5')}>
              <a
                className={`cursor-pointer ${activeSection === "section5"
                    ? "font-semibold underline underline-offset-8 decoration-2 decoration-black"
                    : "text-black font-medium"
                  }`}
              >
                Information Usage
              </a>
            </li>
            <li onClick={() => handleSectionChange('section6')}>
              <a
                className={`cursor-pointer ${activeSection === "section6"
                    ? "font-semibold underline underline-offset-8 decoration-2 decoration-black"
                    : "text-black font-medium"
                  }`}
              >
                Data Storage
              </a>
            </li>
          </ul>
        </nav>
        <div className="md:w-8/12 lg:w-9/12 flex flex-col text-base md:text-lg lg:text-2xl p-8 md:pt-10 text-[#113E53]">
          {activeSection === 'section1' && (
            <section>
              <div className="md:w-[600px] pb-4 md:pb-6">
              <h1 className="text-center md:text-start text-xl md:text-4xl font-semibold">
                Privacy Policy
              </h1>
              <p className="mt-3 text-center text-base font-header md:text-start text-[#113E53]">Effective date: Jan 26, 2024</p>
              </div>
              <div className="md:w-[600px] my-5 md:text-xl">
                <p className="mt-4 text-center md:text-start font-header">
                  At Linkfluencer.io, we're committed to fostering an inspiring, useful, and supportive community environment. Our community guidelines capture these values, promoting respect, value addition, and inclusivity. Here's a summary of our key principles:
                </p>
                <p className="mt-4 text-center md:text-start font-header">
                  1. Respect: We encourage all members to be respectful of others, embracing diversity in backgrounds, locations, and perspectives.
                </p>
                <p className="mt-4 text-center md:text-start font-header">
                  2. Value Addition: Every interaction should contribute value to the Linkfluencer.io community, ensuring relevance and significance.
                </p>
                <p className="mt-4 text-center md:text-start font-header">
                  3. Zero Tolerance: We strictly prohibit soliciting follows or shoutouts within the community, maintaining a zero-tolerance policy for such content.
                </p>
                <p className="mt-4 text-center md:text-start font-header">
                  As the premier influencer marketing platform, Linkfluencer.io aims to cultivate a safe and inclusive environment for all participants. To uphold this standard, we've established clear guidelines regarding behaviour and content. We reserve the right to ban any user who violates these rules or any additional rules we may implement in the future.
                </p>
                <p className="mt-4 text-center md:text-start font-header">
                  Our platform serves as a hub for all stakeholders in the influencer economy. We encourage users to share their high-quality influencer content, engage with others' content, and participate in community activities such as AMAs, webinars, and educational sessions. However, we do not condone overly promotional, misleading, or spammy content. Linkfluencer.io reserves the right to assess content suitability and remove any content that doesn't align with our standards.
                </p>
                <ul className="list-disc pl-5 py-10  font-header">
                  <li>Nudity or sexual content</li>
                  <li>Promotion of guns, ammunition, or weaponry</li>
                  <li>Content related to tobacco products, smoking, or vaping</li>
                  <li>Promotion of products prohibited by local or national government</li>
                  <li>Harmful or dangerous content</li>
                  <li>Hateful content targeting individuals or groups based on various characteristics</li>
                  <li>Violent or graphic content</li>
                  <li>Harassment and cyberbullying</li>
                  <li>Spam, misleading metadata, and scams</li>
                  <li>Threats</li>
                  <li>Copyright violations</li>
                  <li>Impersonation</li>
                </ul>
                <p className="mt-4 text-center md:text-start font-header">
                Additionally, we prioritize user privacy and safety. We do not tolerate the sharing of personal Information without consent or engaging in predatory behavior, stalking, or intimidation. We also comply with copyright laws and respect users' intellectual property rights.
                  </p>
                <p className="mt-4 text-center md:text-start font-header">
                For any privacy concerns, please reach out to us at support@linkfluencer.io. We value your privacy and are committed to protecting your personal Information. You can find more Information about our privacy practices in our Privacy Policy.
                  </p>
                <p className="mt-4 text-center md:text-start font-header">
                We also maintain policies specific to different features of our platform, such as Campaigns. Thank you for being a part of our vibrant and creative influencer community at Linkfluencer.io!
                  </p>
                <p className="mt-4 text-center md:text-start font-header">
                By accessing or using our Application, you agree to comply with this Privacy Policy and consent to the collection, retention, and use of your Information as described herein. If you disagree with any terms of this Privacy Policy, refrain from accessing or using our Services.
                  </p>
                <p className="mt-4 text-center md:text-start font-header">
                We prioritize the protection of your online privacy and safeguard any shared information on our Application.
               </p>
              </div>
            </section>
          )}

          {activeSection === 'section2' && 
          <section>
          <div className="md:w-[600px] pb-4 md:pb-6">
          <h1 className="text-center md:text-start text-xl md:text-4xl font-semibold">
            Scope
          </h1>
          <p className="mt-3 text-center text-base font-header md:text-start text-[#113E53]">Effective date: Jan 26, 2024</p>
          </div>
          <div className="md:w-[600px] my-5 md:text-xl">
            <p className="mt-4 text-center md:text-start font-header">
              At Linkfluencer.io, we're committed to fostering an inspiring, useful, and supportive community environment. Our community guidelines capture these values, promoting respect, value addition, and inclusivity. Here's a summary of our key principles:
            </p>
            <p className="mt-4 text-center md:text-start font-header">
              1. Respect: We encourage all members to be respectful of others, embracing diversity in backgrounds, locations, and perspectives.
            </p>
            <p className="mt-4 text-center md:text-start font-header">
              2. Value Addition: Every interaction should contribute value to the Linkfluencer.io community, ensuring relevance and significance.
            </p>
            <p className="mt-4 text-center md:text-start font-header">
              3. Zero Tolerance: We strictly prohibit soliciting follows or shoutouts within the community, maintaining a zero-tolerance policy for such content.
            </p>
            <p className="mt-4 text-center md:text-start font-header">
              As the premier influencer marketing platform, Linkfluencer.io aims to cultivate a safe and inclusive environment for all participants. To uphold this standard, we've established clear guidelines regarding behaviour and content. We reserve the right to ban any user who violates these rules or any additional rules we may implement in the future.
            </p>
            <p className="mt-4 text-center md:text-start font-header">
              Our platform serves as a hub for all stakeholders in the influencer economy. We encourage users to share their high-quality influencer content, engage with others' content, and participate in community activities such as AMAs, webinars, and educational sessions. However, we do not condone overly promotional, misleading, or spammy content. Linkfluencer.io reserves the right to assess content suitability and remove any content that doesn't align with our standards.
            </p>
            <ul className="list-disc pl-5 py-10  font-header">
              <li>Nudity or sexual content</li>
              <li>Promotion of guns, ammunition, or weaponry</li>
              <li>Content related to tobacco products, smoking, or vaping</li>
              <li>Promotion of products prohibited by local or national government</li>
              <li>Harmful or dangerous content</li>
              <li>Hateful content targeting individuals or groups based on various characteristics</li>
              <li>Violent or graphic content</li>
              <li>Harassment and cyberbullying</li>
              <li>Spam, misleading metadata, and scams</li>
              <li>Threats</li>
              <li>Copyright violations</li>
              <li>Impersonation</li>
            </ul>
            <p className="mt-4 text-center md:text-start font-header">
            Additionally, we prioritize user privacy and safety. We do not tolerate the sharing of personal Information without consent or engaging in predatory behavior, stalking, or intimidation. We also comply with copyright laws and respect users' intellectual property rights.
              </p>
            <p className="mt-4 text-center md:text-start font-header">
            For any privacy concerns, please reach out to us at support@linkfluencer.io. We value your privacy and are committed to protecting your personal Information. You can find more Information about our privacy practices in our Privacy Policy.
              </p>
            <p className="mt-4 text-center md:text-start font-header">
            We also maintain policies specific to different features of our platform, such as Campaigns. Thank you for being a part of our vibrant and creative influencer community at Linkfluencer.io!
              </p>
            <p className="mt-4 text-center md:text-start font-header">
            By accessing or using our Application, you agree to comply with this Privacy Policy and consent to the collection, retention, and use of your Information as described herein. If you disagree with any terms of this Privacy Policy, refrain from accessing or using our Services.
              </p>
            <p className="mt-4 text-center md:text-start font-header">
            We prioritize the protection of your online privacy and safeguard any shared information on our Application.
           </p>
          </div>
        </section>
          }
          {activeSection === 'section3' && 
          <section>
          <div className="md:w-[600px] pb-4 md:pb-6">
          <h1 className="text-center md:text-start text-xl md:text-4xl font-semibold">
            Information Collection
          </h1>
            <p className="mt-3 text-center text-base font-header md:text-start">Effective date: Jan 26, 2024</p>
          </div>
          <div className="md:w-[600px] my-5 md:text-xl">
            <p className="mt-4 text-center md:text-start font-header">
              At Linkfluencer.io, we're committed to fostering an inspiring, useful, and supportive community environment. Our community guidelines capture these values, promoting respect, value addition, and inclusivity. Here's a summary of our key principles:
            </p>
            <p className="mt-4 text-center md:text-start font-header">
              1. Respect: We encourage all members to be respectful of others, embracing diversity in backgrounds, locations, and perspectives.
            </p>
            <p className="mt-4 text-center md:text-start font-header">
              2. Value Addition: Every interaction should contribute value to the Linkfluencer.io community, ensuring relevance and significance.
            </p>
            <p className="mt-4 text-center md:text-start font-header">
              3. Zero Tolerance: We strictly prohibit soliciting follows or shoutouts within the community, maintaining a zero-tolerance policy for such content.
            </p>
            <p className="mt-4 text-center md:text-start font-header">
              As the premier influencer marketing platform, Linkfluencer.io aims to cultivate a safe and inclusive environment for all participants. To uphold this standard, we've established clear guidelines regarding behaviour and content. We reserve the right to ban any user who violates these rules or any additional rules we may implement in the future.
            </p>
            <p className="mt-4 text-center md:text-start font-header">
              Our platform serves as a hub for all stakeholders in the influencer economy. We encourage users to share their high-quality influencer content, engage with others' content, and participate in community activities such as AMAs, webinars, and educational sessions. However, we do not condone overly promotional, misleading, or spammy content. Linkfluencer.io reserves the right to assess content suitability and remove any content that doesn't align with our standards.
            </p>
            <ul className="list-disc pl-5 py-10  font-header">
              <li>Nudity or sexual content</li>
              <li>Promotion of guns, ammunition, or weaponry</li>
              <li>Content related to tobacco products, smoking, or vaping</li>
              <li>Promotion of products prohibited by local or national government</li>
              <li>Harmful or dangerous content</li>
              <li>Hateful content targeting individuals or groups based on various characteristics</li>
              <li>Violent or graphic content</li>
              <li>Harassment and cyberbullying</li>
              <li>Spam, misleading metadata, and scams</li>
              <li>Threats</li>
              <li>Copyright violations</li>
              <li>Impersonation</li>
            </ul>
            <p className="mt-4 text-center md:text-start font-header">
            Additionally, we prioritize user privacy and safety. We do not tolerate the sharing of personal Information without consent or engaging in predatory behavior, stalking, or intimidation. We also comply with copyright laws and respect users' intellectual property rights.
              </p>
            <p className="mt-4 text-center md:text-start font-header">
            For any privacy concerns, please reach out to us at support@linkfluencer.io. We value your privacy and are committed to protecting your personal Information. You can find more Information about our privacy practices in our Privacy Policy.
              </p>
            <p className="mt-4 text-center md:text-start font-header">
            We also maintain policies specific to different features of our platform, such as Campaigns. Thank you for being a part of our vibrant and creative influencer community at Linkfluencer.io!
              </p>
            <p className="mt-4 text-center md:text-start font-header">
            By accessing or using our Application, you agree to comply with this Privacy Policy and consent to the collection, retention, and use of your Information as described herein. If you disagree with any terms of this Privacy Policy, refrain from accessing or using our Services.
              </p>
            <p className="mt-4 text-center md:text-start font-header">
            We prioritize the protection of your online privacy and safeguard any shared information on our Application.
           </p>
          </div>
        </section>
          }
          {activeSection === 'section4' &&
            <section>
            <div className="md:w-[600px] pb-4 md:pb-6">
            <h1 className="text-center md:text-start text-xl md:text-4xl font-semibold">
              Information Gathering
            </h1>
            <p className="mt-3 text-center text-base font-header md:text-start text-[#113E53]">Effective date: Jan 26, 2024</p>
            </div>
            <div className="md:w-[600px] my-5 md:text-xl">
              <p className="mt-4 text-center md:text-start font-header">
                At Linkfluencer.io, we're committed to fostering an inspiring, useful, and supportive community environment. Our community guidelines capture these values, promoting respect, value addition, and inclusivity. Here's a summary of our key principles:
              </p>
              <p className="mt-4 text-center md:text-start font-header">
                1. Respect: We encourage all members to be respectful of others, embracing diversity in backgrounds, locations, and perspectives.
              </p>
              <p className="mt-4 text-center md:text-start font-header">
                2. Value Addition: Every interaction should contribute value to the Linkfluencer.io community, ensuring relevance and significance.
              </p>
              <p className="mt-4 text-center md:text-start font-header">
                3. Zero Tolerance: We strictly prohibit soliciting follows or shoutouts within the community, maintaining a zero-tolerance policy for such content.
              </p>
              <p className="mt-4 text-center md:text-start font-header">
                As the premier influencer marketing platform, Linkfluencer.io aims to cultivate a safe and inclusive environment for all participants. To uphold this standard, we've established clear guidelines regarding behaviour and content. We reserve the right to ban any user who violates these rules or any additional rules we may implement in the future.
              </p>
              <p className="mt-4 text-center md:text-start font-header">
                Our platform serves as a hub for all stakeholders in the influencer economy. We encourage users to share their high-quality influencer content, engage with others' content, and participate in community activities such as AMAs, webinars, and educational sessions. However, we do not condone overly promotional, misleading, or spammy content. Linkfluencer.io reserves the right to assess content suitability and remove any content that doesn't align with our standards.
              </p>
              <ul className="list-disc pl-5 py-10  font-header">
                <li>Nudity or sexual content</li>
                <li>Promotion of guns, ammunition, or weaponry</li>
                <li>Content related to tobacco products, smoking, or vaping</li>
                <li>Promotion of products prohibited by local or national government</li>
                <li>Harmful or dangerous content</li>
                <li>Hateful content targeting individuals or groups based on various characteristics</li>
                <li>Violent or graphic content</li>
                <li>Harassment and cyberbullying</li>
                <li>Spam, misleading metadata, and scams</li>
                <li>Threats</li>
                <li>Copyright violations</li>
                <li>Impersonation</li>
              </ul>
              <p className="mt-4 text-center md:text-start font-header">
              Additionally, we prioritize user privacy and safety. We do not tolerate the sharing of personal Information without consent or engaging in predatory behavior, stalking, or intimidation. We also comply with copyright laws and respect users' intellectual property rights.
                </p>
              <p className="mt-4 text-center md:text-start font-header">
              For any privacy concerns, please reach out to us at support@linkfluencer.io. We value your privacy and are committed to protecting your personal Information. You can find more Information about our privacy practices in our Privacy Policy.
                </p>
              <p className="mt-4 text-center md:text-start font-header">
              We also maintain policies specific to different features of our platform, such as Campaigns. Thank you for being a part of our vibrant and creative influencer community at Linkfluencer.io!
                </p>
              <p className="mt-4 text-center md:text-start font-header">
              By accessing or using our Application, you agree to comply with this Privacy Policy and consent to the collection, retention, and use of your Information as described herein. If you disagree with any terms of this Privacy Policy, refrain from accessing or using our Services.
                </p>
              <p className="mt-4 text-center md:text-start font-header">
              We prioritize the protection of your online privacy and safeguard any shared information on our Application.
             </p>
            </div>
          </section>
          }
          {activeSection === 'section5' &&
           <section>
           <div className="md:w-[600px] pb-4 md:pb-6">
           <h1 className="text-center md:text-start text-xl md:text-4xl font-semibold">
             Information Usage
           </h1>
           <p className="mt-3 text-center text-base font-header md:text-start text-[#113E53]">Effective date: Jan 26, 2024</p>
           </div>
           <div className="md:w-[600px] my-5 md:text-xl">
             <p className="mt-4 text-center md:text-start font-header">
               At Linkfluencer.io, we're committed to fostering an inspiring, useful, and supportive community environment. Our community guidelines capture these values, promoting respect, value addition, and inclusivity. Here's a summary of our key principles:
             </p>
             <p className="mt-4 text-center md:text-start font-header">
               1. Respect: We encourage all members to be respectful of others, embracing diversity in backgrounds, locations, and perspectives.
             </p>
             <p className="mt-4 text-center md:text-start font-header">
               2. Value Addition: Every interaction should contribute value to the Linkfluencer.io community, ensuring relevance and significance.
             </p>
             <p className="mt-4 text-center md:text-start font-header">
               3. Zero Tolerance: We strictly prohibit soliciting follows or shoutouts within the community, maintaining a zero-tolerance policy for such content.
             </p>
             <p className="mt-4 text-center md:text-start font-header">
               As the premier influencer marketing platform, Linkfluencer.io aims to cultivate a safe and inclusive environment for all participants. To uphold this standard, we've established clear guidelines regarding behaviour and content. We reserve the right to ban any user who violates these rules or any additional rules we may implement in the future.
             </p>
             <p className="mt-4 text-center md:text-start font-header">
               Our platform serves as a hub for all stakeholders in the influencer economy. We encourage users to share their high-quality influencer content, engage with others' content, and participate in community activities such as AMAs, webinars, and educational sessions. However, we do not condone overly promotional, misleading, or spammy content. Linkfluencer.io reserves the right to assess content suitability and remove any content that doesn't align with our standards.
             </p>
             <ul className="list-disc pl-5 py-10  font-header">
               <li>Nudity or sexual content</li>
               <li>Promotion of guns, ammunition, or weaponry</li>
               <li>Content related to tobacco products, smoking, or vaping</li>
               <li>Promotion of products prohibited by local or national government</li>
               <li>Harmful or dangerous content</li>
               <li>Hateful content targeting individuals or groups based on various characteristics</li>
               <li>Violent or graphic content</li>
               <li>Harassment and cyberbullying</li>
               <li>Spam, misleading metadata, and scams</li>
               <li>Threats</li>
               <li>Copyright violations</li>
               <li>Impersonation</li>
             </ul>
             <p className="mt-4 text-center md:text-start font-header">
             Additionally, we prioritize user privacy and safety. We do not tolerate the sharing of personal Information without consent or engaging in predatory behavior, stalking, or intimidation. We also comply with copyright laws and respect users' intellectual property rights.
               </p>
             <p className="mt-4 text-center md:text-start font-header">
             For any privacy concerns, please reach out to us at support@linkfluencer.io. We value your privacy and are committed to protecting your personal Information. You can find more Information about our privacy practices in our Privacy Policy.
               </p>
             <p className="mt-4 text-center md:text-start font-header">
             We also maintain policies specific to different features of our platform, such as Campaigns. Thank you for being a part of our vibrant and creative influencer community at Linkfluencer.io!
               </p>
             <p className="mt-4 text-center md:text-start font-header">
             By accessing or using our Application, you agree to comply with this Privacy Policy and consent to the collection, retention, and use of your Information as described herein. If you disagree with any terms of this Privacy Policy, refrain from accessing or using our Services.
               </p>
             <p className="mt-4 text-center md:text-start font-header">
             We prioritize the protection of your online privacy and safeguard any shared information on our Application.
            </p>
           </div>
         </section>
          }
          {activeSection === 'section6' &&
            <section>
            <div className="md:w-[600px] pb-4 md:pb-6">
            <h1 className="text-center md:text-start text-xl md:text-4xl font-semibold">
              Data Storage
            </h1>
            <p className="mt-3 text-center text-base font-header md:text-start text-[#113E53]">Effective date: Jan 26, 2024</p>
            </div>
            <div className="md:w-[600px] my-5 md:text-xl">
              <p className="mt-4 text-center md:text-start font-header">
                At Linkfluencer.io, we're committed to fostering an inspiring, useful, and supportive community environment. Our community guidelines capture these values, promoting respect, value addition, and inclusivity. Here's a summary of our key principles:
              </p>
              <p className="mt-4 text-center md:text-start font-header">
                1. Respect: We encourage all members to be respectful of others, embracing diversity in backgrounds, locations, and perspectives.
              </p>
              <p className="mt-4 text-center md:text-start font-header">
                2. Value Addition: Every interaction should contribute value to the Linkfluencer.io community, ensuring relevance and significance.
              </p>
              <p className="mt-4 text-center md:text-start font-header">
                3. Zero Tolerance: We strictly prohibit soliciting follows or shoutouts within the community, maintaining a zero-tolerance policy for such content.
              </p>
              <p className="mt-4 text-center md:text-start font-header">
                As the premier influencer marketing platform, Linkfluencer.io aims to cultivate a safe and inclusive environment for all participants. To uphold this standard, we've established clear guidelines regarding behaviour and content. We reserve the right to ban any user who violates these rules or any additional rules we may implement in the future.
              </p>
              <p className="mt-4 text-center md:text-start font-header">
                Our platform serves as a hub for all stakeholders in the influencer economy. We encourage users to share their high-quality influencer content, engage with others' content, and participate in community activities such as AMAs, webinars, and educational sessions. However, we do not condone overly promotional, misleading, or spammy content. Linkfluencer.io reserves the right to assess content suitability and remove any content that doesn't align with our standards.
              </p>
              <ul className="list-disc pl-5 py-10  font-header">
                <li>Nudity or sexual content</li>
                <li>Promotion of guns, ammunition, or weaponry</li>
                <li>Content related to tobacco products, smoking, or vaping</li>
                <li>Promotion of products prohibited by local or national government</li>
                <li>Harmful or dangerous content</li>
                <li>Hateful content targeting individuals or groups based on various characteristics</li>
                <li>Violent or graphic content</li>
                <li>Harassment and cyberbullying</li>
                <li>Spam, misleading metadata, and scams</li>
                <li>Threats</li>
                <li>Copyright violations</li>
                <li>Impersonation</li>
              </ul>
              <p className="mt-4 text-center md:text-start font-header">
              Additionally, we prioritize user privacy and safety. We do not tolerate the sharing of personal Information without consent or engaging in predatory behavior, stalking, or intimidation. We also comply with copyright laws and respect users' intellectual property rights.
                </p>
              <p className="mt-4 text-center md:text-start font-header">
              For any privacy concerns, please reach out to us at support@linkfluencer.io. We value your privacy and are committed to protecting your personal Information. You can find more Information about our privacy practices in our Privacy Policy.
                </p>
              <p className="mt-4 text-center md:text-start font-header">
              We also maintain policies specific to different features of our platform, such as Campaigns. Thank you for being a part of our vibrant and creative influencer community at Linkfluencer.io!
                </p>
              <p className="mt-4 text-center md:text-start font-header">
              By accessing or using our Application, you agree to comply with this Privacy Policy and consent to the collection, retention, and use of your Information as described herein. If you disagree with any terms of this Privacy Policy, refrain from accessing or using our Services.
                </p>
              <p className="mt-4 text-center md:text-start font-header">
              We prioritize the protection of your online privacy and safeguard any shared information on our Application.
             </p>
            </div>
          </section>
          }
          <div className="md:hidden block">
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
      </div>
      <Footer />
    </div>
  );
}

export default privacypolicy;
