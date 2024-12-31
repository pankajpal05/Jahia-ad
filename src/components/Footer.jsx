import React, { useState, useEffect } from 'react';
import Form from './Form';

const Footer = () => {
  const [showForm, setShowForm] = useState(false);
  const [footerData, setFooterData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('../../public/footerData.json'); 
        
        const data = await response.json();
        
        setFooterData(data);
      } catch (error) {
        console.error('Error fetching footer data:', error);
      }
    };

    fetchData();
  }, []);

  if (!footerData) {
    return <div>Loading...</div>; 
  }

  return (
    <footer className="bg-gray-100 md:text-start">
      <div className="py-6 mx-6 md:py-24 md:mx-28 lg:py-24 lg:mx-28">
        <div className="mb-0 md:mb-15">
          <div className="font-sans leading-tight md:leading-none text-balance text-grey font-light text-[40px] mb-[30px] md:mb-[40px] md:text-[62px] 2xl:text-[80px]">
            {footerData.title}
          </div>
          <span>
            Let's talk
            <button
              className={"w-[42px] h-[42px] m-3 bg-gray-100 text-black border-4 rounded-full transform transition-all duration-300 hover:scale-150 hover:bg-blue-400"}
              onClick={() => setShowForm(true)}
              aria-label="Open contact form"
            >
              <i className="fas fa-arrow-right"></i>
            </button>
          </span>
        </div>

        <div className="flex flex-row justify-between pt-20 sm:pt-24">
          <ul className="flex flex-col gap-2 w-[75%] md:w-[80%] tracking-wide">
            {footerData.navigationLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="font-sans text-xl sm:text-2xl leading-6 text-[#000000] font-light hover:text-gray-500"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <ul className="flex flex-col w-[25%] md:w-[20%] tracking-wide font-light justify-end gap-2 text-[#000000] mt-4 sm:mt-0">
            {footerData.socialLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="hover:text-gray-500">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="font-sans sm:text-2xl leading-5 text-grey font-normal mt-10">
          {footerData.copyrightText}
        </div>
      </div>

      {showForm && <Form showForm={showForm} setShowForm={setShowForm} />}
    </footer>
  );
};

export default Footer;
