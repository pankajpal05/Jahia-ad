import React, { useEffect, useState } from "react";
import Form from "./Form";
const Footer = () => {
  const [footerData, setFooterData] = useState(null);

  useEffect(() => {
    const fetchFooterData = async () => {
      const response = await fetch("../../public/footerData.json");
      const data = await response.json();
      setFooterData(data);
    };

    fetchFooterData();
  }, []);

  if (!footerData) {
    return <div>Loading...</div>;
  }

  return (
    <footer className="pt-16">
      <div className=" md:h-[400px] lg:h-[250px]">
      <Form />
      </div>
      <div className="md:pt-[350px] lg:pt-[250px] bg-[#1A1A1A] text-white py-10">
        <div className="container mx-auto px-4">
          {/* Top Section */}
          <div className="flex flex-wrap justify-between items-center border-y border-gray-700 ">
            <div className="flex items-center space-x-4 py-6">
              {footerData.topSection.title}
            </div>
          </div>

          {/* Middle Section */}
          <div className="py-10">
            <div className="py-3">
              <div className="flex items-center p-0">
                {footerData.socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    className="hover:text-gray-400"
                  >
                    <i className={link.iconClass}></i>
                  </a>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 lg:w-4/6 gap-1 mb-6 ">
              {footerData.sections.map((section, index) => (
                <div key={index} className="w-30 sm:w-44">
                  <h3 className="font-bold text-lg mb-4 my-3">
                    {section.title}
                  </h3>
                  <ul>
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex} className=" h-11 py-2">
                        {link}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p className="text-base text-white">
              {footerData.bottomSection.copyright}
            </p>
            <div className="space-x-4">
              {footerData.bottomSection.policies.map((policy, index) => (
                <a
                  key={index}
                  href={policy.url}
                  className="  hover:text-gray-400"
                >
                  {policy.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

