import React from 'react';

const Nav = () => {
    // const platforms = [
    //     {
    //         services: [
    //             {
    //                 name: 'Adobe',
    //                 logo: 'https://cdn.ranosys.com/wp-content/uploads/2024/08/adobe-logo.png',
    //             },
    //             {
    //                 name: 'Commerce (Magento)',
    //             },
    //             {
    //                 name: 'Experience Manager',
    //             },
    //             {
    //                 name: 'Marketo Engage',
    //             },
    //             {
    //                 name: 'Analytics',
    //             },
    //         ],
    //     },
    //     {
    //         services: [{
    //             name: 'Salesforce',
    //             logo: 'https://cdn.ranosys.com/wp-content/uploads/2024/08/icon_salesforce_0.png',
    //         }, 'Commerce Cloud', 'Service Cloud', 'MuleSoft', 'Marketing Cloud'],
    //     },
    //     {
    //         name: 'OutSystems',
    //         logo: 'https://cdn.ranosys.com/wp-content/uploads/2024/08/icon_outsystems.png', // Replace with actual image path
    //         services: ['CX Transformation', 'Workplace Innovation', 'Process Automation', 'App Modernization'],
    //     },
    //     {
    //         name: 'Microsoft',
    //         logo: 'https://cdn.ranosys.com/wp-content/uploads/2024/08/icon_microsoft.png', // Replace with actual image path
    //         services: ['Power Apps', 'D365 Business Central', 'Power Automate', '.NET Development'],
    //     },
    //     {
    //         name: 'Shopify Plus',
    //         logo: 'https://cdn.ranosys.com/wp-content/uploads/2024/08/Shopify_Icon.png', // Replace with actual image path
    //         services: ['B2C Commerce', 'B2B Commerce', 'D2C Commerce'],
    //     },
    // ];

    const platforms = [
        {
            services: [
                {
                    name: 'Adobe',
                    logo: 'https://cdn.ranosys.com/wp-content/uploads/2024/08/adobe-logo.png',

                },
                {
                    name: 'Commerce (Magento)',
                    logo: 'https://cdn.ranosys.com/wp-content/uploads/2024/08/adobe-logo.png',
                    logoDirection: 'left'
                },
                {
                    name: 'Experience Manager',
                    logo: 'https://cdn.ranosys.com/wp-content/uploads/2024/08/adobe-logo.png',
                    logoDirection: 'right'
                },
                {
                    name: 'Marketo Engage',
                },
                {
                    name: 'Analytics',
                },
            ],
        },
        {
            services: [
                {
                    name: 'Salesforce',
                    logo: 'https://cdn.ranosys.com/wp-content/uploads/2024/08/icon_salesforce_0.png',
                },
                { name: 'Commerce Cloud' },
                { name: 'Service Cloud' },
                { name: 'MuleSoft' },
                { name: 'Marketing Cloud' },
            ],
        },
        {
            services: [
                {
                    name: 'OutSystems',
                    logo: 'https://cdn.ranosys.com/wp-content/uploads/2024/08/icon_outsystems.png',
                },
                { name: 'CX Transformation' },
                { name: 'Workplace Innovation' },
                { name: 'Process Automation' },
                { name: 'App Modernization' },
            ],
        },
        {
            services: [
                {
                    name: 'Microsoft',
                    logo: 'https://cdn.ranosys.com/wp-content/uploads/2024/08/icon_microsoft.png',
                },
                { name: 'Power Apps' },
                { name: 'D365 Business Central' },
                { name: 'Power Automate' },
                { name: '.NET Development' },
            ],
        },
        {
            services: [
                {
                    name: 'Shopify Plus',
                    logo: 'https://cdn.ranosys.com/wp-content/uploads/2024/08/Shopify_Icon.png',
                },
                { name: 'B2C Commerce' },
                { name: 'B2B Commerce' },
                { name: 'D2C Commerce' },
            ],
        },
    ];

    // console.log(platforms);


    return (
        <ul className="bg-white py-10 px-5 flex lg:flex-row flex-col mx-auto">
            <li className="text-left lg:max-w-[17%]">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Platforms</h2>
                <p className="text-gray-600 text-sm">Have a look at the technology platforms we excel at.</p>
                <a href="#all-platforms" className="text-orange-500 text-base font-semibold mt-2 inline-block">
                    VIEW ALL PLATFORMS →
                </a>
            </li>
            <div className="mt-3 grid grid-cols-1 lg:grid-cols-5 gap-4 w-full">
                {platforms.map((platform, index) => (
                    <ul
                        key={index}
                        className=" rounded-lg shadow-sm flex flex-col"
                    >
                        {platform.services.map(({ name, logo,logoDirection }, i) => (
                            <li className="mt-3 space-y-3 flex flex-col text-sm text-gray-600">
                                <a key={i} href={`#${name}`} className={`${i==0 ? "bg-gray-100" : ""} inline-flex items-center justify-between w-full p-2 py-3 ${logoDirection == "left" ? " flex-row-reverse" : ""}`}>
                                    <span>{name}</span>
                                    {
                                        logo &&
                                        <img
                                            src={logo}
                                            alt={`${name} logo`}
                                            className="max-w-[33px] h-[30px]"
                                        />
                                    }
                                </a>
                            </li>
                        ))}
                    </ul>
                ))}
            </div>
        </ul>
    );
};

export default Nav;
