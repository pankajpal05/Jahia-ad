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
    <footer className="bg-white md:text-start">
      <div className="py-16 mx-10 md:py-24 md:mx-16 xl:py-28 lg:mx-28 2xl:mx-36">
        <div className="mb-0 md:mb-15">
          <div className="font-sans leading-tight md:leading-none text-balance text-grey font-light text-[40px] mb-[30px] md:mb-[40px] md:text-[62px] 2xl:text-[80px]">
            {footerData.title}
          </div>
          <span>
            Let's talk
            <button
              className={"w-[42px] h-[42px] mx-3 bg-gray-100 text-black border-4 rounded-full transform transition-all duration-300 hover:scale-150 hover:bg-blue-400"}
              onClick={() => setShowForm(true)}
              aria-label="Open contact form"
            >
              <i className="fas fa-arrow-right"></i>
            </button>
          </span>
        </div>

        <div className="flex flex-col sm:flex-row justify-between pt-20 sm:pt-24">
          <ul className="flex flex-col gap-2 w-[75%] tracking-wide">
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
<div className='flex justify-between w-full sm:w-[25%] '>
          <ul className="flex flex-col w-[50%]  tracking-wide font-light justify-end gap-1 text-[#000000] mt-4 sm:mt-0">
            {footerData.socialLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="hover:text-gray-500">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="font-sans flex items-end justify-end sm:text-base leading-5 text-grey font-normal mt-10 w-[50%]">
          {footerData.copyrightText}
        </div>
        </div>
        </div>

        
      </div>

      {showForm && <Form showForm={showForm} setShowForm={setShowForm} />}
    </footer>
  );
};

export default Footer;
