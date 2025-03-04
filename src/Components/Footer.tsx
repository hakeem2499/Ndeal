// app/components/Footer.tsx (or wherever you place it)
import React, { SVGProps } from "react";
import {  KeyTextField, LinkField } from '@prismicio/client';
import { PrismicNextLink } from '@prismicio/next';
import { createClient } from "@/prismicio";
import { PrismicRichText } from '@prismicio/react';
import Bounded from './Bounded';
import Image from "next/image";


function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256" {...props}><path fill="#0A66C2" d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4c-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.91 39.91 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186zM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009s9.851-22.014 22.008-22.016c12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97zM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453"></path></svg>
    )
}


function Copyright(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256" {...props}><path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m-32-88a32 32 0 0 0 57.6 19.2a8 8 0 0 1 12.8 9.61a48 48 0 1 1 0-57.62a8 8 0 0 1-12.8 9.61A32 32 0 0 0 96 128"></path></svg>
    )
}

function YoutubeIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1.43em" height="1em" viewBox="0 0 256 180" {...props}><path fill="red" d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134"></path><path fill="#FFF" d="m102.421 128.06l66.328-38.418l-66.328-38.418z"></path></svg>
    )
}
function TwitterIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="20"
            zoomAndPan="magnify"
            viewBox="0 0 37.5 37.499999"
            height="20"
            preserveAspectRatio="xMidYMid meet"
            version="1.0"
        >
            <defs>
                <clipPath id="b9b682346b">
                    <path
                        d="M 3.699219 5.128906 L 31.824219 5.128906 L 31.824219 30.292969 L 3.699219 30.292969 Z M 3.699219 5.128906 "
                        clipRule="nonzero"
                    />
                </clipPath>
            </defs>
            <g clipPath="url(#b9b682346b)">
                <path
                    fill="#ffff"
                    d="M 25.839844 5.128906 L 30.128906 5.128906 L 20.757812 15.808594 L 31.824219 30.292969 L 23.128906 30.292969 L 16.351562 21.511719 L 8.558594 30.292969 L 4.265625 30.292969 L 14.316406 18.882812 L 3.703125 5.128906 L 12.625 5.128906 L 18.78125 13.179688 Z M 24.3125 27.71875 L 26.6875 27.71875 L 11.324219 7.53125 L 8.726562 7.53125 Z M 24.3125 27.71875 "
                    fillOpacity="1"
                    fillRule="nonzero"
                />
            </g>
        </svg>
    )
}



function ContactIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256" {...props}><path fill="currentColor" d="M224 48H32a8 8 0 0 0-8 8v136a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a8 8 0 0 0-8-8m-8 144H40V74.19l82.59 75.71a8 8 0 0 0 10.82 0L216 74.19z"></path></svg>
    )
}


function CareerIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256" {...props}><path fill="currentColor" d="M216 64h-40a48 48 0 0 0-96 0H40a16 16 0 0 0-16 16v120a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16m-88-32a32 32 0 0 1 32 32H96a32 32 0 0 1 32-32"></path></svg>
    )
}

export async function Footer() {
    const client = createClient();
    const settings = await client.getSingle('settings');

    // Helper function to render navigation links
    const renderNavLinks = (
        items: { label: KeyTextField; link_to_services?: LinkField; link_to_company?: LinkField }[],
        isServiceLink: boolean = false
    ) => {
        return items.map((item) => (
            <PrismicNextLink
                className="anchor-link block w-fit text-sm md:text-lg"
                key={item.label || 'unnamed-link'} // Fallback key for safety
                field={isServiceLink ? item.link_to_services : item.link_to_company}
            >
                {item.label}
            </PrismicNextLink>
        ));
    };

    return (
        <Bounded>
            <footer className="flex flex-col w-full mt-16 lg:mt-24 items-center gap-8 lg:gap-10 justify-between px-2 py-4">
                {/* Tagline */}
                <div className="text-3xl md:text-5xl px-4">
                    <div className="top-20 left-0 rounded-full bg-slate-100 h-1 m-2 w-1/5" />
                    <em className="text-transparent bg-clip-text not-italic bg-gradient-to-r from-brand to-violet-600 via-brand">
                        Automate Today <br /> Know What's Next
                    </em>
                </div>
                <div className="flex flex-col border-b border-gray-600 pb-4 md:pb-0 w-full">

                    <div className="flex flex-col gap-4 md:gap-0  md:flex-row justify-between w-full md:items-center">
                        <div className="w-full md:w-fit border-b  md:border-none py-2 md:py-0 border-gray-600">

                            <Image

                                src="/NdealLogoWithTm.svg"
                                alt="NdealLogo logo"
                                width={130}
                                height={38}
                                priority
                            />
                        </div>
                        <div className="flex justify-center w-full md:w-fit md:justify-between gap-8 items-center">
                            <a href="/contact" className="inline-flex gap-2 items-center ">
                                <span><ContactIcon /></span>Contact us
                            </a>
                            <a href="/" className="inline-flex gap-2 items-center ">
                                <span><CareerIcon /></span>Careers
                            </a>
                        </div>


                    </div>
                </div>




                {/* Navigation Section */}
                <nav aria-label="footer" className="grid grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl py-4 mx-auto md:px-2">
                    {/* Company Links */}
                    <div className="flex flex-col md:text-sm text-xs gap-4">
                        {renderNavLinks(settings.data.company)}
                    </div>

                    {/* Service Links */}
                    <div className="flex flex-col gap-4">
                        {renderNavLinks(settings.data.our_services, true)}
                    </div>

                    {/* Contact Information */}
                    <div className="flex flex-col gap-4">
                        <ul className="flex flex-col gap-4">
                            {settings.data.contact_information.map((item) => (
                                <li key={item.label || 'contact-item'}>
                                    <PrismicRichText field={item.information} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>

                {/* Policies Section */}
                <div className="flex w-full justify-between md:px-10 px-2 py-4 border border-r-transparent border-l-transparent rounded-none border-gray-600 md:items-center">
                    <div className="flex items-center gap-4 md:gap-8">
                        <a href="https://www.linkedin.com/company/ndeal/" target="_blank" rel="noopener noreferrer" className="opacity-50 hover:opacity-100 ">
                            <LinkedinIcon />
                        </a>
                        <a href="https://youtube.com/@ndeal_org" target="_blank" rel="noopener noreferrer" className="opacity-50 hover:opacity-100 ">
                            <YoutubeIcon />
                        </a>
                        <a href="https://x.com/Ndeal_org" target="_blank" rel="noopener noreferrer" className="opacity-50 hover:opacity-100 ">
                            <TwitterIcon />
                        </a>
                    </div>
                    <ul className="flex   text-xs gap-4 justify-center">
                        {settings.data.policies.map((item) => (
                            <li key={item.label || 'policy-item'}>
                                <PrismicNextLink
                                    field={item.link_to_policies}
                                    className="inline-flex text-gray-500 hover:text-gray-200 items-center"
                                >
                                    {item.label}
                                </PrismicNextLink>
                            </li>
                        ))}
                    </ul>

                </div>
            </footer>

            <p className="mx-auto text-xs gap-2 inline-flex items-center"><span><Copyright /></span> 2024-2025 Ndeal. All Right Reserved</p>

        </Bounded>
    );
}

export default Footer;